import { useState } from "react";
import { View } from "react-native";

import { AdvertenciaData } from "../types/advertencia";
import { AdvertenciaForm } from "../components/AdvertenciaForm";

export default function Home() {
  const [data, setData] = useState<AdvertenciaData>({
    funcionario: "",
    numeroAdvertencia: 1,
    tipoDocumento: "ADVERTENCIA",
    motivos: [],
    dataOcorrido: new Date(),
    dataAssinatura: new Date(),
  });

  return (
    <View style={{ flex: 1 }}>
      <AdvertenciaForm data={data} setData={setData} />
    </View>
  );
}
