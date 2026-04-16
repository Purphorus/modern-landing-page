import { motion } from "framer-motion";
import { Building2, Handshake, HardHat } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "Para sua empresa",
    desc: "Automatize restaurantes, bares, clínicas, hotéis e lojas com soluções sob medida para o seu negócio.",
  },
  {
    icon: HardHat,
    title: "Construtoras",
    desc: "Agregue valor aos seus empreendimentos com automação integrada desde o projeto, diferenciando seu produto no mercado.",
  },
  {
    icon: Handshake,
    title: "Parcerias",
    desc: "Seja nosso parceiro e ofereça soluções de automação inteligente aos seus clientes com suporte completo.",
  },
];

const BusinessSection = () => {
  return (
    <section id="empresas" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Soluções B2B
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Automação para todos os segmentos
          </h2>
          <p className="text-muted-foreground text-lg">
            Seja residencial ou comercial, temos a solução ideal para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
