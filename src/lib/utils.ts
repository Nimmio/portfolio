import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as fs from "node:fs";
import { createServerFn } from "@tanstack/react-start";
import { about, infos, projects, skills } from "@/types/data";
import { createServer } from "node:http";
import { formSchema } from "@/components/contactForm/contac-form";
import { sendMail } from "./mailer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const readJson = async (filename: string): Promise<unknown> => {
  return JSON.parse(
    await fs.promises.readFile(`src/public/${filename}`, "utf8")
  );
};

export const getInfos = createServerFn({
  method: "GET",
}).handler(async () => {
  return (await readJson("info.json")) as infos;
});

export const getSkills = createServerFn({
  method: "GET",
}).handler(async () => {
  return (await readJson("skills.json")) as skills;
});

export const getAboutMe = createServerFn({
  method: "GET",
}).handler(async () => {
  return (await readJson("about.json")) as about;
});

export const getProjects = createServerFn({
  method: "GET",
}).handler(async () => {
  return (await readJson("projects.json")) as projects;
});

export const getFeaturedProjects = createServerFn({
  method: "GET",
}).handler(async () => {
  const projects = (await readJson("projects.json")) as projects;
  return projects.filter((project) => project.featured);
});

export const submitContactForm = createServerFn({
  method: "POST",
})
  .validator((d: unknown) => formSchema.parse(d))
  .handler(async ({ data }) => {
    // Verify CAPTCHA
    const { captchaQuestion, captchaAnswer } = data;
    const isValidCaptcha = verifyCaptcha(captchaQuestion, captchaAnswer);

    if (!isValidCaptcha) {
      return {
        success: false,
        message: "Incorrect CAPTCHA answer. Please try again.",
      };
    }

    // Simulate sending email (in a real app, you would use an email service)
    try {
      // Add a delay to simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { name, email, subject, message } = data;
      await sendMail({
        to: process.env.TARGET_EMAIL as string,
        html: `
        <p>
          Sender: ${name} - ${email}
        </p>
        <p>
          ${message}
        </p>`,
        subject: `${name} - ${email} - ${subject}`,
        text: message,
      });

      return {
        success: true,
        message: "Message sent successfully!",
      };
    } catch (error) {
      console.error("Error sending message:", error);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }
  });

// Function to verify the CAPTCHA
function verifyCaptcha(question: string, answer: string): boolean {
  try {
    // Parse the question to extract the operation and numbers
    const parts = question.split(" ");
    const num1 = Number.parseInt(parts[0]);
    const operation = parts[1];
    const num2 = Number.parseInt(parts[2]);

    // Calculate the expected answer
    let expectedAnswer: number;
    switch (operation) {
      case "+":
        expectedAnswer = num1 + num2;
        break;
      case "-":
        expectedAnswer = num1 - num2;
        break;
      case "*":
        expectedAnswer = num1 * num2;
        break;
      default:
        return false;
    }

    // Compare with the provided answer
    return Number.parseInt(answer) === expectedAnswer;
  } catch (error) {
    return false;
  }
}
