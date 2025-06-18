import { ContactForm } from "@/components/contactForm/contac-form";
import PageHeader from "@/components/pageHeader/page-header";
import { Button } from "@/components/ui/button";
import { getInfos } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/write/")({
  component: RouteComponent,
  loader: async () => await getInfos(),
});

function RouteComponent() {
  const info = Route.useLoaderData();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title="Write Me" />

      <div>
        <div className="prose prose-slate dark:prose-invert">
          <h2>Get in Touch</h2>
          <p>
            Have a question or want to work together? Feel free to reach out
            using the contact form. I'll get back to you as soon as possible.
          </p>
          <h3>Contact Information</h3>
          <p>
            Email: <a href={`mailto:${info.Email}`}>{info.Email}</a>
            <br />
            Location: {info.location}
            <br />
            LinkedIn:{" "}
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </p>
        </div>
      </div>
      <div>
        <ContactForm email={info.Email} />
      </div>
    </div>
  );
}
