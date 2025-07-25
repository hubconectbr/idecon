import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Monitor, Shield } from "lucide-react";
import bannerIdecon from "@/assets/banner-principal-idecon.jpg";
import logoIdecon from "/lovable-uploads/12c658bc-364f-47bc-be42-345c0029f431.png";

const EventHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Banner Principal */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <img 
          src="/lovable-uploads/9e8661fa-6029-4ff6-801f-7ba1928da1a0.png" 
          alt="Banner Principal IDECON - Congresso Internacional" 
          className="w-full h-32 md:h-40 lg:h-48 object-cover"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 mt-32 md:mt-40 lg:mt-48">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* IDECON Logo Area */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6 backdrop-blur-sm p-2">
              <img 
                src={logoIdecon} 
                alt="Logo IDECON" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-sm font-medium text-white/90 mb-2">INSTITUTO IDECON APRESENTA</div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">CONGRESSO INTERNACIONAL</span>
            <span className="block text-secondary mt-2">REGULAÇÃO DA PROTEÇÃO DE DADOS,</span>
            <span className="block text-white">IA E CIBERSEGURANÇA</span>
          </h1>
          
          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <div className="font-semibold">18 e 19 de Agosto</div>
                <div className="text-sm text-white/80">2025</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <div className="font-semibold">Brasília/DF</div>
                <div className="text-sm text-white/80">Cullinan Hplus Premium</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Monitor className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <div className="font-semibold">Modalidade Híbrida</div>
                <div className="text-sm text-white/80">Presencial + Online</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="cta" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4"
              onClick={() => window.open('https://pay.kiwify.com.br/83rDXCO', '_blank')}
            >
              Inscrição Presencial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://pay.kiwify.com.br/81KngBq', '_blank')}
            >
              Inscrição Online
            </Button>
          </div>
          
          {/* Discount Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-white/90">
              <span className="font-semibold text-secondary">15% de desconto</span> para membros do COJE
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160L1200,160L1200,200L0,200Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default EventHero;