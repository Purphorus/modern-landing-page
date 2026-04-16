import { motion } from "framer-motion";
import { Home, Smartphone, Wifi } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="automacao" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              O que é
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Automação Residencial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Automação Residencial é uma tecnologia que torna sua casa mais confortável,
              econômica e moderna. Com ela, você pode controlar automaticamente luzes,
              ar-condicionado, TV, som e tomadas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Programe rotinas e controle tudo por voz ou pelo celular,
              de qualquer lugar com acesso à internet. Funciona em casas, apartamentos,
              sítios e estabelecimentos comerciais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: Home,
                title: "Qualquer imóvel",
                desc: "Casas, apartamentos, sítios, restaurantes, hotéis e muito mais.",
              },
              {
                icon: Smartphone,
                title: "Controle total",
                desc: "Gerencie tudo pelo celular ou por comando de voz, onde estiver.",
              },
              {
                icon: Wifi,
                title: "Sempre conectado",
                desc: "Acesse e monitore sua casa de qualquer lugar com internet.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
