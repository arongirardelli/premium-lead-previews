import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell home-shell">
      <section className="hero-grid" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Ambiente interno</p>
          <h1 id="home-title">Previas comerciais premium para leads.</h1>
          <p className="lead-text">
            Este projeto organiza demonstracoes estrategicas de landing pages para apresentar ideias visuais com clareza, velocidade e cuidado comercial.
          </p>
          <div className="action-row">
            <Link className="button primary" href="/leads/exemplo">
              Abrir exemplo
            </Link>
            <a className="button secondary" href="https://vercel.com" rel="noreferrer">
              Publicar na Vercel
            </a>
          </div>
        </div>

        <div className="preview-board" aria-label="Resumo visual do ambiente">
          <div className="board-header">
            <span />
            <span />
            <span />
          </div>
          <div className="board-content">
            <p>Fluxo base</p>
            <div className="board-line wide" />
            <div className="board-line" />
            <div className="board-stack">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid" aria-label="Principios do projeto">
        <article>
          <span className="section-number">01</span>
          <h2>Mobile-first</h2>
          <p>As paginas nascem pensando primeiro na experiencia no celular, com dobras curtas e leitura rapida.</p>
        </article>
        <article>
          <span className="section-number">02</span>
          <h2>Uso interno</h2>
          <p>Todas as rotas demonstrativas usam meta robots noindex,nofollow por padrao.</p>
        </article>
        <article>
          <span className="section-number">03</span>
          <h2>Sem invencao</h2>
          <p>O conteudo de cada lead deve vir do briefing, mantendo a pagina como previa estrategica.</p>
        </article>
      </section>
    </main>
  );
}
