import { Computer, MonitorPlay } from "lucide-react"

import ThemeToggle from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import logo from "@/assets/cr8-xyz-transparent.png"

const sourceUrl = "https://github.com/dr-33-m/cr8-app"
const localUrl = "https://github.com/dr-33-m/cr8-app/blob/main/README.md"
const cloudUrl = "https://studio.cr8-xyz.art/"
const logoSrc = typeof logo === "string" ? logo : logo.src

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export default function TopBar() {
  return (
    <header className="vp-topbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="inline-flex items-center gap-2.5 no-underline"
        >
          <img
            src={logoSrc}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-lg object-contain"
          />
          <span className="font-serif text-[17px] font-semibold tracking-[var(--tracking-tight)] text-foreground">
            Cr8-xyz
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-3.5" aria-label="Primary navigation">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubMark />
            <span className="hidden md:inline">Source</span>
          </a>
          <ThemeToggle />
          <Button size="sm" variant="outline" asChild>
            <a href={localUrl} target="_blank" rel="noopener noreferrer">
              <Computer className="size-4" />
              <span className="hidden sm:inline">Local</span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={cloudUrl} target="_blank" rel="noopener noreferrer">
              <MonitorPlay className="size-4" />
              <span className="hidden sm:inline">Browser</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
