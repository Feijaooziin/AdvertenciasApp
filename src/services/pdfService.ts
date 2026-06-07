import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";

import { AdvertenciaData } from "../types/advertencia";
import { gerarHtmlAdvertencia } from "./templateAdvertencia";
import { logoBase64 } from "../data/logoBase64";

function gerarNomeArquivo(data: AdvertenciaData) {
  const tipo =
    data.tipoDocumento === "ADVERTENCIA"
      ? `${data.numeroAdvertencia}ª Advertencia`
      : `${data.numeroAdvertencia}ª Suspensao`;

  const funcionario = data.funcionario
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/\s+/g, " ");

  const motivo = data.motivos.length > 0 ? data.motivos[0] : "SemMotivo";

  const motivoFormatado = motivo.replace(/[^\w\s]/g, "").replace(/\s+/g, "_");

  return `${tipo} ${funcionario} ${motivoFormatado}.pdf`;
}

export async function gerarPDF(data: AdvertenciaData) {
  const html = gerarHtmlAdvertencia(
    data,
    `data:image/png;base64,${logoBase64}`,
  );

  const { uri } = await Print.printToFileAsync({
    html,
  });

  const nomeArquivo = gerarNomeArquivo(data);

  const filePath = FileSystem.documentDirectory + nomeArquivo;

  await FileSystem.moveAsync({
    from: uri,
    to: filePath,
  });

  return filePath;
}
