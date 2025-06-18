import PageHeader from "@/components/pageHeader/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getInfos, getLegal } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { parseISO, format } from "date-fns";
export const Route = createFileRoute("/legal/")({
  component: RouteComponent,
  loader: async () => await Promise.all([getLegal(), getInfos()]),
});

function RouteComponent() {
  const [legal, info] = Route.useLoaderData();

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title="Legal Notice" />
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Information pursuant to § 5 TMG (German Telemedia Act)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Responsible for content:</h3>
              <p>
                {info.Name}
                <br />
                {legal.street}
                <br />
                {legal.city}
                <br />
                {legal.country}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${info.Email}`}
                className="text-primary hover:underline"
              >
                {info.Email}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <Link to="/" className="text-primary hover:underline">
                {legal.website}
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Designation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Professional title:</strong> {info.Job}
              <br />
              <strong>Regulatory authority:</strong> Not subject to professional
              chamber regulations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Editorial Responsibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {info.Name}
              <br />
              {legal.street}
              <br />
              {legal.city}
              <br />
              {legal.country}
            </p>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Liability for Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              As service providers, we are liable for own contents of these
              websites according to Paragraph 7, Sect. 1 German Telemedia Act
              (TMG). However, according to Paragraphs 8 to 10 German Telemedia
              Act (TMG), service providers are not under obligation to
              permanently monitor submitted or stored information or to search
              for evidences that indicate illegal activities.
            </p>
            <p>
              Legal obligations to removing information or to blocking the use
              of information remain unchallenged. In this case, liability is
              only possible at the time of knowledge about a specific violation
              of law. Illegal contents will be removed immediately at the time
              we get knowledge of them.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liability for Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our offer includes links to external third party websites. We have
              no influence on the contents of those websites, therefore we
              cannot guarantee for those contents. Providers or administrators
              of linked websites are always responsible for the contents of the
              linked websites. All linked websites have been checked for
              possible violations of law when they were linked to ours. No
              illegal contents were detected at the time of linking.
            </p>
            <p>
              A permanent monitoring of the contents of linked websites cannot
              be imposed without reasonable indications that there has been a
              violation of law. Illegal links will be removed immediately at the
              time we get knowledge of them.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Copyright</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Contents and compilations published on these websites by the
              providers are subject to German copyright laws. Reproduction,
              editing, distribution as well as the use of any kind outside the
              scope of the copyright law require a written permission of the
              author or originator. Downloads and copies of these websites are
              permitted for private use only.
            </p>
            <p>
              The commercial use of our contents without permission of the
              originator is prohibited. Copyright laws of third parties are
              respected as long as the contents on these websites do not
              originate from the provider. Contributions of third parties on
              this site are indicated as such. However, if you notice any
              violations of copyright law, please inform us. Such contents will
              be removed immediately.
            </p>
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground">
          <p>Last updated: {format(parseISO(legal.lastUpdate), "PPP")}</p>
        </div>
      </div>
    </div>
  );
}
