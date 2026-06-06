import * as Print from "expo-print";
import * as FileSystem from "expo-file-system/legacy";
import { Asset } from "expo-asset";

import { AdvertenciaData } from "../types/advertencia";
import { gerarHtmlAdvertencia } from "./templateAdvertencia";

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
  async function carregarLogoBase64() {
    // const asset = Asset.fromModule(require("../../assets/images/logo.png"));

    // await asset.downloadAsync();

    // return await FileSystem.readAsStringAsync(asset.localUri!, {
    //   encoding: FileSystem.EncodingType.Base64,
    // });

    const asset = Asset.fromModule(require("../../assets/images/logo.png"));

    await asset.downloadAsync();

    const uri = asset.localUri ?? asset.uri;

    return await FileSystem.readAsStringAsync(uri, {
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

  const nomeArquivo = gerarNomeArquivo(data);

  const filePath = FileSystem.documentDirectory + nomeArquivo;

  await FileSystem.moveAsync({
    from: uri,
    to: filePath,
  });

  return filePath;
}
