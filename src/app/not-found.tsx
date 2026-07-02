import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell not-found-shell">
      <p className="eyebrow">Pagina nao encontrada</p>
      <h1>Esta previa ainda nao existe.</h1>
      <p className="lead-text">Confira o slug do lead ou volte para a home interna.</p>
      <Link className="button primary" href="/">
        Voltar para home
      </Link>
    </main>
  );
}
