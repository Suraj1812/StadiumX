import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Play,
  ShoppingBag,
  Ticket,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const imageAssets = {
  hero: "/media/cricket-stadium.jpg",
  stadium: "/media/cricket-stadium.jpg",
  ball: "/media/cricket-ball.jpg",
  batter: "/media/cricket-batter.jpg",
  wickets: "/media/cricket-wickets.jpg",
  crowd: "/media/wankhede-crowd.jpg",
  ground: "/media/delhi-cricket-ground.jpg",
};

const fixtures = [
  {
    date: "21 Jun",
    day: "Saturday",
    competition: "Premier T20 League",
    home: "StadiumX CC",
    away: "Riverdale Strikers",
    venue: "StadiumX Oval",
    time: "7:30 PM",
    status: "Tickets",
    tone: "bg-[#0b6b43]",
  },
  {
    date: "28 Jun",
    day: "Saturday",
    competition: "County Cup",
    home: "North City XI",
    away: "StadiumX CC",
    venue: "North City Ground",
    time: "4:00 PM",
    status: "Away",
    tone: "bg-[#123524]",
  },
  {
    date: "05 Jul",
    day: "Sunday",
    competition: "Premier T20 League",
    home: "StadiumX CC",
    away: "Green Park Royals",
    venue: "StadiumX Oval",
    time: "7:30 PM",
    status: "Members",
    tone: "bg-[#d69b12]",
  },
];

const table = [
  ["1", "StadiumX CC", "10", "8", "16", "+1.21"],
  ["2", "Riverdale Strikers", "10", "7", "14", "+0.84"],
  ["3", "Green Park Royals", "10", "6", "12", "+0.32"],
  ["4", "North City XI", "10", "5", "10", "-0.08"],
];

const squad = [
  {
    name: "Aarav Malik",
    role: "Opening batter",
    image: imageAssets.batter,
    stats: "684 runs",
    note: "Starts fast against pace and owns the powerplay.",
    position: "object-[50%_28%]",
  },
  {
    name: "Kabir Shah",
    role: "Left-arm quick",
    image: imageAssets.ball,
    stats: "28 wickets",
    note: "New-ball swing, hard length, and late-over control.",
    position: "object-[58%_50%]",
  },
  {
    name: "Maya Sen",
    role: "Middle-order finisher",
    image: imageAssets.wickets,
    stats: "SR 189",
    note: "Clean hitting through long-on and calm chases.",
    position: "object-[50%_46%]",
  },
];

const news = [
  {
    type: "Match report",
    title: "StadiumX hold their nerve in a final-over home win",
    image: imageAssets.batter,
    meta: "First XI",
    position: "object-[50%_32%]",
  },
  {
    type: "Academy",
    title: "Summer pace camp opens for junior and senior groups",
    image: imageAssets.stadium,
    meta: "Training",
    position: "object-center",
  },
  {
    type: "Women's cricket",
    title: "Senior squad announce five-match community series",
    image: imageAssets.ball,
    meta: "Club news",
    position: "object-[60%_52%]",
  },
];

const media = [
  {
    title: "Matchday slow motion",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/This_slow-motion_video_captures_locals_from_Hund_village_playing_cricket_near_the_Indus_River%2C_a_popular_pastime_in_rural_Pakistan..webm",
    poster: imageAssets.batter,
  },
  {
    title: "All-rounder profile",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/George_Bagshaw%2C_USC_All_rounder.webm",
    poster: imageAssets.wickets,
  },
  {
    title: "Women's cricket fixture",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Cricketwedstrijd_voor_dames.webm",
    poster: imageAssets.stadium,
  },
];

const gallery = [
  {
    title: "Dharamsala stand view",
    image: imageAssets.hero,
    className: "md:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Net session",
    image: imageAssets.batter,
    className: "",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Home ground",
    image: imageAssets.crowd,
    className: "",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Powerplay",
    image: imageAssets.ground,
    className: "md:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const contactCards: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
    {
      icon: Users,
      title: "Membership",
      text: "Season access, family days, member seating, and club events.",
    },
    {
      icon: Trophy,
      title: "Academy",
      text: "Junior coaching, senior nets, trials, and summer programs.",
    },
    {
      icon: Mail,
      title: "Sponsorship",
      text: "Partnerships, matchday branding, hospitality, and media.",
    },
  ];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/stadiumx-mark.svg"
        alt="StadiumX Cricket Club"
        width={48}
        height={48}
        priority
        unoptimized
        className="h-11 w-11 shrink-0"
      />
      <div className="leading-none">
        <p className="font-display text-2xl uppercase tracking-normal text-[#111827]">
          StadiumX
        </p>
        <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0b6b43]">
          Cricket Club
        </p>
      </div>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0b6b43]">
        {kicker}
      </p>
      <h2 className="font-display text-4xl uppercase leading-none tracking-normal text-[#111827] sm:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#59665d]">{text}</p>
      ) : null}
    </div>
  );
}

function TeamMark({ children }: { children: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#dce5d8] bg-[#f5f7ef] font-display text-xl text-[#0b6b43]">
      {children}
    </span>
  );
}

export function ClubSite() {
  return (
    <main className="min-h-screen bg-[#f7f7f1] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-[#dce5d8] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#1f2937] lg:flex">
            <a className="text-[#0b6b43]" href="#home">
              Home
            </a>
            <a className="transition hover:text-[#0b6b43]" href="#matches">
              Matches
            </a>
            <a className="transition hover:text-[#0b6b43]" href="#team">
              Squad
            </a>
            <a className="transition hover:text-[#0b6b43]" href="#media">
              Media
            </a>
            <a className="transition hover:text-[#0b6b43]" href="#news">
              News
            </a>
            <a className="transition hover:text-[#0b6b43]" href="#contact">
              Join
            </a>
          </nav>
          <a
            href="#matches"
            className="hidden h-10 items-center gap-2 rounded-md border border-[#0b6b43] bg-white px-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#0b6b43] transition hover:bg-[#0b6b43] hover:text-white lg:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Tickets
          </a>
          <details className="relative lg:hidden">
            <summary
              aria-label="Open navigation"
              className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-md border border-[#dce5d8] bg-white"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-14 grid w-60 gap-1 rounded-md border border-[#dce5d8] bg-white p-2 shadow-xl">
              {["matches", "team", "media", "news", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="rounded px-3 py-3 text-sm font-bold capitalize text-[#111827] hover:bg-[#edf5ec]"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-[#e9efe3]">
        <Image
          src={imageAssets.hero}
          alt="Cricket stadium surrounded by mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,241,0.98)_0%,rgba(247,247,241,0.86)_36%,rgba(247,247,241,0.18)_72%,rgba(247,247,241,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f7f7f1] to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-4 pb-4 pt-2 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr_28rem] lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-normal text-[#111827] sm:text-8xl lg:text-9xl">
              We look up, never give up.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#344238]">
              Fixtures, results, tickets, player profiles, reports, and match
              videos from StadiumX Cricket Club.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#matches"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0b6b43] px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-sm transition hover:bg-[#06492f]"
              >
                Upcoming matches <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#media"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#cbd8c7] bg-white px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-[#111827] shadow-sm transition hover:border-[#0b6b43]"
              >
                Watch highlights <Play className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="rounded-xl border border-[#dce5d8] bg-white p-5 shadow-[0_18px_60px_rgb(16_33_23/0.14)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0b6b43]">
                Next home match
              </p>
              <Ticket className="h-5 w-5 text-[#0b6b43]" aria-hidden="true" />
            </div>
            <div className="grid gap-4 rounded-lg bg-[#f4f7f0] p-5">
              <div className="flex items-center gap-3">
                <TeamMark>SX</TeamMark>
                <p className="font-display text-4xl uppercase leading-none text-[#111827]">
                  StadiumX CC
                </p>
              </div>
              <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#0b6b43]">
                vs
              </p>
              <div className="flex items-center justify-end gap-3">
                <p className="text-right font-display text-4xl uppercase leading-none text-[#111827]">
                  Riverdale
                </p>
                <TeamMark>RS</TeamMark>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm font-medium text-[#4b5563]">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#0b6b43]" aria-hidden="true" />
                Saturday, 21 Jun 2026
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#0b6b43]" aria-hidden="true" />
                7:30 PM
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#0b6b43]" aria-hidden="true" />
                StadiumX Oval
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#dce5d8] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#dce5d8] px-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {[
            ["Founded", "2012"],
            ["Home form", "8 wins"],
            ["Academy players", "42"],
            ["Net sessions", "5 weekly"],
          ].map(([label, value]) => (
            <div key={label} className="py-5 sm:px-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#6b746d]">
                {label}
              </p>
              <p className="mt-1 font-display text-4xl uppercase leading-none text-[#111827]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="matches" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Match centre"
          title="Fixtures and standings"
          text="Home nights, away trips, league table, and the run-in for the summer title."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_25rem]">
          <div className="grid gap-4">
            {fixtures.map((fixture) => (
              <article
                key={`${fixture.date}-${fixture.away}`}
                className="group grid gap-5 rounded-lg border border-[#dce5d8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl sm:grid-cols-[8rem_1fr_auto] sm:items-center"
              >
                <div className="rounded-md bg-[#f4f7f0] p-4">
                  <p className="font-display text-4xl uppercase leading-none text-[#111827]">
                    {fixture.date}
                  </p>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0b6b43]">
                    {fixture.day}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#6b7280]">
                    {fixture.competition}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-7 text-[#111827]">
                    {fixture.home} <span className="text-[#9ca3af]">vs</span> {fixture.away}
                  </h3>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-[#6b7280]">
                    <span>{fixture.venue}</span>
                    <span>{fixture.time}</span>
                  </p>
                </div>
                <a
                  href="#contact"
                  className={`inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition group-hover:scale-[1.02] ${fixture.tone}`}
                >
                  {fixture.status}
                </a>
              </article>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border border-[#dce5d8] bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0b6b43]">
                League table
              </p>
              <table className="w-full text-left text-sm">
                <thead className="border-b border-[#dce5d8] text-xs uppercase tracking-[0.12em] text-[#6b7280]">
                  <tr>
                    <th className="py-3">#</th>
                    <th>Club</th>
                    <th className="text-right">Pts</th>
                    <th className="text-right">NRR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf1ea]">
                  {table.map((row) => (
                    <tr key={row[1]}>
                      <td className="py-4 font-bold text-[#0b6b43]">{row[0]}</td>
                      <td className="font-bold">{row[1]}</td>
                      <td className="text-right font-bold">{row[4]}</td>
                      <td className="text-right text-[#6b7280]">{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-lg bg-[#103d2c] p-5 text-white shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#a9e8bd]">
                Last result
              </p>
              <p className="mt-3 font-display text-5xl uppercase leading-none">187/4</p>
              <p className="mt-2 text-sm font-medium text-white/76">
                StadiumX beat North City XI by 18 runs at home.
              </p>
              <div className="mt-5 h-2 rounded-full bg-white/15">
                <div className="h-2 w-[78%] rounded-full bg-[#e6b325]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Squad"
            title="Players to watch"
            text="First XI form notes, senior roles, and the names driving the season."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {squad.map((player) => (
              <article
                key={player.name}
                className="group overflow-hidden rounded-lg border border-[#dce5d8] bg-[#f7f7f1] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8eee3]">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover transition duration-500 group-hover:scale-105 ${player.position}`}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0b6b43]">
                    {player.role}
                  </p>
                  <h3 className="mt-2 font-display text-4xl uppercase leading-none text-[#111827]">
                    {player.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-[#dce5d8] pt-4">
                    <p className="font-extrabold text-[#111827]">{player.stats}</p>
                    <ChevronRight className="h-5 w-5 text-[#0b6b43]" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#59665d]">{player.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Media"
          title="Videos and gallery"
          text="Matchday clips, ground views, training stills, and archive moments from across the cricket calendar."
        />
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-lg border border-[#dce5d8] bg-white p-4 shadow-sm">
            <video
              src={media[0].src}
              poster={media[0].poster}
              controls
              preload="metadata"
              aria-label={media[0].title}
              className="aspect-video w-full rounded-md bg-[#101b14] object-cover"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <h3 className="font-display text-4xl uppercase leading-none text-[#111827]">
                {media[0].title}
              </h3>
              <Play className="h-6 w-6 text-[#0b6b43]" aria-hidden="true" />
            </div>
          </div>
          <div className="grid gap-4">
            {media.slice(1).map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#dce5d8] bg-white p-4 shadow-sm"
              >
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  preload="metadata"
                  aria-label={item.title}
                  className="aspect-video w-full rounded-md bg-[#101b14] object-cover"
                />
                <h3 className="mt-3 text-lg font-extrabold text-[#111827]">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-lg border border-[#dce5d8] bg-white shadow-sm ${item.className}`}
            >
              <div className={`relative ${item.ratio}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                <Camera className="h-4 w-4" aria-hidden="true" />
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="news" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Club news"
            title="Latest from the club"
            text="Reports, academy updates, community fixtures, and ticket windows."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-lg border border-[#dce5d8] bg-[#f7f7f1] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-[#e8eee3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover transition duration-500 group-hover:scale-105 ${item.position}`}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0b6b43]">
                    {item.type} / {item.meta}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-7 text-[#111827]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-lg border border-[#dce5d8] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[320px] bg-[#103d2c]">
              <Image
                src={imageAssets.stadium}
                alt="StadiumX home ground"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170f]/82 via-[#07170f]/18 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b9f2c5]">
                  Matchday access
                </p>
                <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
                  Join without the form drama.
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0b6b43]">
                Membership
              </p>
              <h3 className="mt-3 max-w-xl font-display text-4xl uppercase leading-none text-[#111827] sm:text-5xl">
                Clear actions for fans, players, and partners.
              </h3>
              <div className="mt-8 grid gap-3">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={card.title}
                      href="mailto:hello@stadiumx.club"
                      className="group flex items-center justify-between gap-4 rounded-md border border-[#dce5d8] bg-[#fbfcf7] p-4 transition hover:border-[#0b6b43] hover:bg-[#f0f7ee]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-[#0b6b43] shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-extrabold text-[#111827]">
                            {card.title}
                          </span>
                          <span className="mt-1 block text-sm leading-5 text-[#59665d]">
                            {card.text}
                          </span>
                        </span>
                      </span>
                      <ChevronRight
                        className="h-5 w-5 shrink-0 text-[#0b6b43] transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@stadiumx.club"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-[#0b6b43] px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#06492f]"
                >
                  Email club
                </a>
                <a
                  href="#matches"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-[#dce5d8] px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[#111827] transition hover:border-[#0b6b43]"
                >
                  View fixtures
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#08140f] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/stadiumx-mark.svg"
              alt="StadiumX Cricket Club"
              width={48}
              height={48}
              unoptimized
              className="h-11 w-11 shrink-0"
            />
            <div className="leading-none">
              <p className="font-display text-2xl uppercase tracking-normal text-white">
                StadiumX
              </p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#9cd03b]">
                Cricket Club
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-extrabold uppercase tracking-[0.1em] text-white/72">
            <a href="#matches" className="hover:text-white">
              Fixtures
            </a>
            <a href="#team" className="hover:text-white">
              Squad
            </a>
            <a href="#media" className="hover:text-white">
              Media
            </a>
            <a href="#news" className="hover:text-white">
              News
            </a>
          </div>
          <p className="text-sm text-white/62">2026 StadiumX Cricket Club</p>
        </div>
      </footer>
    </main>
  );
}
