import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Isaque Teodoro" },
      {
        name: "description",
        content:
          "Fale com Isaque Teodoro sobre propostas profissionais, freelas e colaborações em projetos de desenvolvimento web.",
      },
      { property: "og:title", content: "Contato — Isaque Teodoro" },
      {
        property: "og:description",
        content: "Envie uma proposta profissional ou convite para colaboração.",
      },
    ],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(100, "Nome muito longo."),
  email: z.string().trim().email("E-mail inválido.").max(255),
  assunto: z.string().trim().min(3, "Informe o assunto.").max(120),
  mensagem: z
    .string()
    .trim()
    .min(10, "Descreva sua proposta com pelo menos 10 caracteres.")
    .max(2000, "Mensagem muito longa."),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contato() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      setStatus("Corrija os campos destacados para enviar.");
      return;
    }

    setErrors({});
    const { nome, email, assunto, mensagem } = parsed.data;
    const body = encodeURIComponent(`${mensagem}\n\n—\n${nome} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(assunto)}&body=${body}`;
    setStatus("Abrindo seu aplicativo de e-mail com a mensagem pronta.");
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <p className="mono-label">Contato</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Vamos conversar</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Propostas de trabalho, freelas ou parcerias técnicas: descreva o contexto e eu respondo em
        até dois dias úteis.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Field id="nome" label="Nome" error={errors.nome} />
          <Field id="email" label="E-mail" type="email" error={errors.email} />
          <Field id="assunto" label="Assunto" error={errors.assunto} />

          <div>
            <label htmlFor="mensagem" className="block font-mono text-sm">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={6}
              required
              aria-invalid={!!errors.mensagem}
              aria-describedby={errors.mensagem ? "mensagem-erro" : undefined}
              className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              placeholder="Contexto do projeto, prazo e orçamento estimado."
            />
            {errors.mensagem && (
              <p id="mensagem-erro" className="mt-1 font-mono text-xs text-destructive">
                {errors.mensagem}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-6 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enviar proposta
          </button>

          <p aria-live="polite" className="font-mono text-xs text-muted-foreground">
            {status}
          </p>
        </form>

        <aside className="glow-panel h-fit rounded-lg p-6">
          <h2 className="font-mono text-base">Canais diretos</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
          <p className="mt-6 font-mono text-xs text-muted-foreground">{profile.location}</p>
        </aside>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-sm">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        className="mt-2 min-h-11 w-full rounded-md border border-input bg-surface px-3 text-foreground focus:border-primary focus:outline-none"
      />
      {error && (
        <p id={`${id}-erro`} className="mt-1 font-mono text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
