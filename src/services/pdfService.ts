import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";

import { AdvertenciaData } from "../types/advertencia";
import { gerarHtmlAdvertencia } from "./templateAdvertencia";

export async function gerarPDF(data: AdvertenciaData) {
  const logoBase64 = await carregarLogoBase64();
  const html = gerarHtmlAdvertencia(
    data,
    `data:image/png;base64,${logoBase64}`,
  );

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
