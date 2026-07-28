import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate, posts, profile } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Blog de Isaque Teodoro` },
        { name: "description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: profile.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-3xl font-bold">Artigo não encontrado</h1>
      <Link to="/blog" className="mt-6 inline-block font-mono text-sm text-primary">
        Voltar para o blog
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-3xl font-bold">Não foi possível carregar o artigo</h1>
      <Link to="/blog" className="mt-6 inline-block font-mono text-sm text-primary">
        Voltar para o blog
      </Link>
    </div>
  ),
  component: Artigo,
});

function Artigo() {
  const { post } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      <Link
        to="/blog"
        className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Blog
      </Link>

      <time dateTime={post.date} className="mt-8 block font-mono text-xs text-muted-foreground">
        {formatDate(post.date)} · {post.readingTime} de leitura
      </time>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>

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

      <div className="mt-10 space-y-6">
        {post.content.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
