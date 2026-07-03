import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La Crosta Forneria — Pizza Napolitana e Massas Artesanais",
  description: "A autêntica pizza napolitana de São Paulo. Experiência italiana completa para Santana, Água Fria e Perdizes.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    }
  }
};

const WHATSAPP_SANTANA = "https://wa.me/5511991865038?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20unidade%20Santana.";
const WHATSAPP_AGUA_FRIA = "https://wa.me/5511991865038?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20unidade%20%C3%81gua%20Fria.";
const WHATSAPP_PERDIZES = "https://wa.me/5511991865038?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20unidade%20Perdizes.";

export default function LaCrostaPage() {
  return (
    <div className={styles.page}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <h1 className={`${styles.serif} ${styles.logo}`}>
            La<span>Crosta</span>
          </h1>
          <Link href={WHATSAPP_SANTANA} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} style={{ padding: '0.8rem 1.5rem', fontSize: '0.7rem' }}>
            Fazer um Pedido
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroGradient}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <span className={styles.heroLabel}>São Paulo, SP</span>
          <h2 className={`${styles.serif} ${styles.heroTitle}`}>
            A autêntica <i>pizza napolitana</i> feita com excelência.
          </h2>
          <p className={styles.heroSubtitle}>
            Uma experiência italiana que une ambiente sofisticado, massas artesanais e a verdadeira paixão pela gastronomia. O sabor premiado da La Crosta servido para Santana, Água Fria e Perdizes.
          </p>
          <div className={styles.heroActions}>
            <Link href={WHATSAPP_SANTANA} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
              Reservar Mesa
            </Link>
            <Link href="https://linktr.ee/lacrosta" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
              Ver Cardápio Completo
            </Link>
          </div>
        </div>
        <div className={styles.stamp}>
          <strong>2x</strong>
          <span>Veja SP</span>
        </div>
      </section>

      {/* AUTHORITY RIBBON */}
      <section className={styles.authority}>
        <div className={`${styles.container} ${styles.authorityGrid}`}>
          <div className={styles.authorityItem}>
            <strong className={styles.serif}>Bicampeã</strong>
            <span>Veja Comer & Beber</span>
          </div>
          <div className={styles.authorityItem}>
            <strong className={styles.serif}>4,9</strong>
            <span>Avaliação no Google</span>
          </div>
          <div className={styles.authorityItem}>
            <strong className={styles.serif}>+1.500</strong>
            <span>Clientes Satisfeitos</span>
          </div>
          <div className={styles.authorityItem}>
            <strong className={styles.serif}>3</strong>
            <span>Unidades em SP</span>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE */}
      <section className={styles.experience}>
        <div className={`${styles.container} ${styles.experienceGrid}`}>
          <div className={styles.experienceImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
              alt="Ambiente rústico e sofisticado" 
              className={styles.experienceImage}
            />
          </div>
          <div className={styles.experienceContent}>
            <span className={styles.sectionLabel}>A Experiência</span>
            <h2 className={`${styles.serif} ${styles.sectionTitle}`}>
              O sabor que respeita o rigor da tradição.
            </h2>
            <p>
              Na La Crosta Forneria, cada pizza é tratada como uma obra de arte. Nossa massa, de longa fermentação, atinge a textura napolitana perfeita: bordas majestosamente aeradas e um miolo incrivelmente macio.
            </p>
            <p>
              Buscamos os melhores ingredientes, de pequenos produtores artesanais locais até a mais autêntica farinha importada italiana, para entregar a você não apenas uma refeição, mas uma memória gastronômica de altíssimo padrão.
            </p>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className={styles.menu}>
        <div className={styles.container}>
          <div className={styles.menuHeader}>
            <span className={styles.sectionLabel}>Gastronomia</span>
            <h2 className={`${styles.serif} ${styles.sectionTitle}`}>Nossas Especialidades</h2>
          </div>
          <div className={styles.menuList}>
            <div className={styles.menuItem}>
              <h3 className={styles.serif}>Pizza Napolitana</h3>
              <p>Massa leve de longa fermentação, assada em altíssima temperatura, com ingredientes que derretem na boca.</p>
            </div>
            <div className={styles.menuItem}>
              <h3 className={styles.serif}>Massas Artesanais</h3>
              <p>O rigor italiano no preparo, acompanhado de molhos encorpados e receitas clássicas da nossa forneria.</p>
            </div>
            <div className={styles.menuItem}>
              <h3 className={styles.serif}>Carta de Vinhos</h3>
              <p>Rótulos cuidadosamente selecionados para harmonizar perfeitamente com cada um de nossos pratos.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="https://linktr.ee/lacrosta" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
              Explorar Menu
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className={styles.locations}>
        <div className={styles.container}>
          <span className={styles.sectionLabel} style={{ color: '#C99245' }}>Endereços</span>
          <h2 className={`${styles.serif} ${styles.sectionTitle}`} style={{ color: '#FFF8F0' }}>Nossas Casas</h2>
          <div className={styles.locationsGrid}>
            <div className={styles.locationItem}>
              <h3 className={styles.serif}>Santana</h3>
              <p>R. Ponta Porã, 527<br/>Aberto hoje até 23h</p>
              <Link href={WHATSAPP_SANTANA} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLocation}`}>
                Pedir no WhatsApp
              </Link>
            </div>
            <div className={styles.locationItem}>
              <h3 className={styles.serif}>Água Fria</h3>
              <p>R. Água Fria, 439<br/>Aberto hoje até 23h</p>
              <Link href={WHATSAPP_AGUA_FRIA} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLocation}`}>
                Pedir no WhatsApp
              </Link>
            </div>
            <div className={styles.locationItem}>
              <h3 className={styles.serif}>Perdizes</h3>
              <p>R. Diana, 120<br/>Aberto hoje até 23h</p>
              <Link href={WHATSAPP_PERDIZES} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLocation}`}>
                Pedir no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.serif} ${styles.footerLogo}`}>
            La<span>Crosta</span>
          </div>
          <div className={styles.footerNav}>
            <Link href="https://linktr.ee/lacrosta" target="_blank" rel="noopener noreferrer">Cardápio</Link>
            <Link href="https://www.instagram.com/lacrostaforneria/" target="_blank" rel="noopener noreferrer">Instagram</Link>
            <Link href={WHATSAPP_SANTANA} target="_blank" rel="noopener noreferrer">Reservas</Link>
            <Link href={WHATSAPP_SANTANA} target="_blank" rel="noopener noreferrer">Trabalhe Conosco</Link>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} La Crosta Forneria. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
