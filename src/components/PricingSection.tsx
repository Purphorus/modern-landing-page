import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Iluminação",
  "Ar-Condicionado",
  "Som ambiente",
  "Cortinas automatizadas",
  "Irrigação de jardim",
  "Dispositivos touch screen",
  "Comando por voz e celular",
  "Rotinas personalizadas",
];

const PricingSection = () => {
  return (
    <section id="investimento" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Investimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4 leading-tight">
              Faça um investimento inteligente
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Automatize sua casa ou empresa com facilidade e tenha o controle total na palma da sua mão.
            </p>

            <div className="space-y-3">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl bg-card border border-border p-10 text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wider">
                A partir de
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-2xl font-bold text-foreground">R$</span>
                <span className="text-6xl font-extrabold text-foreground">2.999</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Transforme seu espaço com tecnologia de ponta
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5531994559999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
