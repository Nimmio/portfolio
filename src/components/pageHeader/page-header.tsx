import React from "react";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex items-center mb-8">
      <Button variant="ghost" size="sm" asChild className="mr-4">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    </div>
  );
};

export default PageHeader;
