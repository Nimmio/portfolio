import { getLocale } from "@/paraglide/runtime";
import { format, parseISO } from "date-fns";
import React from "react";

interface FormatDateProps {
  isoDate: string;
}

const FormatDate = ({ isoDate }: FormatDateProps) => {
  const locale = getLocale();
  return format(parseISO(isoDate), locale === "en" ? "PPP" : "dd.MM.yyyy");
};

export default FormatDate;
