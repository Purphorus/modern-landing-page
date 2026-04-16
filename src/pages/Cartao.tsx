import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tv,
  Blinds,
  Lightbulb,
  Speaker,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  ChevronDown,
  X,
  Play,
  Pause,
} from "lucide-react";
import logoSmartYou from "@/assets/logo-smartyou.png";
import tvFlapImg from "@/assets/tv-flap.jpg";
import cortinasImg from "@/assets/cortinas-auto.jpg";
import iluminacaoImg from "@/assets/iluminacao.jpg";
import somImg from "@/assets/som-ambiente.jpg";

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  interactiveLabel: string;
  interactiveStates: { label: string; description: string }[];
}

const solutions: Solution[] = [
  {
    id: "tv-flap",
    icon: <Tv size={24} />,
    title: "TV Flap",
    subtitle: "A TV que desce do teto",
    image: tvFlapImg,
    description:
      "Surpreenda seus convidados com uma TV que aparece magicamente do teto. Quando desligada, desaparece completamente, preservando a estética do ambiente.",
    features: [
      "Mecanismo silencioso",
      "Compatível com TVs até 75\"",
      "Controle via app ou voz",
      "Integração com cenas de automação",
    ],
    interactiveLabel: "Simule a TV Flap",
    interactiveStates: [
      { label: "Recolhida", description: "TV escondida no teto — ambiente clean e minimalista" },
      { label: "Descendo", description: "Mecanismo ativado — a TV desce suavemente em 8 segundos" },
      { label: "Aberta", description: "TV posicionada — pronta para uso com som integrado" },
    ],
  },
  {
    id: "cortinas",
    icon: <Blinds size={24} />,
    title: "Cortinas Automatizadas",
    subtitle: "Controle a luz natural",
    image: cortinasImg,
    description:
      "Programe suas cortinas para abrir com o nascer do sol ou fechar ao anoitecer. Privacidade e conforto térmico com um toque.",
    features: [
      "Programação por horário",
      "Sensor de luminosidade",
      "Motor ultra silencioso",
      "Cenas personalizadas",
    ],
    interactiveLabel: "Controle as cortinas",
    interactiveStates: [
      { label: "Abertas", description: "Luz natural entrando — integração com sensor de luminosidade" },
      { label: "Meio", description: "Filtragem parcial — conforto térmico otimizado" },
      { label: "Fechadas", description: "Privacidade total — blackout para cinema em casa" },
    ],
  },
  {
    id: "iluminacao",
    icon: <Lightbulb size={24} />,
    title: "Iluminação Inteligente",
    subtitle: "Crie ambientes perfeitos",
    image: iluminacaoImg,
    description:
      "Transforme qualquer ambiente com cenários de iluminação personalizados. De um jantar romântico a uma festa vibrante, tudo com um comando.",
    features: [
      "16 milhões de cores",
      "Cenas pré-programadas",
      "Dimmer automático",
      "Ritmo com música",
    ],
    interactiveLabel: "Mude o cenário",
    interactiveStates: [
      { label: "Relaxar", description: "Tons quentes e suaves — ideal para descanso" },
      { label: "Concentrar", description: "Luz branca neutra — produtividade máxima" },
      { label: "Festa", description: "Cores vibrantes e dinâmicas — sincroniza com o som" },
    ],
  },
  {
    id: "som",
    icon: <Speaker size={24} />,
    title: "Som Ambiente",
    subtitle: "Música em todos os cantos",
    image: somImg,
    description:
      "Caixas de som embutidas no teto, invisíveis e potentes. Distribua música por toda a casa com qualidade de estúdio.",
    features: [
      "Multiroom sincronizado",
      "Caixas embutidas invisíveis",
      "Streaming direto (Spotify, Apple Music)",
      "Controle por zona",
    ],
    interactiveLabel: "Escolha a zona",
    interactiveStates: [
      { label: "Sala", description: "Som focado na sala — ideal para filmes e música" },
      { label: "Toda casa", description: "Multiroom ativado — mesma música em todos os ambientes" },
      { label: "Silêncio", description: "Tudo desligado — paz total com um comando" },
    ],
  },
];

const Cartao = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [interactiveState, setInteractiveState] = useState<Record<string, number>>({});
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const getState = (id: string) => interactiveState[id] ?? 0;

  const cycleState = (id: string, maxStates: number) => {
    setInteractiveState((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % maxStates,
    }));
  };

  const activeSolution = solutions.find((s) => s.id === selectedSolution);

  return (
    <div className="min-h-screen bg-foreground text-background overflow-x-hidden">
      {/* Hero / Card Header */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 py-12">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-md"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <img src={logoSmartYou} alt="SmartYou Automação" className="h-10 mx-auto mb-6" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
              L
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
          >
            Lucas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            CEO · SmartYou Automação
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xs"
          >
            Transformando espaços em experiências inteligentes. Conheça nossas soluções de forma interativa.
          </motion.p>

          {/* Contact quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3 mb-10"
          >
            {[
              { icon: <MessageCircle size={18} />, href: "https://api.whatsapp.com/send?phone=5531994559999", label: "WhatsApp" },
              { icon: <Phone size={18} />, href: "tel:+5531994559999", label: "Ligar" },
              { icon: <Mail size={18} />, href: "mailto:contato@smartyouautomacao.com.br", label: "Email" },
              { icon: <ExternalLink size={18} />, href: "https://instagram.com/smartyouautomacao", label: "Instagram" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-muted-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Explore as soluções</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Selector */}
      <section className="px-4 pb-8">
        <div className="max-w-lg mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Toque para interagir
          </motion.p>

          <div className="grid grid-cols-2 gap-3">
            {solutions.map((sol, i) => (
              <motion.button
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setSelectedSolution(sol.id === selectedSolution ? null : sol.id);
                  setExpandedCard(null);
                }}
                className={`relative group rounded-2xl p-4 text-left transition-all duration-300 border ${
                  selectedSolution === sol.id
                    ? "bg-primary/10 border-primary/40 scale-[1.02]"
                    : "bg-muted/5 border-muted-foreground/10 hover:border-muted-foreground/20"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 ${
                    selectedSolution === sol.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/10 text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {sol.icon}
                </div>
                <h3 className="font-bold text-sm mb-0.5">{sol.title}</h3>
                <p className="text-xs text-muted-foreground">{sol.subtitle}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Detail Panel */}
      <AnimatePresence mode="wait">
        {activeSolution && (
          <motion.section
            key={activeSolution.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-4 pb-16"
          >
            <div className="max-w-lg mx-auto">
              {/* Image with interactive overlay */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Interactive state indicator */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {activeSolution.interactiveStates.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                          idx <= getState(activeSolution.id)
                            ? "bg-primary"
                            : "bg-background/20"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-background">
                    {activeSolution.interactiveStates[getState(activeSolution.id)].label}
                  </p>
                  <p className="text-xs text-background/70">
                    {activeSolution.interactiveStates[getState(activeSolution.id)].description}
                  </p>
                </div>
              </div>

              {/* Interactive button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => cycleState(activeSolution.id, activeSolution.interactiveStates.length)}
                className="w-full rounded-xl bg-gradient-to-r from-primary to-accent py-4 px-6 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 mb-6 active:opacity-90 transition-opacity"
              >
                <Play size={16} />
                {activeSolution.interactiveLabel}
              </motion.button>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {activeSolution.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {activeSolution.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://api.whatsapp.com/send?phone=5531994559999&text=Olá Lucas! Vi a solução ${activeSolution.title} no seu cartão digital e gostaria de saber mais.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl border border-primary/30 py-3 px-6 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
              >
                Quero saber mais sobre {activeSolution.title}
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-muted-foreground/10 py-8 px-4 text-center">
        <img src={logoSmartYou} alt="SmartYou" className="h-6 mx-auto mb-3 opacity-50" />
        <p className="text-xs text-muted-foreground">
          SmartYou Automação · Belo Horizonte, MG
        </p>
        <p className="text-[10px] text-muted-foreground/50 mt-2">
          Cartão digital interativo
        </p>
      </footer>
    </div>
  );
};

export default Cartao;
