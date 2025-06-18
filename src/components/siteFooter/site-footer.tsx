import { Link } from "@tanstack/react-router";
import React from "react";

interface SiteFooterProps {
  name?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

const SiteFooter = ({
  name = "John Doe",
  email = "contact@example.com",
  github = "https://github.com",
  linkedin = "https://linkedin.com",
}: SiteFooterProps) => {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container flex flex-col gap-4 py-8 px-4 md:flex-row md:items-center md:justify-between md:px-6 mx-auto">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            to="/legal"
            className="text-sm text-muted-foreground hover:underline"
          >
            Legal Notice
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/write"
            className="text-sm text-muted-foreground hover:underline"
          >
            Write Me
          </Link>
          <a
            href={`mailto:${email}`}
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
