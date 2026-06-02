import { useNavigate } from "react-router";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
  HelpCircle,
  Shield,
  LogOut,
  ChevronRight,
  Edit,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Profile() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const menuSections = [
    {
      title: "Conta",
      items: [
        { icon: User, label: "Informações Pessoais", action: "edit-profile" },
        { icon: MapPin, label: "Endereços", action: "addresses" },
        { icon: Bell, label: "Notificações", action: "notifications" },
      ],
    },
    {
      title: "Suporte",
      items: [
        { icon: HelpCircle, label: "Central de Ajuda", action: "help" },
        { icon: Shield, label: "Política de Privacidade", action: "privacy" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#3A1D08] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 bg-[#2A1506] rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl flex-1">Perfil</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-[#3A1D08] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">JD</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <Edit className="w-3 h-3 text-[#3A1D08]" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-neutral-800 text-lg mb-1">João Silva</h2>
              <p className="text-neutral-500 text-sm">Membro Premium</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 border-t border-neutral-100 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-neutral-400" />
              <span className="text-neutral-600">joao.silva@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-neutral-400" />
              <span className="text-neutral-600">+55 (11) 98765-4321</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <div className="text-[#3A1D08] text-xl mb-1">12</div>
            <div className="text-neutral-600 text-xs">Serviços Usados</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <div className="text-[#3A1D08] text-xl mb-1">R$1.2K</div>
            <div className="text-neutral-600 text-xs">Total Gasto</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <div className="text-[#3A1D08] text-xl mb-1">4.9</div>
            <div className="text-neutral-600 text-xs">Avaliação Média</div>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-neutral-500 text-xs uppercase tracking-wider mb-3 px-2">
              {section.title}
            </h3>
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors ${
                      itemIndex < section.items.length - 1
                        ? "border-b border-neutral-100"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#3A1D08]" />
                    </div>
                    <span className="flex-1 text-left text-neutral-800 text-sm">
                      {item.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Theme Toggle */}
        <div className="mb-6">
          <h3 className="text-neutral-500 text-xs uppercase tracking-wider mb-3 px-2">
            Aparência
          </h3>
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors"
            >
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-[#3A1D08]" />
                ) : (
                  <Sun className="w-5 h-5 text-[#3A1D08]" />
                )}
              </div>
              <span className="flex-1 text-left text-neutral-800 text-sm">
                {theme === "light" ? "Modo Escuro" : "Modo Claro"}
              </span>
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  theme === "dark" ? "bg-[#3A1D08]" : "bg-neutral-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                    theme === "dark" ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-600 py-4 rounded-2xl hover:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>

        {/* App Version */}
        <div className="text-center mt-6 text-xs text-neutral-400">
          Versão 1.0.0
        </div>
      </div>
    </div>
  );
}