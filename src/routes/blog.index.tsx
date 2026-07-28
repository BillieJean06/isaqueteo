import { createFileRoute, Link } from "@tanstack/react-router";
import { formatDate, posts } from "@/content/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog técnico — Isaque Teodoro" },
      {
        name: "description",
        content:
          "Artigos técnicos sobre arquitetura serverless, acessibilidade web, SEO técnico e desenvolvimento front-end.",
      },
      { property: "og:title", content: "Blog técnico — Isaque Teodoro" },
      {
        property: "og:description",
        content: "Artigos sobre serverless, acessibilidade, SEO técnico e front-end.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <p className="mono-label">Blog</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Artigos técnicos</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Anotações práticas sobre engenharia de software, arquitetura e web.
      </p>

      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/60">
              <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                {formatDate(post.date)} · {post.readingTime} de leitura
              </time>
              <h2 className="mt-2 font-mono text-xl">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-2 py-1 font-mono text-[0.7rem] text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
