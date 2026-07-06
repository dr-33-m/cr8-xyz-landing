import * as React from "react"
import { Play } from "lucide-react"

const WALKTHROUGH_URL = "https://www.youtube.com/embed/egKdBDF52fE?autoplay=1"

export default function WalkthroughSection() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <section id="start" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          // frame 048 / start here
        </p>
        <h2 className="m-0 text-[clamp(30px,4vw,46px)] font-medium leading-[1.12] tracking-[var(--tracking-tight)] text-foreground">
          Start here.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[19px] leading-relaxed text-muted-foreground">
          I recorded a walkthrough to show you what Cr8-xyz is, why I’m building it, and where I think this could go.
        </p>

        <div className="vp-frame mt-9">
          <div className="dark relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border bg-[var(--yc-charcoal)] shadow-[var(--shadow-lg)]">
            <div className="yc-dotgrid--accent absolute inset-0" aria-hidden="true" />
            <div
              className="yc-glow absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              aria-hidden="true"
            />

            {playing ? (
              <iframe
                className="absolute inset-0 size-full"
                src={WALKTHROUGH_URL}
                title="Cr8-xyz walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Play walkthrough"
                  onClick={() => setPlaying(true)}
                  className="inline-flex size-[76px] items-center justify-center rounded-full border-0 bg-primary text-primary-foreground shadow-[0_8px_30px_rgb(0_0_0_/_0.4)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Play className="size-7 fill-current" />
                </button>
                <span className="font-mono text-xs tracking-[0.06em] text-white/70">
                  watch the walkthrough
                </span>
              </div>
            )}
          </div>
          <span className="vp-frame__corner tl" aria-hidden="true" />
          <span className="vp-frame__corner tr" aria-hidden="true" />
          <span className="vp-frame__corner bl" aria-hidden="true" />
          <span className="vp-frame__corner br" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
