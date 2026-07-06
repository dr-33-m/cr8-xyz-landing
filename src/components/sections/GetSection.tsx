import { Computer, MonitorPlay } from "lucide-react"

import { Button } from "@/components/ui/button"

const LOCAL_URL = "https://github.com/dr-33-m/cr8-app/blob/main/README.md"
const CLOUD_URL = "https://studio.cr8-xyz.art/"

export default function GetSection() {
  return (
    <section id="get" className="bg-background px-6 py-20">
      <div className="dark relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-border bg-[var(--yc-charcoal)] px-6 py-20 text-foreground shadow-[var(--shadow-lg)] sm:py-[88px]">
        <div className="vp-floor vp-floor--accent" aria-hidden="true" />
        <div className="yc-dotgrid--accent absolute inset-0" aria-hidden="true" />
        <div
          className="yc-glow absolute left-1/2 top-[38%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.08em] text-white/50">
            // frame 096 / get Cr8-xyz
          </p>
          <h2 className="m-0 text-[clamp(30px,4vw,46px)] font-medium leading-[1.12] tracking-[var(--tracking-tight)] text-foreground">
            Let’s pull on this thread together.
          </h2>
          <p className="m-0 max-w-xl text-[19px] leading-relaxed text-white/80">
            If you believe more people should be able to experience and create with the beauty of CGI, you’re invited to explore it with me.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/35 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={LOCAL_URL} target="_blank" rel="noopener noreferrer">
                <Computer className="size-4" />
                Local
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href={CLOUD_URL} target="_blank" rel="noopener noreferrer">
                <MonitorPlay className="size-4" />
                Open in browser
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
