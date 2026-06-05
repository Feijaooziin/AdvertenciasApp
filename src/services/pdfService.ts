import React from "react";

import * as FileSystem from "expo-file-system/legacy";
import { pdf } from "@react-pdf/renderer";
import { AdvertenciaPDF } from "../components/AdvertenciaPDF";
import { AdvertenciaData } from "../types/advertencia";

export async function gerarPDF(
  data: AdvertenciaData
) {
  const blob = await pdf(
    <AdvertenciaPDF data={data} />
  ).toBlob();

  const reader = new FileReader();

  return new Promise<string>(
    (resolve, reject) => {
      reader.onloadend = async () => {
        try {
          const base64 = (
            reader.result as string
          ).split(",")[1];

          const filePath =
            `${FileSystem.documentDirectory}advertencia.pdf`;

          await FileSystem.writeAsStringAsync(
            filePath,
            base64,
            {
              encoding:
                FileSystem.EncodingType.Base64,
            }
          );

          resolve(filePath);
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsDataURL(blob);
    }
  );
}