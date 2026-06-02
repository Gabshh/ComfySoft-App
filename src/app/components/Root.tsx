import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Wrench, Camera, Calendar, User } from "lucide-react";

export function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/services", icon: Wrench, label: "Serviços" },
    { path: "/ar-camera", icon: Camera, label: "AR" },
    { path: "/bookings", icon: Calendar, label: "Reservas" },
    { path: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 max-w-md mx-auto">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? "text-[#3A1D08]" : "text-neutral-400"
                }`}
              >
                <Icon className="w-5 h-5 mb-1" strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px]">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}