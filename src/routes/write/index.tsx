import { ContactForm } from "@/components/contactForm/contac-form";
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
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Write Me</h1>
      </div>
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

          <div className="mt-8">
            <h3>Data Protection</h3>
            <p className="text-sm text-muted-foreground">
              Your personal data will only be used to respond to your inquiry
              and will not be shared with third parties. For more information,
              please see our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
