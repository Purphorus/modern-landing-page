import logo from "@/assets/logo-smartyou.png";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <img src={logo} alt="SmartYou" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>
              Viva a experiência smart. Esteja no controle da sua casa, dentro ou longe dela.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "hsl(0 0% 70%)" }}>
              {["Automação", "Benefícios", "Empresas", "Investimento"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace("í", "i")}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Contato
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "hsl(0 0% 70%)" }}>
              <a
                href="https://api.whatsapp.com/send?phone=5531994559999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                WhatsApp
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/smartyouautomacao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-8 text-center text-sm"
          style={{ borderColor: "hsl(0 0% 20%)", color: "hsl(0 0% 50%)" }}
        >
          © {new Date().getFullYear()} SmartYou Automação Residencial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
