import { ContactForm } from "@/components/contactForm/contac-form";
import PageHeader from "@/components/pageHeader/page-header";
import { getInfos } from "@/lib/utils";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/write/")({
  component: RouteComponent,
  loader: async () => await getInfos(),
});

function RouteComponent() {
  const info = Route.useLoaderData();
  const locale = getLocale();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title={m.yummy_zesty_pug_nudge()} />

      <div>
        <div className="prose prose-slate dark:prose-invert">
          <h2>{m.gross_funny_boar_nudge()}</h2>
          <p>{m.mean_sweet_jay_flow()}</p>
          <h3>{m.antsy_zippy_haddock_clasp()}</h3>
          <p>
            {m.gaudy_mealy_crab_slide()}:{" "}
            <a href={`mailto:${info.Email}`}>{info.Email}</a>
            <br />
            {m.short_dull_rook_believe()}: {info.location[locale]}
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
