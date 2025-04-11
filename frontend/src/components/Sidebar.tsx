import { useState, useRef, useEffect } from "react";
import { Home, LogOut, Menu, UploadCloud, History } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`bg-zinc-900 text-white h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } relative flex flex-col`}
    >
      {/* Botão de expandir/recolher a sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-4 bg-zinc-900 border border-zinc-700 rounded-full p-1 z-10 hover:bg-zinc-800 transition"
      >
        <Menu size={20} />
      </button>

      {/* Perfil do usuário com dropdown */}
      <div
        ref={menuRef}
        className={`relative flex items-center p-4 ${
          isOpen ? "justify-start gap-3" : "justify-center"
        }`}
      >
        {/* Avatar */}
        <div
          className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shrink-0 cursor-pointer"
          onClick={() => setIsUserMenuOpen((prev) => !prev)}
        >
          U
        </div>

        {isOpen && (
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          >
            <span className="text-white font-medium">Usuário</span>
            <div className="text-sm text-zinc-400">usuario@email.com</div>
            <div className="text-sm text-zinc-200 font-medium">
              Créditos: R$ 8,50
            </div>
          </div>
        )}

        {/* Dropdown do perfil */}
        {isUserMenuOpen && (
          <div className="absolute left-14 top-14 w-40 bg-zinc-800 border border-zinc-700 rounded-md shadow-md z-50">
            <button
              onClick={() => {
                navigate("/perfil");
                setIsUserMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-zinc-700 transition"
            >
              Editar perfil
            </button>
          </div>
        )}
      </div>

      {/* Separador */}
      <div className="border-t border-zinc-700 my-2 mx-4" />

      {/* Itens do menu */}
      <nav className="flex-1 flex flex-col gap-2 p-2">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-4 p-2 rounded hover:bg-zinc-800 transition cursor-pointer"
        >
          <Home size={20} />
          {isOpen && <span>Início</span>}
        </div>

        <div
          onClick={() => navigate("/enviarImpressao")}
          className="flex items-center gap-4 p-2 rounded hover:bg-zinc-800 transition cursor-pointer"
        >
          <UploadCloud size={20} />
          {isOpen && <span>Enviar Impressão</span>}
        </div>

        <div
          onClick={() => navigate("/historicoImpressao")}
          className="flex items-center gap-4 p-2 rounded hover:bg-zinc-800 transition cursor-pointer"
        >
          <History size={20} />
          {isOpen && <span>Histórico de Impressões</span>}
        </div>
      </nav>

      {/* Botão de logout no final */}
      <div className="p-2 mb-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full p-2 rounded hover:bg-zinc-800 transition"
        >
          <LogOut size={20} />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}