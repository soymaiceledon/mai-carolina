"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dorado/15 bg-negro/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring whitespace-nowrap text-sm uppercase tracking-[0.1em] text-marfil/80 transition-colors hover:text-dorado"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.cta.primary.href}
          className="focus-ring hidden whitespace-nowrap rounded-full border border-dorado px-5 py-2.5 text-sm uppercase tracking-[0.1em] text-dorado transition-colors hover:bg-dorado hover:text-negro lg:inline-block"
        >
          {site.cta.primary.label}
        </Link>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="focus-ring text-marfil lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-dorado/15 bg-negro lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-2 py-3 text-sm uppercase tracking-[0.12em] text-marfil/85 hover:text-dorado"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.cta.primary.href}
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-full border border-dorado px-5 py-3 text-center text-sm uppercase tracking-[0.12em] text-dorado"
            >
              {site.cta.primary.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
