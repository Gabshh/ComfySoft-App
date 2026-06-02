import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, Clock, Shield, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock service data - in real app, would fetch based on id
  const service = {
    id: 1,
    title: "Reparo de Sofá",
    description:
      "Serviço profissional de reparo de sofá para restaurar seu móvel à sua glória original. Nossos artesãos experientes usam materiais de alta qualidade e técnicas comprovadas.",
    image: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBjb3VjaCUyMHNvZmF8ZW58MXx8fHwxNzczMDg2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "R$89",
    rating: 4.9,
    reviews: 234,
    duration: "2-3 horas",
    features: [
      "Reparo de danos na estrutura",
      "Substituição de molas",
      "Restauração de almofadas",
      "Reforço estrutural",
      "Inspeção de qualidade",
    ],
  };

  const benefits = [
    {
      icon: Clock,
      title: "Serviço Rápido",
      description: "Agendamento no mesmo dia",
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "6 meses de garantia",
    },
    {
      icon: Award,
      title: "Equipe Especializada",
      description: "15+ anos de experiência",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Image Header */}
      <div className="relative h-72">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/services")}
          className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-800" />
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl mb-1">{service.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-neutral-800">{service.rating}</span>
                <span className="text-xs text-neutral-500">({service.reviews})</span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1">
                <span className="text-sm text-neutral-800">{service.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Description */}
        <div className="mb-6">
          <h2 className="text-[#3A1D08] mb-3">Sobre Este Serviço</h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h2 className="text-[#3A1D08] mb-3">Por Que Nos Escolher</h2>
          <div className="grid grid-cols-3 gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-amber-50 rounded-xl p-3 text-center"
                >
                  <div className="w-10 h-10 bg-[#3A1D08] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-xs text-neutral-800 mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    {benefit.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-[#3A1D08] mb-3">O Que Está Incluído</h2>
          <div className="bg-amber-50 rounded-xl p-4">
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#3A1D08] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews Preview */}
        <div className="mb-6">
          <h2 className="text-[#3A1D08] mb-3">Avaliações de Clientes</h2>
          <div className="space-y-3">
            {[1, 2].map((review) => (
              <div key={review} className="bg-white border border-neutral-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-[#3A1D08] text-sm">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-neutral-800">João Silva</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  Serviço excelente! Meu sofá ficou como novo. Altamente recomendado!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-6 py-4 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-xs text-neutral-500 mb-1">A partir de</div>
            <div className="text-2xl text-[#3A1D08]">{service.price}</div>
          </div>
          <button
            onClick={() => navigate("/bookings")}
            className="flex-1 bg-[#3A1D08] text-white py-3 rounded-xl hover:bg-[#2A1506] transition-colors"
          >
            Reservar Agora
          </button>
        </div>
      </div>
    </div>
  );
}