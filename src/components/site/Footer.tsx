import { Link } from "@tanstack/react-router";
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { divisions } from "@/data/divisions";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold">ORCEA</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">Group</div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Empowering global trade, education and business growth across continents through a
              unified ecosystem of premium services.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition hover:bg-accent hover:text-accent-foreground"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Divisions</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link to={d.href} className="text-primary-foreground/75 hover:text-accent">
                    {d.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Company</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-primary-foreground/75 hover:text-accent">About Us</Link></li>
              <li><Link to="/divisions" className="text-primary-foreground/75 hover:text-accent">Services</Link></li>
              {/* <li><Link to="/blog" className="text-primary-foreground/75 hover:text-accent">Blog</Link></li> */}
              {/* <li><Link to="/gallery" className="text-primary-foreground/75 hover:text-accent">Gallery</Link></li> */}
              <li><Link to="/contact" className="text-primary-foreground/75 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</div>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-accent shrink-0" /><span>+91 00000 00000</span></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-accent shrink-0" /><span>info@orceagroup.com</span></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" /><span>Rajkot, India</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} ORCEA International. All rights reserved.</div>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
