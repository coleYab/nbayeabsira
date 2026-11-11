"use client";

import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  MailIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@/app/components/icons";
import { resumeData } from "@/app/data/resume";

export function HeroActions() {
  return (
    <>
      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          View Projects
          <ArrowRightIcon className="w-4 h-4" />
        </button>
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100"
        >
          Get in Touch
          <MailIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-5">
        <a
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-zinc-100"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-zinc-100"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
        <a
          href={resumeData.contact.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-zinc-100"
          aria-label="Telegram"
        >
          <TelegramIcon className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="text-zinc-500 transition-colors hover:text-zinc-100"
          aria-label="Email"
        >
          <MailIcon className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-bounce text-zinc-600 transition-colors hover:text-zinc-400"
          aria-label="Scroll down"
        >
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
