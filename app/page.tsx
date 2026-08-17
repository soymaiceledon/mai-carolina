import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ValueProps } from "@/components/sections/ValueProps";
import { ChallengeTeaser } from "@/components/sections/ChallengeTeaser";
import { ChallengeIncludes } from "@/components/sections/ChallengeIncludes";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AuthorityGallery } from "@/components/sections/AuthorityGallery";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ValueProps />
      <ChallengeTeaser />
      <ChallengeIncludes />
      <ServicesGrid />
      <AuthorityGallery />
      <AboutTeaser />
      <TestimonialsSection />
      <LeadCapture />
      <PodcastSection />
      <FinalCTA />
    </>
  );
}
