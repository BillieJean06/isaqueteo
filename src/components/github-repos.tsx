import { useQuery } from "@tanstack/react-query";
import { Github, Star, GitFork } from "lucide-react";
import { profile } from "@/content/site";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=100`,
  );
  if (!res.ok) throw new Error("Não foi possível carregar os repositórios.");
  const data: Repo[] = await res.json();
  return data.filter((r) => !r.fork).slice(0, 6);
}

export function GithubRepos() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["github-repos", profile.githubUser],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  return (
    <section aria-labelledby="github-heading" className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mono-label">Integração automática</p>
          <h2 id="github-heading" className="mt-2 text-2xl font-semibold sm:text-3xl">
            Repositórios no GitHub
          </h2>
        </div>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="size-4" aria-hidden="true" />
          Ver perfil completo
        </a>
      </div>

      <div aria-live="polite" className="mt-8">
        {isPending && (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="h-40 animate-pulse rounded-lg border border-border bg-surface" />
            ))}
          </ul>
        )}

        {isError && (
          <p className="rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">
            Não foi possível carregar os repositórios agora. Visite o{" "}
            <a className="text-primary underline" href={profile.githubUrl}>
              perfil no GitHub
            </a>
            .
          </p>
        )}

        {data && (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/60"
                >
                  <h3 className="font-mono text-base text-foreground">{repo.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {repo.description ?? "Sem descrição."}
                  </p>
                  <p className="mt-4 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                    {repo.language && <span className="text-primary">{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5" aria-hidden="true" />
                      {repo.stargazers_count}
                      <span className="sr-only">estrelas</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="size-3.5" aria-hidden="true" />
                      {repo.forks_count}
                      <span className="sr-only">forks</span>
                    </span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
