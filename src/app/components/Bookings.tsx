import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageSquare } from "lucide-react";

export function Bookings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");

  const upcomingBookings = [
    {
      id: 1,
      service: "Reparo de Sofá",
      date: "15 de Março, 2026",
      time: "10:00",
      status: "confirmed",
      address: "Rua Principal 123, Apto 4B",
      technician: "Miguel Santos",
      image: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBjb3VjaCUyMHNvZmF8ZW58MXx8fHwxNzczMDg2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      service: "Renovação de Tecido",
      date: "22 de Março, 2026",
      time: "14:00",
      status: "pending",
      address: "Avenida das Árvores 456",
      technician: "Sara Silva",
      image: "https://images.unsplash.com/photo-1771876499965-72f0a702c45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzb2ZhJTIwZmFicmljfGVufDF8fHx8MTc3MzA4Njc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const completedBookings = [
    {
      id: 3,
      service: "Acabamento de Revestimento",
      date: "5 de Março, 2026",
      time: "11:00",
      status: "completed",
      address: "Rua dos Pinheiros 789",
      technician: "David Costa",
      image: "https://images.unsplash.com/photo-1765728617313-430fd448e183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MzA4Njc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
  ];

  const bookings = activeTab === "upcoming" ? upcomingBookings : completedBookings;

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
          <h1 className="text-white text-xl flex-1">Minhas Reservas</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 py-2 rounded-xl text-sm transition-colors ${
              activeTab === "upcoming"
                ? "bg-yellow-400 text-[#3A1D08]"
                : "bg-[#4A2D10] text-amber-200"
            }`}
          >
            Próximas
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2 rounded-xl text-sm transition-colors ${
              activeTab === "completed"
                ? "bg-yellow-400 text-[#3A1D08]"
                : "bg-[#4A2D10] text-amber-200"
            }`}
          >
            Concluídas
          </button>
        </div>
      </header>

      {/* Bookings List */}
      <div className="px-6 py-6">
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 mb-2">Nenhuma reserva {activeTab === "upcoming" ? "próxima" : "concluída"}</p>
            <button
              onClick={() => navigate("/services")}
              className="text-[#3A1D08] text-sm"
            >
              Navegar Serviços
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={booking.image}
                      alt={booking.service}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-neutral-800">{booking.service}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-neutral-100 text-neutral-700"
                        }`}
                      >
                        {booking.status === "confirmed" ? "confirmada" : booking.status === "pending" ? "pendente" : "concluída"}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <Calendar className="w-3 h-3" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <Clock className="w-3 h-3" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{booking.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technician Info & Actions */}
                <div className="border-t border-neutral-100 px-4 py-3 bg-neutral-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">
                          {booking.technician.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-800">
                          {booking.technician}
                        </div>
                        <div className="text-[10px] text-neutral-500">Técnico</div>
                      </div>
                    </div>

                    {activeTab === "upcoming" ? (
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors">
                          <Phone className="w-4 h-4 text-[#3A1D08]" />
                        </button>
                        <button className="w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors">
                          <MessageSquare className="w-4 h-4 text-[#3A1D08]" />
                        </button>
                      </div>
                    ) : (
                      <button className="text-xs text-[#3A1D08] bg-amber-50 px-3 py-1 rounded-full hover:bg-amber-100 transition-colors">
                        Reservar Novamente
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* New Booking Button */}
        {bookings.length > 0 && (
          <button
            onClick={() => navigate("/services")}
            className="w-full mt-6 bg-[#3A1D08] text-white py-4 rounded-xl hover:bg-[#2A1506] transition-colors"
          >
            Reservar Novo Serviço
          </button>
        )}
      </div>
    </div>
  );
}