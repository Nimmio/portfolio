import PageHeader from "@/components/pageHeader/page-header";
import { getInfos, getLegal } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";

export const Route = createFileRoute("/privacy/")({
  component: RouteComponent,
  loader: async () => await Promise.all([getLegal(), getInfos()]),
});

function RouteComponent() {
  const [legal, info] = Route.useLoaderData();

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Privacy Policy" />
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>Last updated: {format(parseISO(legal.lastUpdate), "PPP")}</p>

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how I collect, use, store, and protect
          your personal data when you visit my portfolio website. I am committed
          to ensuring the privacy and security of your personal information in
          compliance with the General Data Protection Regulation (GDPR).
        </p>

        <h2>2. Data Controller</h2>
        <p>
          The party responsible for data processing (the "Controller") as
          defined by the General Data Protection Regulation (GDPR) is:
        </p>
        <p>
          {info.Name}
          <br />
          {legal.street}
          <br />
          {legal.city}
          <br />
          Email: {info.Email}
        </p>

        <h2>3. Contact via Contact Form or Email</h2>
        <h3>a) Type and Purpose of Data Processing</h3>
        <p>
          When you contact us via the contact form or by email, the personal
          data you voluntarily provide will be processed to handle your request.
          Specifically, this includes:
        </p>
        <ul>
          <li>Your Name</li>
          <li>Your Email Address</li>
        </ul>
        <p>
          The sole purpose of processing this data is to communicate with you to
          answer your inquiry and for any related technical administration.
        </p>
        <h3>b) Legal Basis</h3>
        <p>
          The processing of this data is based on your explicit consent pursuant
          to Art. 6(1)(a) GDPR, which you grant by submitting your request. If
          your inquiry aims at concluding a contract (e.g., a project inquiry),
          Art. 6(1)(b) GDPR serves as an additional legal basis for processing.
        </p>
        <h3>c) Storage Duration</h3>
        <p>
          The data you provide will be stored by us until the purpose of the
          conversation is fulfilled. After your request has been fully
          processed, your data will be deleted. This will generally occur no
          later than 90 days after the communication ends.
        </p>
        <p>
          Data will be deleted immediately upon your request (see "Your Rights
          as a Data Subject").
        </p>
        <p>
          Statutory retention obligations, for example, for business
          correspondence under commercial or tax law, remain unaffected by the
          deletion. In such cases, the processing of the data will be
          restricted.
        </p>

        <h2>4. Your Rights as a Data Subject</h2>
        <p>
          As a data subject, you are entitled to comprehensive rights regarding
          the processing of your data:
        </p>
        <ul>
          <li>
            <b>Right of Access (Art. 15 GDPR)</b>: You have the right to obtain
            confirmation as to whether or not personal data concerning you is
            being processed, and, where that is the case, access to that
            information.
          </li>
          <li>
            <b>Right to Rectification (Art. 16 GDPR)</b>: You have the right to
            obtain the immediate rectification of inaccurate personal data
            concerning you.
          </li>
          <li>
            <b>Right to Erasure (Art. 17 GDPR)</b>: You have the right to
            request the immediate erasure of personal data concerning you. I
            will comply with this request unless there are legal retention
            obligations to the contrary.
          </li>
          <li>
            <b>Right to Withdraw Consent (Art. 7(3) GDPR)</b>: You have the
            right to withdraw your consent to the processing of your data at any
            time for the future. The withdrawal of consent shall not affect the
            lawfulness of processing based on consent before its withdrawal. You
            can declare your withdrawal informally via email to [your email
            address].
          </li>
          <li>
            <b>Right to Restriction of Processing (Art. 18 GDPR)</b>: You have
            the right to request the restriction of the processing of your data.
          </li>
          <li>
            <b>Right to Data Portability (Art. 20 GDPR)</b>: You have the right
            to receive the personal data concerning you, which you have
            provided, in a structured, commonly used and machine-readable
            format.
          </li>
          <li>
            <b>
              Right to Lodge a Complaint with a Supervisory Authority (Art. 77
              GDPR)
            </b>
            : You have the right to lodge a complaint with a data protection
            supervisory authority about my processing of your personal data.
          </li>
        </ul>
      </div>
    </div>
  );
}
