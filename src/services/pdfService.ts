import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";

import { AdvertenciaData } from "../types/advertencia";

export async function gerarPDF(data: AdvertenciaData) {
  const html = `
    <html>
      <body style="font-family: Arial; padding: 20px;">
        <h2>Advertência</h2>

        <p><b>Funcionário:</b> ${data.funcionario}</p>
        <p><b>Tipo:</b> ${data.tipoDocumento}</p>
        <p><b>Número:</b> ${data.numeroAdvertencia}</p>

        <p><b>Motivos:</b></p>
        <ul>
          ${data.motivos.map((m) => `<li>${m}</li>`).join("")}
        </ul>

        <p><b>Data Ocorrido:</b> ${data.dataOcorrido.toLocaleDateString()}</p>
        <p><b>Assinatura:</b> ${data.dataAssinatura.toLocaleDateString()}</p>
      </body>
    </html>
  `;

  const { uri } = await Print.printToFileAsync({
    html,
  });

  const filePath = FileSystem.documentDirectory + "advertencia.pdf";

  await FileSystem.moveAsync({
    from: uri,
    to: filePath,
  });

  return filePath;
}
