import { useNavigate } from "react-router";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/e573e9b83d3956fd108a2b44f86e6b7bafe4b418.png";

export function Home() {
  const navigate = useNavigate();

  const featuredServices = [
    {
      id: 1,
      title: "Reparo de Sofá",
      description: "Conserto especializado para sofás danificados",
      image: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBjb3VjaCUyMHNvZmF8ZW58MXx8fHwxNzczMDg2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$89",
    },
    {
      id: 2,
      title: "Renovação de Tecido",
      description: "Restaure e melhore a qualidade do tecido",
      image: "https://images.unsplash.com/photo-1771876499965-72f0a702c45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzb2ZhJTIwZmFicmljfGVufDF8fHx8MTc3MzA4Njc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$129",
    },
    {
      id: 3,
      title: "Acabamento de Revestimento",
      description: "Tratamento profissional de revestimento",
      image: "https://images.unsplash.com/photo-1765728617313-430fd448e183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MzA4Njc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$159",
    },
  ];

  const stats = [
    { number: "2.5K+", label: "Clientes Felizes" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#3A1D08] to-[#2A1506] px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex justify-between items-start mb-8">
          <div>
            {/* Logo */}
            <div className="mb-4">
              <img src={logo} alt="ComfySoft Logo" className="h-16 w-auto" />
            </div>
            <h1 className="text-white text-2xl mb-1">Bem-vindo de volta!</h1>
            <p className="text-amber-200 text-sm">Vamos restaurar seus móveis</p>
          </div>
          <div className="w-10 h-10 bg-[#4A2D10] rounded-full flex items-center justify-center">
            <span className="text-white">JD</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar serviços..."
            className="flex-1 outline-none text-neutral-700 placeholder:text-neutral-400"
          />
        </div>
      </header>

      <div className="px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-[#3A1D08] text-xl mb-1">{stat.number}</div>
              <div className="text-neutral-600 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AR Feature Banner */}
        <div
          className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-6 mb-8 cursor-pointer shadow-lg"
          onClick={() => navigate("/ar-camera")}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#3A1D08]" />
                <span className="text-[#3A1D08] text-xs">NOVO RECURSO</span>
              </div>
              <h3 className="text-white text-lg mb-1">Visualização AR de Móveis</h3>
              <p className="text-amber-100 text-sm">Visualize móveis no seu espaço</p>
            </div>
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#3A1D08] text-lg">Serviços em Destaque</h2>
            <button
              onClick={() => navigate("/services")}
              className="text-[#4A2D10] text-sm flex items-center gap-1"
            >
              Ver Todos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 py-3 pr-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-neutral-800 mb-1">{service.title}</h3>
                      <p className="text-neutral-500 text-xs">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#3A1D08]">{service.price}</span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs text-neutral-600">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => navigate("/bookings")}
            className="bg-[#3A1D08] text-white rounded-xl p-4 text-left hover:bg-[#2A1506] transition-colors"
          >
            <div className="text-sm mb-1">Minhas Reservas</div>
            <div className="text-xs text-amber-200">Ver todos os agendamentos</div>
          </button>
          <button
            onClick={() => navigate("/services")}
            className="bg-yellow-400 text-[#3A1D08] rounded-xl p-4 text-left hover:bg-yellow-300 transition-colors"
          >
            <div className="text-sm mb-1">Todos os Serviços</div>
            <div className="text-xs text-amber-800">Navegar catálogo</div>
          </button>
        </div>
      </div>
    </div>
  );
}