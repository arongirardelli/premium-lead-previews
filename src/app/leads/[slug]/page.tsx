import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLeadPreview, leadPreviews } from "@/lib/leads";

type LeadPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return leadPreviews.map((lead) => ({
    slug: lead.slug
  }));
}

export async function generateMetadata({ params }: LeadPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lead = getLeadPreview(slug);

  if (!lead) {
    return {
      title: "Previa nao encontrada"
    };
  }

  return {
    title: lead.businessName,
    description: lead.intro,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false
      }
    }
  };
}

export default async function LeadPage({ params }: LeadPageProps) {
  const { slug } = await params;
  const lead = getLeadPreview(slug);

  if (!lead) {
    notFound();
  }

  return (
    <main className="page-shell lead-shell">
      <section className="lead-hero" aria-labelledby="lead-title">
        <div className="lead-copy">
          <p className="eyebrow">{lead.category}</p>
          <h1 id="lead-title">{lead.businessName}</h1>
          <p className="lead-headline">{lead.headline}</p>
          <p className="lead-text">{lead.intro}</p>
          <div className="action-row">
            <a className="button primary" href="#estrutura">
              {lead.primaryAction}
            </a>
            <a className="button secondary" href="#observacoes">
              {lead.secondaryAction}
            </a>
          </div>
        </div>

        <div className="visual-placeholder" aria-label={lead.visualLabel}>
          <div className="visual-window">
            <span>Preview visual</span>
            <strong>{lead.visualLabel}</strong>
          </div>
        </div>
      </section>

      <section className="content-band" id="estrutura" aria-labelledby="structure-title">
        <div>
          <p className="eyebrow">Estrutura sugerida</p>
          <h2 id="structure-title">Blocos pensados para uma leitura rapida e convincente.</h2>
        </div>
        <div className="highlight-list">
          {lead.highlights.map((highlight) => (
            <article key={highlight}>
              <span />
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="note-band" id="observacoes">
        <p>
          Esta pagina e uma previa estrategica demonstrativa. Antes de publicar uma versao para um lead real, substitua textos e recursos visuais apenas por informacoes fornecidas no briefing.
        </p>
      </section>
    </main>
  );
}
