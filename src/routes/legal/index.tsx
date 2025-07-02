import FormatDate from "@/components/formatDate/format-date";
import PageHeader from "@/components/pageHeader/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getInfos, getLegal } from "@/lib/utils";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { parseISO, format } from "date-fns";
export const Route = createFileRoute("/legal/")({
  component: RouteComponent,
  loader: async () => await Promise.all([getLegal(), getInfos()]),
});

function RouteComponent() {
  const [legal, info] = Route.useLoaderData();
  const locale = getLocale();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title={m.orange_careful_dingo_dig()} />
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{m.top_best_puma_chop()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                {m.large_bold_peacock_promise()}:
              </h3>
              <p>
                {info.Name}
                <br />
                {legal.street}
                <br />
                {legal.city}
                <br />
                {legal.country[locale]}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{m.antsy_zippy_haddock_clasp()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>{m.gaudy_mealy_crab_slide()}:</strong>{" "}
              <a
                href={`mailto:${info.Email}`}
                className="text-primary hover:underline"
              >
                {info.Email}
              </a>
            </p>
            <p>
              <strong>{m.fun_quick_gorilla_spin()}:</strong>{" "}
              <Link to="/" className="text-primary hover:underline">
                {legal.website}
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{m.ok_suave_cuckoo_grin()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>{m.loved_nimble_pelican_hint()}:</strong> {info.Job}
              <br />
              <strong>{m.busy_caring_okapi_pinch()}:</strong>{" "}
              {m.new_livid_mongoose_imagine()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{m.cute_early_wombat_mix()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {info.Name}
              <br />
              {legal.street}
              <br />
              {legal.city}
              <br />
              {legal.country[locale]}
            </p>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>{m.honest_bald_parakeet_cheer()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{m.bright_noble_jaguar_walk()}</p>
            <p>{m.noble_smart_sloth_lift()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{m.light_bland_ray_evoke()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{m.royal_main_dingo_pinch()}</p>
            <p>{m.same_civil_shell_kiss()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{m.equal_lofty_sawfish_heart()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{m.quaint_strong_herring_drip()}</p>
            <p>{m.misty_livid_herring_cheer()}</p>
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground">
          <p>
            {m.arable_icy_hornet_dream()}:{" "}
            <FormatDate isoDate={legal.lastUpdate} />
          </p>
        </div>
      </div>
    </div>
  );
}
