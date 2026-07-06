import * as React from "react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "start", label: "Walkthrough" },
  { id: "why", label: "Why" },
  { id: "get", label: "Get" },
]

type TimelineStop = (typeof sections)[number] & {
  pct: number
  top: number
}

export default function TimelineNav() {
  const [stops, setStops] = React.useState<TimelineStop[]>(
    sections.map((section) => ({ ...section, pct: 0, top: 0 })),
  )
  const [progress, setProgress] = React.useState(0)
  const [active, setActive] = React.useState(0)
  const stopsRef = React.useRef(stops)
  stopsRef.current = stops

  React.useEffect(() => {
    function measure() {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      setStops(
        sections.map((section) => {
          const el = document.getElementById(section.id)
          const top = el ? el.offsetTop : 0
          return { ...section, top, pct: Math.min(100, (top / scrollable) * 100) }
        }),
      )
    }

    measure()
    const t1 = window.setTimeout(measure, 300)
    const t2 = window.setTimeout(measure, 1200)
    window.addEventListener("resize", measure)

    return () => {
      window.removeEventListener("resize", measure)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])

  React.useEffect(() => {
    let raf = 0

    function compute() {
      raf = 0
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const y = window.scrollY
      setProgress(Math.min(100, Math.max(0, (y / scrollable) * 100)))

      let nextActive = 0
      stopsRef.current.forEach((stop, index) => {
        if (y + window.innerHeight * 0.35 >= stop.top) nextActive = index
      })
      setActive(nextActive)
    }

    function onScroll() {
      if (!raf) raf = window.requestAnimationFrame(compute)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    compute()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  function goTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 64)
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className="vp-timeline">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-[11px] sm:gap-[18px] sm:px-6">
        <span className="inline-flex min-w-12 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground sm:min-w-24">
          <span className="inline-block size-[5px] shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span className="hidden sm:inline">{stops[active]?.label}</span>
        </span>

        <div className="relative h-0.5 flex-1 rounded-sm bg-border">
          <div
            className="absolute left-0 top-0 h-full rounded-sm bg-primary"
            style={{ width: `${progress}%` }}
          />
          {stops.map((stop, index) => (
            <button
              key={stop.id}
              type="button"
              className="vp-timeline__stop absolute top-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 cursor-pointer transition-colors"
              style={{
                left: `${stop.pct}%`,
                background: index <= active ? "var(--primary)" : "var(--background)",
                border: `1.5px solid ${index <= active ? "var(--primary)" : "var(--muted-foreground)"}`,
              }}
              aria-current={index === active ? "step" : undefined}
              aria-label={`Jump to ${stop.label}`}
              onClick={() => goTo(stop.id)}
            />
          ))}
        </div>

        <span className="whitespace-nowrap font-mono text-[11px] text-muted-foreground">
          {String(active + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
