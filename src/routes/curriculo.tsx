import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { education, experiences, profile, stack } from "@/content/site";

export const Route = createFileRoute("/curriculo")({
  head: () => ({
    meta: [
      { title: "Currículo digital — Isaque Teodoro" },
      {
        name: "description",
        content:
          "Currículo digital de Isaque Teodoro: experiência profissional, formação, certificações e competências técnicas em desenvolvimento web.",
      },
      { property: "og:title", content: "Currículo digital — Isaque Teodoro" },
      {
        property: "og:description",
        content: "Experiência, formação e competências técnicas em desenvolvimento web.",
      },
    ],
  }),
  component: Curriculo,
});

function Curriculo() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <p className="mono-label">Currículo digital</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
      <p className="mt-2 font-mono text-primary">{profile.role}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-sm text-muted-foreground hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" /> {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-sm text-muted-foreground hover:text-primary"
          >
            <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-sm text-muted-foreground hover:text-primary"
          >
            <Github className="size-4" aria-hidden="true" /> GitHub
          </a>
        </li>
        <li>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 font-mono text-sm text-primary-foreground"
          >
            <Download className="size-4" aria-hidden="true" /> Salvar em PDF
          </button>
        </li>
      </ul>

      <h2 className="mt-16 text-xl font-semibold">Experiência profissional</h2>
      <ol className="mt-6 space-y-8">
        {experiences.map((exp) => (
          <li key={exp.period} className="border-l-2 border-border pl-6">
            <p className="font-mono text-xs text-primary">{exp.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
            <p className="font-mono text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 text-xl font-semibold">Formação e certificações</h2>
      <ul className="mt-6 space-y-4">
        {education.map((e) => (
          <li key={e.title} className="rounded-lg border border-border bg-surface p-5">
            <p className="font-mono text-xs text-primary">{e.period}</p>
            <h3 className="mt-1 font-mono text-base">{e.title}</h3>
            <p className="text-sm text-muted-foreground">{e.org}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-xl font-semibold">Competências técnicas</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
