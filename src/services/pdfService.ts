import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";

import { AdvertenciaData } from "../types/advertencia";
import { gerarHtmlAdvertencia } from "./templateAdvertencia";

export async function gerarPDF(data: AdvertenciaData) {
  const html = gerarHtmlAdvertencia(data);

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
