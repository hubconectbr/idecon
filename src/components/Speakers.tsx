import { Card, CardContent } from "@/components/ui/card";

const Speakers = () => {
  const speakers = [
    {
      name: "Ministra Edilene Lôbo",
      title: "Ministra Substituta do TSE",
      image: "/lovable-uploads/0566d282-a22c-4a52-8e9f-25e49446a021.png",
      description: "Doutora em Direito Público, reconhecida por sua atuação em temas de inteligência artificial, direitos humanos e inovação jurídica.",
      keynote: "Conferência de abertura: Os desafios da inteligência artificial para os direitos fundamentais"
    },
    {
      name: "Andrea Willemin",
      title: "Chief Global Privacy & AI Governance Officer (Grupo Portobello)",
      image: "/lovable-uploads/2fee2959-46e0-489b-a76e-c6a72f805194.png",
      description: "Doutora em Direito Constitucional, economista e engenheira da computação. Especialista internacional em proteção de dados e IA.",
      keynote: "Governança algorítmica e tecnologias emergentes"
    },
    {
      name: "Anxo Varela Hernández",
      title: "Professor na Universidade de Santiago de Compostela (Espanha)",
      image: "/lovable-uploads/f4c6314f-ae6d-4963-949d-8fdd6946a82e.png",
      description: "Pesquisador líder no Centro de Estudos de Segurança (CESEG/USC), especialista em governança de riscos cibernéticos.",
      keynote: "Segurança da informação e políticas públicas na União Europeia"
    },
    {
      name: "João Santa Terra Júnior",
      title: "Promotor de Justiça (MPSP), Doutorando em Salamanca",
      image: "/lovable-uploads/4dfc1987-5ea7-412a-8be2-5a2634401ee8.png",
      description: "Especialista em Direito Penal, Política Criminal, Inteligência e Segurança Institucional. Coordenador da Comissão de Defesa da Probidade Administrativa do CNMP.",
      keynote: "Direito Digital e Proteção de Dados Pessoais"
    },
    {
      name: "Tatiana Kolly Wasilewski Rodrigues",
      title: "Assessora de Proteção de Dados no TSE",
      image: "/lovable-uploads/4da35539-5efe-4a8b-af39-210ad47eafab.png",
      description: "Especialista em proteção de dados e privacidade no contexto da Justiça Eleitoral brasileira.",
      keynote: "Implementação da LGPD na Justiça Eleitoral"
    },
    {
      name: "Dr. Joelson Dias",
      title: "Presidente do IDECON, Ex-Ministro Substituto do TSE",
      image: "",
      description: "Advogado, Mestre em Direito pela Universidade de Harvard. Sócio fundador e presidente do Instituto IDECON.",
      keynote: "Transformações do Direito na era digital"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Palestrantes Confirmados
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Especialistas brasileiros e europeus reunidos para debater os principais 
              desafios e avanços regulatórios da era digital.
            </p>
          </div>
          
          {/* Speakers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary hover:border-l-secondary"
              >
                <CardContent className="p-6">
                  {speaker.image && (
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {speaker.name}
                  </h3>
                  
                  <div className="text-sm font-medium text-primary mb-3">
                    {speaker.title}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {speaker.description}
                  </p>
                  
                  {speaker.keynote && (
                    <div className="bg-muted/50 rounded-lg p-3 border-l-2 border-l-secondary">
                      <div className="text-xs font-medium text-secondary mb-1">APRESENTAÇÃO</div>
                      <div className="text-sm text-foreground">{speaker.keynote}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Speakers Note */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Mais Palestrantes em Breve
                </h3>
                <p className="text-muted-foreground">
                  Estamos finalizando a programação completa com outros especialistas 
                  de renome nacional e internacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;