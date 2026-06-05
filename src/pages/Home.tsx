import { useState } from "react";
import { View, Alert, Pressable, Text } from "react-native";

import { AdvertenciaData } from "../types/advertencia";
import { AdvertenciaForm } from "../components/AdvertenciaForm";
import { gerarPDF } from "../services/pdfService";

export default function Home() {
  const [data, setData] = useState<AdvertenciaData>({
    funcionario: "",
    numeroAdvertencia: 1,
    tipoDocumento: "ADVERTENCIA",
    motivos: [],
    dataOcorrido: new Date(),
    dataAssinatura: new Date(),
  });

  const validarFormulario = () => {
    if (!data.funcionario.trim()) {
      Alert.alert("Campo obrigatório", "Informe o nome do funcionário.");
      return false;
    }

    if (data.motivos.length === 0) {
      Alert.alert("Campo obrigatório", "Selecione pelo menos um motivo.");
      return false;
    }

    return true;
  };

  const handleGerarDocumento = async () => {
    if (!validarFormulario()) {
      return;
    }

    try {
      const caminho = await gerarPDF(data);

      Alert.alert("PDF gerado", caminho);
    } catch (error) {
      console.error(error);

      Alert.alert("Erro", "Não foi possível gerar o PDF.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
    >
      <AdvertenciaForm data={data} setData={setData} />
      <Pressable
        onPress={handleGerarDocumento}
        style={{
          backgroundColor: "#2563EB",
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Gerar Documento
        </Text>
      </Pressable>
    </View>
  );
}
