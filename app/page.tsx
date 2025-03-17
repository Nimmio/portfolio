import DashboardHeader from "@/components/dashboard-header";
import DashboardFeaturedProjects from "@/components/dashboard-featured-projects";

export default function Home() {
  const name = process.env.NAME || "";
  const job = process.env.JOB || "";
  const email = process.env.EMAIL || "";

  return (
    <main className="flex-1">
      <DashboardHeader email={email} job={job} name={name} />
      <DashboardFeaturedProjects />
    </main>
  );
}
