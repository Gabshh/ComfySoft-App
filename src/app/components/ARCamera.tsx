import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Camera,
  RotateCcw,
  Move,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";

export function ARCamera() {
  const navigate = useNavigate();
  const [isARActive, setIsARActive] = useState(false);
  const [selectedFurniture, setSelectedFurniture] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const furnitureItems = [
    {
      id: 1,
      name: "Sofá Moderno",
      image: "https://images.unsplash.com/photo-1663756915436-c6842b9d3eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwY291Y2h8ZW58MXx8fHwxNzczMDg2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$899",
    },
    {
      id: 2,
      name: "Sofá de Couro",
      image: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBjb3VjaCUyMHNvZmF8ZW58MXx8fHwxNzczMDg2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$1.299",
    },
    {
      id: 3,
      name: "Poltrona de Veludo",
      image: "https://images.unsplash.com/photo-1765728617313-430fd448e183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MzA4Njc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$599",
    },
    {
      id: 4,
      name: "Sofá de Tecido",
      image: "https://images.unsplash.com/photo-1771876499965-72f0a702c45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzb2ZhJTIwZmFicmljfGVufDF8fHx8MTc3MzA4Njc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "R$749",
    },
  ];

  const handleStartAR = () => {
    setIsARActive(true);
    // In a real app, this would activate the device camera
    // For demo purposes, we'll simulate it with a placeholder
  };

  const handleSelectFurniture = (id: number) => {
    setSelectedFurniture(id);
  };

  const handleCloseAR = () => {
    setIsARActive(false);
    setSelectedFurniture(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {!isARActive ? (
        <>
          {/* Header */}
          <header className="bg-[#3A1D08] px-6 pt-12 pb-6">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => navigate("/")}
                className="w-10 h-10 bg-[#2A1506] rounded-full flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex-1">
                <h1 className="text-white text-xl">Visualização AR de Móveis</h1>
                <p className="text-amber-200 text-sm">Visualize no seu espaço</p>
              </div>
            </div>
          </header>

          {/* Instructions */}
          <div className="px-6 py-6">
            <div className="bg-amber-50 border-l-4 border-[#3A1D08] rounded-lg p-4 mb-6">
              <h3 className="text-[#3A1D08] mb-2">Como funciona</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3A1D08]">1.</span>
                  <span>Selecione um móvel abaixo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A1D08]">2.</span>
                  <span>Aponte sua câmera para o local desejado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A1D08]">3.</span>
                  <span>Ajuste o tamanho e posição usando os controles</span>
                </li>
              </ul>
            </div>

            {/* Furniture Selection */}
            <h2 className="text-neutral-800 mb-4">Selecione o Móvel</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {furnitureItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectFurniture(item.id)}
                  className={`rounded-xl overflow-hidden cursor-pointer transition-all ${
                    selectedFurniture === item.id
                      ? "ring-4 ring-[#3A1D08] shadow-lg"
                      : "border border-neutral-200"
                  }`}
                >
                  <div className="relative h-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedFurniture === item.id && (
                      <div className="absolute inset-0 bg-[#3A1D08]/20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#3A1D08] rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
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
                      </div>
                    )}
                  </div>
                  <div className="p-3 bg-white">
                    <div className="text-sm text-neutral-800 mb-1">{item.name}</div>
                    <div className="text-xs text-[#3A1D08]">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Start AR Button */}
            <button
              onClick={handleStartAR}
              disabled={!selectedFurniture}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                selectedFurniture
                  ? "bg-[#3A1D08] text-white hover:bg-[#2A1506]"
                  : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
              }`}
            >
              <Camera className="w-5 h-5" />
              <span>Iniciar Visualização AR</span>
            </button>
          </div>
        </>
      ) : (
        <>
          {/* AR View - Simulated Camera */}
          <div className="relative h-screen bg-neutral-900">
            {/* Simulated Camera View */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 text-neutral-500 mx-auto mb-4" />
                <p className="text-neutral-400 text-sm">Simulação de Visualização da Câmera</p>
                <p className="text-neutral-500 text-xs mt-2">
                  Em produção, isto mostraria a transmissão da câmera ao vivo
                </p>
              </div>

              {/* Simulated Furniture Overlay */}
              {selectedFurniture && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-48 opacity-80">
                    <img
                      src={
                        furnitureItems.find((f) => f.id === selectedFurniture)?.image
                      }
                      alt="Móvel AR"
                      className="w-full h-full object-contain rounded-lg shadow-2xl"
                    />
                    {/* AR Grid Overlay */}
                    <div className="absolute inset-0 border-2 border-dashed border-yellow-400 rounded-lg">
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AR Controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
              <button
                onClick={handleCloseAR}
                className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5 text-neutral-800" />
              </button>
              <div className="bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg">
                <p className="text-xs text-neutral-800">
                  {furnitureItems.find((f) => f.id === selectedFurniture)?.name}
                </p>
              </div>
            </div>

            {/* AR Control Panel */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl">
                <div className="grid grid-cols-4 gap-3">
                  <button className="flex flex-col items-center gap-2 py-2 rounded-xl hover:bg-amber-50 transition-colors">
                    <Move className="w-5 h-5 text-[#3A1D08]" />
                    <span className="text-[10px] text-neutral-700">Mover</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 py-2 rounded-xl hover:bg-amber-50 transition-colors">
                    <RotateCcw className="w-5 h-5 text-[#3A1D08]" />
                    <span className="text-[10px] text-neutral-700">Girar</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 py-2 rounded-xl hover:bg-amber-50 transition-colors">
                    <ZoomIn className="w-5 h-5 text-[#3A1D08]" />
                    <span className="text-[10px] text-neutral-700">Ampliar</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 py-2 rounded-xl hover:bg-amber-50 transition-colors">
                    <ZoomOut className="w-5 h-5 text-[#3A1D08]" />
                    <span className="text-[10px] text-neutral-700">Reduzir</span>
                  </button>
                </div>
                <button className="w-full mt-3 bg-[#3A1D08] text-white py-3 rounded-xl hover:bg-[#2A1506] transition-colors">
                  Posicionar Móvel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}