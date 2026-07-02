export type LeadPreview = {
  slug: string;
  businessName: string;
  category: string;
  headline: string;
  intro: string;
  highlights: string[];
  primaryAction: string;
  secondaryAction: string;
  visualLabel: string;
};

export const leadPreviews: LeadPreview[] = [
  {
    slug: "exemplo",
    businessName: "Lead Exemplo",
    category: "Previa comercial demonstrativa",
    headline: "Uma landing page clara, premium e pronta para apresentar uma proposta visual.",
    intro:
      "Esta rota mostra a estrutura base para uma previa estrategica. Substitua os textos por informacoes reais do briefing antes de criar qualquer pagina para um lead.",
    highlights: [
      "Primeira dobra com promessa visual objetiva",
      "Blocos curtos para facilitar leitura no celular",
      "CTAs claros sem afirmar que a pagina e oficial"
    ],
    primaryAction: "Ver proposta",
    secondaryAction: "Revisar briefing",
    visualLabel: "Espaco para imagem, mockup ou composicao visual fornecida"
  }
];

export function getLeadPreview(slug: string) {
  return leadPreviews.find((lead) => lead.slug === slug);
}
