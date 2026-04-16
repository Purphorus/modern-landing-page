import { motion } from "framer-motion";
import { Armchair, ShieldCheck, Zap, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Armchair,
    title: "Conforto personalizado",
    desc: "Ajuste luzes, temperatura e som com seu smartphone para adaptar o ambiente às suas preferências.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança inteligente",
    desc: "Simule presença, monitore câmeras e receba alertas em tempo real, de qualquer lugar.",
  },
  {
    icon: Zap,
    title: "Economia de energia",
    desc: "Gerencie o consumo de forma inteligente e reduza desperdícios automaticamente.",
  },
  {
    icon: Leaf,
    title: "Praticidade no dia a dia",
    desc: "Crie rotinas automatizadas que acompanham sua rotina diária com facilidade.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Principais benefícios
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra como a automação transforma seu dia a dia com mais conforto e inteligência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
