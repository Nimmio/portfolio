import PageHeader from "@/components/pageHeader/page-header";
import { getInfos, getLegal } from "@/lib/utils";
import { m } from "@/paraglide/messages";
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
      <PageHeader title={m.born_novel_ladybug_grow()} />
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          {m.arable_icy_hornet_dream()}:{" "}
          {format(parseISO(legal.lastUpdate), "PPP")}
        </p>

        <h2>{m.basic_sound_vole_pet()}</h2>
        <p>{m.grassy_gaudy_porpoise_heart()}</p>

        <h2>{m.dark_teal_cobra_nudge()}</h2>
        <p>{m.fancy_key_vulture_snip()}</p>
        <p>
          {info.Name}
          <br />
          {legal.street}
          <br />
          {legal.city}
          <br />
          {m.gaudy_mealy_crab_slide()}: {info.Email}
        </p>

        <h2>{m.candid_quick_halibut_aid()}</h2>
        <h3>{m.grand_flaky_larva_sway()}</h3>
        <p>{m.away_giant_turtle_foster()}</p>
        <ul>
          <li>{m.sour_major_lionfish_bake()}</li>
          <li>{m.chunky_suave_parrot_zip()}</li>
        </ul>
        <p>{m.alive_busy_rat_clap()}</p>
        <h3>{m.slimy_white_hedgehog_delight()}</h3>
        <p>{m.fit_cute_cow_hunt()}</p>
        <h3>{m.fresh_crazy_herring_bless()}</h3>
        <p>{m.upper_smart_nuthatch_ripple()}</p>
        <p>{m.house_tame_ibex_bless()}</p>
        <p>{m.fun_cute_thrush_find()}</p>

        <h2>{m.real_game_mouse_borrow()}</h2>
        <p>{m.yummy_witty_martin_tear()}</p>
        <ul>
          <li>
            <b>{m.honest_drab_donkey_aspire()}</b>: {m.bald_level_lynx_trim()}
          </li>
          <li>
            <b>{m.early_sunny_panda_attend()}</b>: {m.north_loud_hornet_cut()}
          </li>
          <li>
            <b>{m.soft_giant_dove_flop()}</b>: {m.warm_lime_anteater_lift()}
          </li>
          <li>
            <b>{m.active_last_elk_earn()}</b>:{" "}
            {m.smug_dark_shell_rest({ email: info.Email })}
          </li>
          <li>
            <b>{m.livid_brief_gull_pet()}</b>: {m.late_less_sloth_stab()}
          </li>
          <li>
            <b>{m.civil_teal_thrush_beam()}</b>: {m.neat_front_llama_radiate()}
          </li>
          <li>
            <b>{m.good_tasty_macaw_hug()}</b>: {m.sour_lost_javelina_bubble()}
          </li>
        </ul>
      </div>
    </div>
  );
}
