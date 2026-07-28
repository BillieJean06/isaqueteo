import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { GithubRepos } from "@/components/github-repos";
import { profile, projects, stack, posts, formatDate } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isaque Teodoro — Desenvolvedor de Software" },
      {
        name: "description",
        content:
          "Currículo digital, projetos e artigos técnicos de Isaque Teodoro, desenvolvedor de software full stack focado em performance, acessibilidade e arquitetura serverless.",
      },
      { property: "og:title", content: "Isaque Teodoro — Desenvolvedor de Software" },
      {
        property: "og:description",
        content:
          "Currículo digital, projetos e artigos técnicos de Isaque Teodoro, desenvolvedor de software full stack focado em performance, acessibilidade e arquitetura serverless.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          sameAs: [profile.githubUrl, profile.linkedinUrl],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="absolute inset-0 grid-backdrop" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="mono-label">{profile.location}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            {profile.name}
            <span className="block text-primary">{profile.role}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar proposta
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/curriculo"
              className="inline-flex min-h-11 items-center rounded-md border border-border px-5 font-mono text-sm text-foreground transition-colors hover:border-primary/60"
            >
              Currículo digital
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Tecnologias principais">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="perfis-heading" className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="perfis-heading" className="sr-only">
          Perfis profissionais
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="glow-panel flex items-start gap-4 rounded-lg p-6 transition-colors hover:text-primary"
          >
            <Linkedin className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-mono text-base">LinkedIn</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Experiência profissional, recomendações e histórico completo.
              </span>
            </span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="glow-panel flex items-start gap-4 rounded-lg p-6 transition-colors hover:text-primary"
          >
            <Github className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-mono text-base">GitHub</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Repositórios sincronizados automaticamente abaixo.
              </span>
            </span>
          </a>
        </div>
      </section>

      <GithubRepos />

      <section aria-labelledby="projetos-heading" className="mx-auto max-w-6xl px-5 py-16">
        <p className="mono-label">Seleção</p>
        <h2 id="projetos-heading" className="mt-2 text-2xl font-semibold sm:text-3xl">
          Projetos em destaque
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-mono text-base">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-4 font-mono text-xs text-primary">{p.tags.join(" · ")}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/projetos"
          className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm text-primary"
        >
          Todos os projetos <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section
        aria-labelledby="artigos-heading"
        className="border-t border-border/70 bg-surface/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="mono-label">Blog</p>
          <h2 id="artigos-heading" className="mt-2 text-2xl font-semibold sm:text-3xl">
            Últimos artigos técnicos
          </h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="flex flex-col gap-1 py-5 transition-colors hover:text-primary"
                >
                  <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                    {formatDate(post.date)} · {post.readingTime}
                  </time>
                  <span className="font-mono text-lg">{post.title}</span>
                  <span className="text-sm text-muted-foreground">{post.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
