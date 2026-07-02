import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Prévia estratégica — La Crosta Forneria",
  description: "Prévia demonstrativa de uma landing page estratégica para organizar reputação, cardápio, unidades, reservas e WhatsApp da La Crosta Forneria.",
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

const WHATSAPP_LINK = "https://wa.me/5511991865038";
const WHATSAPP_FINAL_LINK = "https://wa.me/5511991865038?text=Oi%2C%20vi%20a%20pr%C3%A9via%20da%20p%C3%A1gina%20da%20La%20Crosta%20e%20quero%20entender%20melhor.";

export default function LaCrostaPage() {
  return (
    <div className={styles.page}>
      
      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p style={{ fontSize: "0.875rem", fontWeight: "bold", color: "var(--red)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Prévia estratégica demonstrativa
          </p>
          <h1 className={`${styles.title} ${styles.heroTitle}`}>
            Pizza napolitana e massas artesanais em uma forneria reconhecida em São Paulo
          </h1>
          <p className={styles.heroSubtitle}>
            Uma experiência italiana com sabor, ambiente e autoridade — da La Crosta para Santana, Água Fria e Perdizes.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
              Pedir pelo WhatsApp
            </a>
            <a href="#estrutura" className={`${styles.btn} ${styles.btnOutline}`}>
              Ver estrutura sugerida
            </a>
            <a href="#unidades" className={`${styles.btn} ${styles.btnOutline}`} style={{ border: "none", textDecoration: "underline" }}>
              Escolher unidade
            </a>
          </div>
        </div>
      </section>

      {/* 2. Faixa de Autoridade */}
      <section className={styles.authority}>
        <div className={styles.container}>
          <h2 className={`${styles.title} ${styles.authorityTitle}`}>
            Autoridade que já existe — organizada de forma mais clara
          </h2>
          <div className={styles.authorityGrid}>
            <div className={styles.authorityCard}>
              <strong>Bicampeã Veja 23/24</strong>
              <span>Melhor Pizzaria de SP</span>
            </div>
            <div className={styles.authorityCard}>
              <strong>4,9/5 no Google</strong>
              <span>Reputação forte para decisão rápida</span>
            </div>
            <div className={styles.authorityCard}>
              <strong>1.558 avaliações</strong>
              <span>Prova social que merece destaque</span>
            </div>
            <div className={styles.authorityCard}>
              <strong>3 regiões</strong>
              <span>Santana, Água Fria e Perdizes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Oportunidade Digital */}
      <section className={styles.opportunity}>
        <div className={styles.opportunityContainer}>
          <h2 className={`${styles.title} ${styles.opportunityTitle}`}>
            A marca já é forte. A jornada digital pode ficar mais clara.
          </h2>
          <p className={styles.opportunityText}>
            Hoje, a experiência do cliente passa por links separados para cardápio, reservas, delivery, iFood, WhatsApp e localização. Uma página própria poderia organizar esses caminhos em uma experiência mais bonita, objetiva e fácil de converter.
          </p>
          <ul className={styles.opportunityList}>
            <li>Reputação forte, mas dispersa entre canais.</li>
            <li>Muitas ações possíveis, mas sem uma narrativa única.</li>
            <li>Autoridade e unidades podem aparecer com mais destaque.</li>
            <li>WhatsApp, reserva e cardápio podem ter menos atrito.</li>
          </ul>
          <a href="#mockup" className={`${styles.btn} ${styles.btnPrimary}`} style={{ backgroundColor: "var(--gold)", color: "var(--espresso)" }}>
            Ver demonstração da estrutura ideal
          </a>
        </div>
      </section>

      {/* 4. Como poderia ficar */}
      <section id="mockup" className={styles.mockupSection}>
        <div className={styles.mockupContainer}>
          <h2 className={`${styles.title} ${styles.mockupTitle}`}>
            Uma página própria para transformar autoridade em ação
          </h2>
          
          <div className={styles.mockupWindow}>
            <div className={styles.mockupBrand}>La Crosta Forneria</div>
            <div className={styles.mockupBadge}>Bicampeã Veja 23/24</div>
            <div className={styles.mockupHeadline}>Pizza napolitana e massas artesanais</div>
            
            <div className={styles.mockupActions}>
              <div className={`${styles.btn} ${styles.btnPrimary}`}>Pedir pelo WhatsApp</div>
              <div className={`${styles.btn} ${styles.btnSecondary}`}>Reservar mesa</div>
              <div className={`${styles.btn}`} style={{ border: "1px solid var(--green)", color: "var(--green)" }}>Escolher unidade</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", opacity: 0.8 }}>
              <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", fontSize: "0.75rem", border: "1px solid rgba(0,0,0,0.05)" }}>
                <strong style={{ color: "var(--red)", display: "block" }}>4,9/5 Google</strong>
                1.558 avaliações
              </div>
              <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", fontSize: "0.75rem", border: "1px solid rgba(0,0,0,0.05)" }}>
                <strong style={{ color: "var(--green)", display: "block" }}>3 Unidades</strong>
                SP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cardápio Demonstrativo */}
      <section id="estrutura" className={styles.menuSection}>
        <div className={styles.container}>
          <h2 className={`${styles.title} ${styles.menuTitle}`}>
            Cardápio e experiência mais fáceis de entender
          </h2>
          <p className={styles.menuSubtitle}>
            Sem precisar mostrar tudo de uma vez, a página pode guiar o cliente pelos principais caminhos: pizzas napolitanas, massas artesanais, reservas, delivery e unidades.
          </p>
          
          <div className={styles.menuGrid}>
            <div className={styles.menuCard}><h3>Pizzas napolitanas</h3></div>
            <div className={styles.menuCard}><h3>Massas artesanais</h3></div>
            <div className={styles.menuCard}><h3>Reservas</h3></div>
            <div className={styles.menuCard}><h3>Delivery / pedido</h3></div>
            <div className={styles.menuCard}><h3>Unidades</h3></div>
          </div>
        </div>
      </section>

      {/* 6. Unidades */}
      <section id="unidades" className={styles.locations}>
        <div className={styles.container}>
          <h2 className={`${styles.title} ${styles.locationsTitle}`}>
            Escolha a unidade mais próxima
          </h2>
          <p className={styles.locationsSubtitle}>
            A experiência La Crosta aparece em regiões estratégicas de São Paulo.
          </p>
          
          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <h3>Santana</h3>
              <p>R. Pontins, 52</p>
              <div className={styles.locationActions}>
                <a href={WHATSAPP_LINK} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </div>
            </div>
            
            <div className={styles.locationCard}>
              <h3>Água Fria</h3>
              <p>R. Ismael Neri, 306</p>
              <div className={styles.locationActions}>
                <a href={WHATSAPP_LINK} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </div>
            </div>
            
            <div className={styles.locationCard}>
              <h3>Perdizes</h3>
              <p>R. Caraíbas, 389</p>
              <div className={styles.locationActions}>
                <a href={WHATSAPP_LINK} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContainer}>
          <h2 className={`${styles.title} ${styles.finalCtaTitle}`}>
            Essa é apenas uma prévia. A ideia completa pode ficar ainda mais alinhada à marca.
          </h2>
          <p className={styles.finalCtaText}>
            A proposta aqui é mostrar como a autoridade que a La Crosta já tem poderia ser organizada em uma página própria, mais clara, bonita e estratégica para pedidos, reservas e WhatsApp.
          </p>
          <a href={WHATSAPP_FINAL_LINK} className={`${styles.btn} ${styles.finalCtaBtn}`} target="_blank" rel="noopener noreferrer">
            Posso te mostrar a versão completa?
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        Prévia estratégica demonstrativa criada por Aron Girardelli. Não se trata de uma página oficial da La Crosta Forneria.
      </footer>
    </div>
  );
}
