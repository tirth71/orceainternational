import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Heart, Sparkles, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ORCEA Group" },
      { name: "description", content: "ORCEA Group is a multi-division business ecosystem operating in international trade, education, consulting, logistics and digital marketing." },
      { property: "og:title", content: "About — ORCEA Group" },
      { property: "og:description", content: "Vision, mission and leadership behind ORCEA Group's global ecosystem." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, label: "Integrity", desc: "Honest, transparent dealings across every engagement." },
  { icon: Sparkles, label: "Excellence", desc: "World-class standards in every deliverable." },
  { icon: TrendingUp, label: "Innovation", desc: "Modern thinking applied to traditional industries." },
  { icon: Heart, label: "Growth", desc: "Building businesses, careers, and communities." },
  { icon: Eye, label: "Transparency", desc: "Clear communication at every stage." },
  { icon: Users, label: "Partnership", desc: "Long-term relationships, not transactions." },
];

const team = [
  { name: "Founder", role: "Chairman & CEO", bio: "Architect of the ORCEA ecosystem with 15+ years across global trade." },
  { name: "Head of Academy", role: "Director, Education", bio: "Leading curriculum design and mentorship across cohorts." },
  { name: "Head of Logistics", role: "Director, Logistics", bio: "Cross-border supply chain expert across 40+ countries." },
  { name: "Head of Consulting", role: "Director, Consulting", bio: "Market entry strategist for SMEs and enterprises." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ORCEA Group"
        title="A global ecosystem for ambitious businesses."
        description="ORCEA Group was founded to bring together every capability a modern global business needs — under one trusted brand."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="From an idea to a global business ecosystem." />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              What began as a focused effort to demystify import-export for entrepreneurs grew into
              a multi-division group serving founders, exporters, manufacturers, students, and
              enterprises across the world. Today, ORCEA Group blends deep domain knowledge with
              modern digital execution to help clients move faster, smarter, and farther.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl gradient-hero p-7 text-primary-foreground">
              <Target className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold">Vision</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">To become a globally recognized business ecosystem empowering trade and entrepreneurship.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <Eye className="h-7 w-7 text-secondary" />
              <h3 className="mt-5 font-display text-xl font-bold text-primary">Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">Helping businesses and individuals grow internationally with the right knowledge, tools, and partners.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Core Values" title="The principles that guide our work." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{v.label}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="Meet the team driving ORCEA forward." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-elegant">
              <div className="aspect-[4/5] gradient-hero relative grid place-items-center">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white/10 font-display text-3xl font-extrabold text-accent backdrop-blur">
                  {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-primary">{m.name}</h3>
                <div className="text-xs font-medium uppercase tracking-wider text-secondary">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
