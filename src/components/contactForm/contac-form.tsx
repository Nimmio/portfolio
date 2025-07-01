import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Captcha from "../captcha/captcha";
import { Link } from "@tanstack/react-router";
import { submitContactForm } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { m } from "@/paraglide/messages";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: m.big_watery_hawk_lend(),
  }),
  email: z.string().email({
    message: m.livid_mushy_lion_buy(),
  }),
  subject: z.string().min(5, {
    message: m.born_jumpy_niklas_savor(),
  }),
  message: z.string().min(10, {
    message: m.agent_ok_niklas_blink(),
  }),
  captchaAnswer: z.string().min(1, {
    message: m.drab_lucky_jannes_gleam(),
  }),
  captchaQuestion: z.string(),
  gdprConsent: z.boolean().refine((value) => value === true, {
    message: m.this_fine_jackdaw_agree(),
  }),
});

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captchaAnswer: "",
      captchaQuestion: "",
      gdprConsent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm({ data: values });

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: m.tidy_clear_albatross_arise(),
        });
        form.reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || m.tough_fancy_vole_honor(),
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: m.kind_glad_termite_pinch(),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder={m.awful_neat_cobra_wish()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder={m.best_ok_grebe_tickle()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={m.trite_zippy_newt_catch()}
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Captcha
            onQuestionGenerated={(question) => {
              form.setValue("captchaQuestion", question);
            }}
            onAnswerChange={(answer) => {
              form.setValue("captchaAnswer", answer);
              // Clear any existing error when user types
              if (form.formState.errors.captchaAnswer) {
                form.clearErrors("captchaAnswer");
              }
            }}
          />

          {form.formState.errors.captchaAnswer && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.captchaAnswer.message}
            </p>
          )}

          <FormField
            control={form.control}
            name="captchaQuestion"
            render={() => (
              <FormItem className="hidden">
                <FormControl>
                  <Input type="hidden" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gdprConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    <span>
                      {m.suave_male_octopus_honor()}{" "}
                      <Link
                        to="/privacy"
                        className="underline text-primary hover:text-primary/80"
                      >
                        {m.born_novel_ladybug_grow()}
                      </Link>{" "}
                      {m.slimy_giant_samuel_launch()}
                      <br /> {m.noisy_agent_cougar_pop()}{" "}
                      <a
                        className="underline text-primary hover:text-primary/80"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                      .
                    </span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {submitStatus && (
            <Alert variant={submitStatus.success ? "default" : "destructive"}>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {m.dry_mushy_starfish_leap()}
              </>
            ) : (
              m.pretty_sweet_manatee_heal()
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
