import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* IDECON Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">IDECON</div>
                <div className="text-xs text-primary-foreground/80">Instituto de Estudos Jurídicos</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Promovendo uma abordagem contemporânea e conectada às transformações 
              do Direito através de cursos, pesquisas e eventos.
            </p>
            <div className="text-sm text-primary-foreground/80">
              <div className="font-semibold mb-2">Presidente:</div>
              <div>Dr. Joelson Dias</div>
              <div className="text-xs">Ex-Ministro Substituto do TSE</div>
              <div className="text-xs">Mestre em Direito - Harvard</div>
            </div>
          </div>
          
          {/* Event Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Congresso Internacional</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Cullinan Hplus Premium</div>
                  <div>Brasília/DF</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 flex-shrink-0" />
                <div>18 e 19 de Agosto de 2025</div>
              </div>
              <div>
                <div className="font-medium text-primary-foreground">Modalidades:</div>
                <div>• Presencial em Brasília</div>
                <div>• Online (transmissão ao vivo)</div>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <div>contato@idecon.org.br</div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>+55 (61) 9999-9999</div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Brasília/DF</div>
                  <div>Brasil</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-xs text-primary-foreground/60">
                <div className="font-medium mb-2">Parceria com COJE</div>
                <div>Colégio de Ouvidores da Justiça Eleitoral</div>
                <div>15% de desconto para membros</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="text-sm text-primary-foreground/80">
            © 2025 Instituto IDECON. Todos os direitos reservados.
          </div>
          <div className="text-xs text-primary-foreground/60 mt-2">
            Congresso Internacional sobre Regulação da Proteção de Dados, IA e Cibersegurança
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;