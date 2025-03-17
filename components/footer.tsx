import Link from "next/link";
import { SiGithub, SiXing } from "@icons-pack/react-simple-icons";

export function Footer() {
  const name = process.env.NAME || "";
  const github = process.env.GITHUB;
  const xing = process.env.XING;
  return (
    <footer className="w-full border-t py-6 p-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {github && (
            <Link href={github} target="_blank" rel="noreferrer">
              <SiGithub className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {xing && (
            <Link href={xing} target="_blank" rel="noreferrer">
              <SiXing className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
