import React from "react";
import { Badge } from "../ui/badge";

interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <Badge variant="outline" className="px-3 py-1 text-sm">
      {name}
    </Badge>
  );
};

export default SkillBadge;
