import DashboardHeader from "@/components/dashboard-header";
import DashboardFeaturedProjects from "@/components/dashboard-featured-projects";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const name = process.env.NAME || "";
  const job = process.env.JOB || "";
  const email = process.env.EMAIL || "";
  const { lang } = (await params) || "en";

  return (
    <main className="flex-1">
      <DashboardHeader email={email} job={job} name={name} lang={lang} />
      <DashboardFeaturedProjects lang={lang} />
    </main>
  );
}
