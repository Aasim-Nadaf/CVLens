import { cn } from "@/lib/utils";
import { Header } from "@/components/section/header";
import { HeroSection } from "@/components/section/hero";
import { LogosSection } from "@/components/section/logos-section";
import { FeaturesSection } from "@/components/section/features-section";
import { HowItWorksSection } from "@/components/section/how-it-works-section";
import { TestimonialsSection } from "@/components/section/testimonials-section";
import { StatsSection } from "@/components/section/stats-section";
import { CtaSection } from "@/components/section/cta-section";
import { Footer } from "@/components/section/footer";

export default function page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main
        className={cn(
          "relative mx-auto max-w-4xl grow",
          // X Borders
          "before:absolute before:-inset-y-14 before:-left-px before:w-px before:bg-border",
          "after:absolute after:-inset-y-14 after:-right-px after:w-px after:bg-border",
        )}
      >
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <StatsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
