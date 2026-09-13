import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/section/decor-icon";
import { FullWidthDivider } from "@/components/section/full-width-divider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";

export function HeroSection() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center gap-5 px-4 py-12 md:px-4 md:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-1 size-full overflow-hidden"
        >
          <div
            className={cn(
              "absolute -inset-x-20 inset-y-0 z-0 rounded-full",
              "bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]",
              "blur-[50px]",
            )}
          />
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
        </div>

        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#features"
        >
          <div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
            <p className="font-mono text-xs">NEW</p>
          </div>

          <span className="text-xs">AI-Powered ATS Score Analysis</span>
          <span className="block h-5 border-l" />

          <div className="pr-1">
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={2}
              className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5"
            />
          </div>
        </a>

        <h1
          className={cn(
            "max-w-2xl text-balance text-center text-3xl text-foreground md:text-5xl lg:text-6xl",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out",
          )}
        >
          Analyze Your Resume with AI Precision
        </h1>

        <p
          className={cn(
            "text-center text-muted-foreground text-sm tracking-wider sm:text-lg",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out",
          )}
        >
          Upload your resume, paste a job description, and get{" "}
          <br className="hidden sm:block" />
          instant AI feedback with ATS scores and actionable improvements.
        </p>

        <div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
          <Button
            variant="outline"
            render={<a href="#how-it-works" />}
            nativeButton={false}
          >
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />{" "}
            See How It Works
          </Button>
          <Button>
            Upload Resume{" "}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Button>
        </div>
      </div>

      {/* Hero Visual - Resume Analysis Dashboard Preview */}
      <div className="relative">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />
        <div className="overflow-hidden border-y">
          <div className="bg-secondary/50 dark:bg-secondary/20 p-4 md:p-8">
            {/* Stylized Resume Analysis Dashboard Mockup */}
            <div className="mx-auto max-w-3xl rounded-lg border bg-card shadow-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b px-4 py-3 md:px-6">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-foreground/20" />
                  <span className="text-sm font-medium text-foreground">
                    Resume Analysis Report
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-16 rounded-sm bg-foreground/10" />
                  <div className="h-6 w-16 rounded-sm bg-foreground/10" />
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="grid gap-4 p-4 md:grid-cols-3 md:gap-6 md:p-6">
                {/* ATS Score Circle */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-md border bg-background p-4 md:p-6">
                  <div className="relative flex size-20 items-center justify-center rounded-full border-4 border-foreground/20 md:size-24">
                    <span className="text-2xl font-bold text-foreground md:text-3xl">
                      87
                    </span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    ATS Score
                  </span>
                </div>

                {/* Keywords */}
                <div className="flex flex-col gap-3 rounded-md border bg-background p-4 md:col-span-2 md:p-6">
                  <span className="text-xs font-medium text-muted-foreground">
                    Keyword Match
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Node.js",
                      "REST API",
                      "Git",
                    ].map((kw) => (
                      <span
                        key={kw}
                        className="rounded-sm border bg-secondary px-2 py-0.5 text-xs text-foreground"
                      >
                        {kw} ✓
                      </span>
                    ))}
                    {["GraphQL", "AWS", "Docker"].map((kw) => (
                      <span
                        key={kw}
                        className="rounded-sm border border-dashed px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {kw} ✗
                      </span>
                    ))}
                  </div>

                  {/* Progress Bars */}
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-muted-foreground">
                        Experience
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-foreground/10">
                        <div className="h-full w-[85%] rounded-full bg-foreground/60" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-muted-foreground">
                        Skills
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-foreground/10">
                        <div className="h-full w-[70%] rounded-full bg-foreground/40" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-muted-foreground">
                        Education
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-foreground/10">
                        <div className="h-full w-[95%] rounded-full bg-foreground/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
