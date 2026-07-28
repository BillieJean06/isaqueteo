import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex items-center gap-2">
          <li>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Perfil no GitHub"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Perfil no LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Enviar e-mail"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
