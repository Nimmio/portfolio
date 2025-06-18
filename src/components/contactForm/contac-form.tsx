import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Captcha from "../captcha/captcha";
import { Link } from "@tanstack/react-router";
import { submitContactForm } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  captchaAnswer: z.string().min(1, {
    message: "Please solve the security question.",
  }),
  captchaQuestion: z.string(),
  gdprConsent: z.boolean().refine((value) => value === true, {
    message: "You must accept the data protection terms to proceed.",
  }),
});

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captchaAnswer: "",
      captchaQuestion: "",
      gdprConsent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm({ data: values });

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          success: false,
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="What is this regarding?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message here..."
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Captcha
            onQuestionGenerated={(question) => {
              form.setValue("captchaQuestion", question);
            }}
            onAnswerChange={(answer) => {
              form.setValue("captchaAnswer", answer);
              // Clear any existing error when user types
              if (form.formState.errors.captchaAnswer) {
                form.clearErrors("captchaAnswer");
              }
            }}
          />

          {form.formState.errors.captchaAnswer && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.captchaAnswer.message}
            </p>
          )}

          <FormField
            control={form.control}
            name="captchaQuestion"
            render={() => (
              <FormItem className="hidden">
                <FormControl>
                  <Input type="hidden" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gdprConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    <span>
                      I have read the{" "}
                      <Link
                        to="/privacy"
                        className="underline text-primary hover:text-primary/80"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and I consent to my data being collected and stored
                      electronically to answer my request.
                      <br /> Note: You can withdraw your consent at any time for
                      the future by sending an email to{" "}
                      <a
                        className="underline text-primary hover:text-primary/80"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                      .
                    </span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {submitStatus && (
            <Alert variant={submitStatus.success ? "default" : "destructive"}>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
