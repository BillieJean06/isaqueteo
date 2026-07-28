import { createFileRoute } from "@tanstack/react-router";
import { about, profile, stack } from "@/content/site";
import { GithubRepos } from "@/components/github-repos";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre mim — Isaque Teodoro" },
      {
        name: "description",
        content:
          "Conheça a trajetória de Isaque Teodoro: desenvolvedor Full Stack focado em aplicações web escaláveis, acessíveis e bem construídas.",
      },
      { property: "og:title", content: "Sobre mim — Isaque Teodoro" },
      {
        property: "og:description",
        content: "Trajetória, valores de engenharia e stack de Isaque Teodoro.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <p className="mono-label">Sobre mim</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Ciências da Computação</h1>
          {about.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <h2 className="mt-12 text-xl font-semibold">Como eu trabalho</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="border-l-2 border-primary pl-4">
              Acessibilidade como requisito desde o primeiro commit, não como auditoria final.
            </li>
            <li className="border-l-2 border-primary pl-4">
              Arquitetura serverless: escala automática, custo por uso e zero manutenção de
              servidores.
            </li>
            <li className="border-l-2 border-primary pl-4">
              SEO técnico e performance medidos, não estimados.
            </li>
          </ul>

          <h2 className="mt-12 text-xl font-semibold">Stack</h2>
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

          <p className="mt-12 font-mono text-sm text-muted-foreground">
            Perfil completo no{" "}
            <a className="text-primary underline" href={profile.linkedinUrl}>
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      <GithubRepos />
    </>
  );
}
