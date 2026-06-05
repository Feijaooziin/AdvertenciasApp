import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";
import { Asset } from "expo-asset";

import { AdvertenciaData } from "../types/advertencia";
import { gerarHtmlAdvertencia } from "./templateAdvertencia";

export async function gerarPDF(data: AdvertenciaData) {
  async function carregarLogoBase64() {
    const asset = Asset.fromModule(require("../../assets/images/logo.png"));

    await asset.downloadAsync();

    return await FileSystem.readAsStringAsync(asset.localUri!, {
      encoding: FileSystem.EncodingType.Base64,
    });
  }

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
