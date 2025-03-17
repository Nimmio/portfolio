"use server";

import { promises as fs } from "fs";

export const readJsonFile = async (path: string) => {
  const file = await fs.readFile(process.cwd() + path, "utf8");
  return JSON.parse(file);
};
