import { resumeData } from "@/app/data/resume";
import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  MailIcon,
} from "@/app/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12">
        {/* Social links */}
        <div className="flex items-center gap-5">
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



        {/* Credits */}
        <div className="flex flex-col items-center gap-1 text-xs text-zinc-600">
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
