import { useNavigate } from "react-router";
import { ArrowLeft, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const navigate = useNavigate();

  const categories = [
    { id: "all", name: "Todos", active: true },
    { id: "repair", name: "Reparo", active: false },
    { id: "renovation", name: "Renovação", active: false },
    { id: "enhancement", name: "Melhoria", active: false },
  ];

  const services = [
    {
      id: 1,
      title: "Reparo de Sofá",
      description: "Conserto especializado para sofás e poltronas danificadas",
      image: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBjb3VjaCUyMHNvZmF8ZW58MXx8fHwxNzczMDg2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$89",
      rating: 4.9,
      category: "repair",
    },
    {
      id: 2,
      title: "Renovação de Tecido",
      description: "Restauração completa de tecido e realce de cor",
      image: "https://images.unsplash.com/photo-1771876499965-72f0a702c45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzb2ZhJTIwZmFicmljfGVufDF8fHx8MTc3MzA4Njc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$129",
      rating: 4.8,
      category: "renovation",
    },
    {
      id: 3,
      title: "Acabamento de Revestimento",
      description: "Tratamento e cuidado profissional de revestimento de couro",
      image: "https://images.unsplash.com/photo-1765728617313-430fd448e183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MzA4Njc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$159",
      rating: 4.9,
      category: "enhancement",
    },
    {
      id: 4,
      title: "Restauração de Estofado",
      description: "Reconstrução e modernização completa de estofado",
      image: "https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB1cGhvbHN0ZXJ5JTIwcmVwYWlyfGVufDF8fHx8MTc3MzA4Njc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$199",
      rating: 4.7,
      category: "renovation",
    },
    {
      id: 5,
      title: "Reforço de Estrutura",
      description: "Fortaleça e repare estruturas de móveis",
      image: "https://images.unsplash.com/photo-1599652039863-6408923a6057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZXN0b3JhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MzA4Njc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$119",
      rating: 4.8,
      category: "repair",
    },
    {
      id: 6,
      title: "Melhoria de Qualidade",
      description: "Tratamento avançado para móveis premium",
      image: "https://images.unsplash.com/photo-1663756915436-c6842b9d3eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwY291Y2h8ZW58MXx8fHwxNzczMDg2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$179",
      rating: 4.9,
      category: "enhancement",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#3A1D08] px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 bg-[#2A1506] rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl flex-1">Nossos Serviços</h1>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                category.active
                  ? "bg-yellow-400 text-[#3A1D08]"
                  : "bg-[#4A2D10] text-amber-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </header>

      {/* Services Grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-neutral-700">{service.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-neutral-800 flex-1">{service.title}</h3>
                  <span className="text-[#3A1D08] ml-2">{service.price}</span>
                </div>
                <p className="text-neutral-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}