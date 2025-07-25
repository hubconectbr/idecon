import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Users, BookOpen } from "lucide-react";

const AboutEvent = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre o Congresso
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Instituto de Estudos Jurídicos e de Diálogos Constitucionais (IDECON) promove 
              um evento internacional para debater os principais desafios regulatórios da era digital.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                O IDECON
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Uma instituição dedicada à promoção de uma abordagem contemporânea e conectada 
                às transformações do Direito, por meio de cursos, pesquisas e eventos que promovem 
                o diálogo entre academia, poder público e sociedade.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fundado em Brasília, sob a presidência do advogado Joelson Dias, ex-Ministro 
                Substituto do Tribunal Superior Eleitoral (TSE) e Mestre em Direito pela 
                Universidade de Harvard.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Proteção de Dados</h4>
                  <p className="text-sm text-muted-foreground">Regulamentação e governança</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">IA e Cibersegurança</h4>
                  <p className="text-sm text-muted-foreground">Desafios contemporâneos</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Diálogo Internacional</h4>
                  <p className="text-sm text-muted-foreground">Brasil e Europa</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-primary-light">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-primary-light mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Conhecimento</h4>
                  <p className="text-sm text-muted-foreground">Academia e prática</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Event Focus */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Foco do Congresso
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Temas Principais</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Transparência pública
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Proteção de dados pessoais
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Inteligência artificial
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Governança de riscos cibernéticos
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Público-Alvo</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      Ouvidores da Justiça Eleitoral
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      Profissionais do Direito
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      Acadêmicos e pesquisadores
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      Gestores públicos
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;