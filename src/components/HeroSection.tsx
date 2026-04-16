import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-smart-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa inteligente com automação"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Automação Residencial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Viva a experiência{" "}
            <span className="text-primary">Smart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            style={{ color: "hsl(0 0% 85%)" }}
          >
            Esteja no controle da sua casa, dentro ou longe dela.
            Conforto, segurança e economia na palma da sua mão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5531994559999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Faça um orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#automacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ borderColor: "hsl(0 0% 100% / 0.3)", color: "hsl(0 0% 100%)" }}
            >
              Saiba mais
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
