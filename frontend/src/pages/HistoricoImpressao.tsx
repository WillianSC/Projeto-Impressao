import React from "react";

export default function HistoricoImpressao() {
  const historicoMock = [
    { id: 1, nomeArquivo: "relatorio.pdf", data: "10/04/2025", status: "Concluído" },
    { id: 2, nomeArquivo: "imagem.png", data: "09/04/2025", status: "Pendente" },
    { id: 3, nomeArquivo: "notas.txt", data: "08/04/2025", status: "Erro" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Histórico de Impressões</h1>

      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <table className="w-full text-left text-sm">
          <thead className="text-zinc-400 border-b border-zinc-700">
            <tr>
              <th className="py-2">Arquivo</th>
              <th className="py-2">Data</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {historicoMock.map((item) => (
              <tr key={item.id} className="text-zinc-100 border-b border-zinc-800 hover:bg-zinc-800">
                <td className="py-2">{item.nomeArquivo}</td>
                <td className="py-2">{item.data}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "Concluído"
                        ? "bg-green-600"
                        : item.status === "Pendente"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {historicoMock.length === 0 && (
          <div className="text-zinc-400 mt-4 text-center">Nenhuma impressão registrada.</div>
        )}
      </div>
    </div>
  );
}