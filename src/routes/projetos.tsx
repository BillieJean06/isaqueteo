import { createFileRoute } from "@tanstack/react-router";
import { GithubRepos } from "@/components/github-repos";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Isaque Teodoro" },
      {
        name: "description",
        content:
          "Projetos de desenvolvimento web de Isaque Teodoro, com repositórios do GitHub sincronizados automaticamente.",
      },
      { property: "og:title", content: "Projetos — Isaque Teodoro" },
      {
        property: "og:description",
        content: "Trabalhos selecionados e repositórios públicos atualizados automaticamente.",
      },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="mono-label">Portfólio</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Projetos</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Trabalhos selecionados, com foco em arquitetura, acessibilidade e performance.
          </p>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <li key={p.slug} className="glow-panel flex flex-col rounded-lg p-6">
                <h2 className="font-mono text-lg">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border px-2 py-1 font-mono text-[0.7rem] text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GithubRepos />
    </>
  );
}
