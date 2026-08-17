import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-b border-dorado/15 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes ya construyeron su sistema." light />
        <div className="mt-12">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
}
