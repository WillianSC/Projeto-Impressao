// src/pages/ImpressaoEnviar.tsx
import { useState } from "react";
import { FilePlus } from "lucide-react";

export default function ImpressaoEnviar() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const allowedTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/pdf",
    "text/plain",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    if (!allowedTypes.includes(selected.type)) {
      setError("Tipo de arquivo não permitido.");
      setFile(null);
      return;
    }

    if (selected.size > 3 * 1024 * 1024) {
      setError("O arquivo deve ter no máximo 3MB.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError("Nenhum arquivo selecionado.");
      return;
    }

    // Aqui será o envio para o backend futuramente
    console.log("Arquivo pronto para envio:", file.name);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Enviar Arquivo para Impressão</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Arquivo:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-white bg-zinc-800 rounded border border-zinc-700 p-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-amber-500 file:text-white hover:file:bg-amber-600"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <button
          type="submit"
          className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
        >
          Enviar <FilePlus className="inline ml-2" size={18} />
        </button>
      </form>

      {file && (
        <div className="mt-4 text-sm text-zinc-400">
          <p><strong>Arquivo selecionado:</strong> {file.name}</p>
        </div>
      )}
    </div>
  );
}