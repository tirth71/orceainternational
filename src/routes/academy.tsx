import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Video,
  FileText,
  Award,
  Infinity as InfinityIcon,
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Factory,
  UserCheck,
  Rocket,
  Home as HomeIcon,
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  Globe2,
  ShoppingCart,
  Search,
  Wheat,
  Ship,
  Megaphone,
  ClipboardCheck,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import academyHero from "@/assets/academy-hero.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "ORCEA International Academy — Import Export Training Institute" },
      {
        name: "description",
        content:
          "Learn import export business from industry experts. Live classes, certification, buyer-finding, documentation, logistics & global marketing training — online & offline.",
      },
      { property: "og:title", content: "ORCEA International Academy" },
      {
        property: "og:description",
        content:
          "India's premium import-export training institute. 1000+ students trained, 100+ export startups created, 25+ countries connected.",
      },
      { property: "og:image", content: academyHero },
      { property: "og:url", content: "/academy" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: Academy,
});

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "100+", label: "Export Startups Created" },
  { value: "25+", label: "Countries Connected" },
  { value: "500+", label: "Business Consultations" },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    points: ["Career in Export Industry", "International Business Opportunities", "Job-Oriented Training"],
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    points: ["Expand Business Globally", "Find International Buyers", "Increase Revenue"],
  },
  {
    icon: Factory,
    title: "Manufacturers",
    points: ["Export Products Worldwide", "Market Expansion", "Export Documentation"],
  },
  {
    icon: UserCheck,
    title: "Working Professionals",
    points: ["Career Growth", "Logistics & Supply Chain Knowledge", "Export Management Skills"],
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    points: ["Start Export Business", "Build Global Brand", "Learn Trade Operations"],
  },
  {
    icon: HomeIcon,
    title: "Housewives",
    points: ["Home-Based Export Business", "Flexible Business Opportunities", "Step-by-step mentorship"],
  },
];

const programs = [
  {
    icon: BookOpen,
    title: "Export Import Foundation Program",
    duration: "6 Weeks",
    mode: "Online + Offline",
    audience: "Beginners",
    modules: [
      "Introduction to Export Import",
      "International Trade Basics",
      "Export Process",
      "Import Process",
      "Export Opportunities",
      "Business Models",
    ],
  },
  {
    icon: Rocket,
    title: "Export Business Startup Program",
    duration: "8 Weeks",
    mode: "Online + Offline",
    audience: "Entrepreneurs",
    modules: [
      "Product Selection",
      "Market Research",
      "Buyer Finding",
      "International Communication",
      "Pricing Strategy",
      "Export Planning",
      "Global Expansion",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Export Documentation Mastery",
    duration: "4 Weeks",
    mode: "Online",
    audience: "All Levels",
    modules: [
      "IEC Registration",
      "GST / APEDA / RCMC",
      "Invoice & Packing List",
      "Shipping Bill",
      "Bill of Lading",
      "Letter of Credit",
      "Certificate of Origin",
    ],
  },
  {
    icon: Megaphone,
    title: "International Marketing Program",
    duration: "6 Weeks",
    mode: "Online",
    audience: "Marketers & Founders",
    modules: [
      "LinkedIn Marketing",
      "B2B Lead Generation",
      "Export Marketing",
      "Email Marketing",
      "Alibaba / IndiaMART / TradeIndia",
    ],
  },
  {
    icon: Search,
    title: "Buyer Finding Masterclass",
    duration: "3 Weeks",
    mode: "Online",
    audience: "Exporters",
    modules: [
      "Importer Search",
      "Buyer Verification",
      "Trade Data Analysis",
      "Lead Generation",
      "Buyer Communication",
      "Follow-Up System",
    ],
  },
  {
    icon: Wheat,
    title: "Agriculture Export Program",
    duration: "5 Weeks",
    mode: "Online + Offline",
    audience: "Agri Exporters",
    modules: [
      "Onion & Potato Export",
      "Spices Export",
      "Rice Export",
      "Fruits & Vegetables",
      "Packaging Standards",
    ],
  },
  {
    icon: Ship,
    title: "Logistics & Supply Chain Program",
    duration: "5 Weeks",
    mode: "Online",
    audience: "Logistics Professionals",
    modules: [
      "Shipping Process",
      "Container Movement",
      "Freight Forwarding",
      "CHA Operations",
      "Warehousing",
      "International Logistics",
    ],
  },
];

const features = [
  { icon: Video, title: "Live Online Classes", desc: "Interactive Zoom sessions with industry experts." },
  { icon: Users, title: "Offline Classroom Training", desc: "Face-to-face learning at our Mumbai centre." },
  { icon: BookOpen, title: "Recorded Sessions", desc: "Lifetime access to every live class recording." },
  { icon: FileText, title: "Study Materials", desc: "PDF notes, templates & documentation formats." },
  { icon: ClipboardCheck, title: "Practical Assignments", desc: "Hands-on work on real business cases." },
  { icon: UserCheck, title: "Mentor Support", desc: "Expert guidance & lifetime community access." },
  { icon: Globe2, title: "Networking", desc: "Connect with exporters across 25+ countries." },
  { icon: Award, title: "Certification", desc: "Industry-recognised course completion certificate." },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "All updates and new modules — forever free." },
];

const curriculum = [
  "Global Trade Foundation",
  "Business Setup & Compliance",
  "Product Selection",
  "Market Research",
  "Buyer Finding",
  "International Marketing",
  "Export Costing",
  "Pricing Strategy",
  "Shipping & Logistics",
  "Documentation",
  "Payment Terms & Finance",
  "Government Schemes & Incentives",
];

const outcomes = [
  "Start your own Export Business",
  "Find International Buyers",
  "Handle Export Documentation",
  "Manage Logistics end-to-end",
  "Negotiate International Deals",
  "Build Export Marketing Strategy",
  "Scale Business Globally",
];

const testimonials = [
  {
    name: "Rahul Mehta",
    city: "Ahmedabad",
    type: "Spices Exporter",
    quote: "Within 3 months of completing the program, I shipped my first container of turmeric to Dubai.",
    achievement: "First International Buyer",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    type: "Home-Based Entrepreneur",
    quote: "ORCEA helped me start a handicraft export business right from my home. The mentorship was unmatched.",
    achievement: "Started Export Business",
  },
  {
    name: "Arjun Patel",
    city: "Surat",
    type: "Textile Manufacturer",
    quote: "Documentation training alone saved us months of trial and error. We now export to 6 countries.",
    achievement: "Expanded Manufacturing",
  },
  {
    name: "Neha Singh",
    city: "Delhi",
    type: "MBA Graduate",
    quote: "Got placed as Export Executive at a leading agri-export company straight after the foundation course.",
    achievement: "Secured Export Job",
  },
];

const careers = [
  "Export Executive",
  "Import Executive",
  "Documentation Executive",
  "Logistics Coordinator",
  "Supply Chain Executive",
  "International Marketing Executive",
  "Export Manager",
  "Trade Analyst",
];

const resources = [
  "Complete Export Guide",
  "Export Readiness Checklist",
  "Documentation Templates",
  "Product Selection Guide",
  "Buyer Search Playbook",
  "Export Cost Calculator",
  "Country Market Reports",
];

const faqs = [
  { q: "Do I need prior experience?", a: "No. Our foundation program is designed for absolute beginners." },
  { q: "Is this suitable for students?", a: "Yes — students get job-oriented training and career placement support." },
  { q: "Is certification provided?", a: "Yes. You receive an industry-recognised course completion certificate." },
  { q: "Online or Offline?", a: "Both. Choose live online cohorts or classroom training at our Mumbai centre." },
  { q: "Will I learn buyer finding?", a: "Yes — dedicated masterclasses cover importer search, verification and follow-up." },
  { q: "Will I get mentor support?", a: "Yes. Lifetime community access plus one-to-one mentor sessions." },
  { q: "Can I start my own export business?", a: "Absolutely — many of our alumni launch within 3–6 months." },
];

function Academy() {
  return (
    <>
      {/* HERO with background image */}
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={academyHero}
          alt="ORCEA International Academy classroom"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
        <div className="container-x relative mx-auto max-w-7xl py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            ORCEA International Academy
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Learn Import Export Business <span className="text-gradient-gold">From Industry Experts</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Build your career, start your export business, find international buyers, master documentation, and learn
            real-world global trade from experienced mentors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#brochure"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/15"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Book Free Consultation
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="font-display text-3xl font-extrabold text-gradient-gold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN */}
      <Section>
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for every kind of global trade ambition."
          description="From first-year students to seasoned manufacturers — our programs adapt to your starting point and your goals."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15">
                <a.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{a.title}</h3>
              <ul className="mt-3 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section surface>
        <SectionHeading
          eyebrow="Academy Programs"
          title="Seven specialised programs. One export-ready you."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/10">
                  <p.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="font-display text-3xl font-extrabold text-gradient-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {p.duration}
                </span>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {p.mode}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/70">
                  Ideal: {p.audience}
                </span>
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Curriculum</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COURSE FEATURES */}
      <Section>
        <SectionHeading eyebrow="Course Features" title="Everything you need to learn, apply and grow." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15">
                <f.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-primary">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CURRICULUM & OUTCOMES */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Master Curriculum" title="12 modules. End-to-end international trade." />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {curriculum.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-secondary/10 font-display text-sm font-bold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-primary">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Learning Outcomes" title="What you'll be able to do." />
            <ul className="mt-8 space-y-3">
              {outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-primary">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 to-accent/10 p-6">
              <div className="font-display text-lg font-bold text-primary">Certification on completion</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Every graduate receives an ORCEA International Academy certificate — recognised by exporters,
                logistics firms and trade bodies across India.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading eyebrow="Success Stories" title="Real students. Real export businesses." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full gradient-hero font-display text-lg font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.city} · {t.type}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                <Award className="h-3.5 w-3.5" /> {t.achievement}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CAREERS + FREE RESOURCES */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Career Opportunities" title="Roles our alumni land." />
            <div className="mt-8 flex flex-wrap gap-3">
              {careers.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-primary"
                >
                  <Briefcase className="h-4 w-4 text-secondary" />
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div id="brochure">
            <SectionHeading eyebrow="Free Resources" title="Download practical tools to get started." />
            <ul className="mt-8 grid gap-3">
              {resources.map((r) => (
                <li
                  key={r}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold text-primary">{r}</span>
                  </div>
                  <a
                    href="#enroll"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline"
                  >
                    Download <Download className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions, answered." center />
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-base font-bold text-primary">{f.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent-foreground transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ENROLLMENT */}
      <Section surface id="enroll">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact & Enrollment"
              title="Take the first step toward your export career."
              description="Tell us your goals — our advisor will reach out within one business day with the right program for you."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="#brochure"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary hover:bg-muted"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-primary">Enroll Now</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill the form — we'll share course details, fees and the next batch date.
            </p>
            <div className="mt-6">
              <InquiryForm
                subject="Academy Enrollment Inquiry"
                fields={["name", "email", "phone", "company", "message"]}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
