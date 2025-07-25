import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Wifi, Car, Coffee, Shield } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Informações do Evento
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa saber sobre o congresso
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  Data e Horário
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">18 e 19 de Agosto de 2025</div>
                    <div className="text-sm text-muted-foreground">Segunda e Terça-feira</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Das 8h às 18h</div>
                    <div className="text-sm text-muted-foreground">Programação completa em breve</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Local do Evento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Cullinan Hplus Premium</div>
                    <div className="text-sm text-muted-foreground">
                      SHN Q. 4 Bloco E - Asa Norte<br />
                      Brasília - DF, 70704-050
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-xs font-medium text-primary mb-1">FACILIDADES</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-muted-foreground" />
                      <span>Estacionamento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-muted-foreground" />
                      <span>Wi-Fi gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-muted-foreground" />
                      <span>Coffee break</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <span>Segurança 24h</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Participation Modes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Presencial */}
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Modalidade Presencial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Acesso completo a todas as palestras e painéis
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Networking com palestrantes e participantes
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Material didático exclusivo
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Certificado de participação
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Coffee breaks e almoço inclusos
                  </li>
                </ul>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open('https://pay.kiwify.com.br/83rDXCO', '_blank')}
                >
                  Inscrever-se Presencial
                </Button>
              </CardContent>
            </Card>
            
            {/* Online */}
            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-secondary" />
                  Modalidade Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Transmissão ao vivo de todas as palestras
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Interação via chat com palestrantes
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Material didático digital
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Certificado de participação
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Acesso às gravações por 30 dias
                  </li>
                </ul>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.open('https://pay.kiwify.com.br/81KngBq', '_blank')}
                >
                  Inscrever-se Online
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Special Offer */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Oferta Especial para Membros do COJE
                </h3>
                <p className="text-muted-foreground mb-6">
                  O congresso ocorrerá logo após o Encontro do Colégio de Ouvidores da Justiça Eleitoral em Pirenópolis/GO. 
                  Como forma de reconhecimento, oferecemos desconto especial.
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 inline-block">
                  <div className="text-3xl font-bold text-primary mb-2">15% OFF</div>
                  <div className="text-sm text-muted-foreground">
                    Para membros do COJE<br />
                    Cupom exclusivo disponível
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;