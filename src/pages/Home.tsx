import { useState } from "react";
import { View, Alert, Pressable, Text, ScrollView } from "react-native";
import * as Sharing from "expo-sharing";

import { AdvertenciaForm } from "../components/AdvertenciaForm";
import { gerarPDF } from "../services/pdfService";
import { AdvertenciaData } from "../types/advertencia";

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

      const disponivel = await Sharing.isAvailableAsync();

      if (disponivel) {
        await Sharing.shareAsync(caminho);
      }
    } catch (error) {
      console.error(error);

      Alert.alert("Erro", "Não foi possível gerar o PDF.");
    }
  };

  const limparFormulario = () => {
    setData({
      funcionario: "",
      admissao: undefined,
      numeroAdvertencia: 1,
      tipoDocumento: "ADVERTENCIA",
      motivos: [],
      observacoes: "",
      dataOcorrido: new Date(),
      dataAssinatura: new Date(),
      cidade: "",
    });
  };

  const confirmarLimpeza = () => {
    Alert.alert(
      "Limpar formulário",
      "Deseja realmente limpar todos os campos?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Limpar",
          style: "destructive",
          onPress: limparFormulario,
        },
      ],
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#0F172A",
          }}
        >
          Advertências
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#64748B",
            marginTop: 4,
          }}
        >
          Gere advertências e suspensões em PDF.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 16,
          marginTop: 20,
          borderRadius: 16,
          padding: 16,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 2,
        }}
      >
        <AdvertenciaForm data={data} setData={setData} />
      </View>

      <Pressable
        onPress={handleGerarDocumento}
        style={{
          backgroundColor: "#2563EB",
          marginHorizontal: 16,
          marginTop: 20,
          paddingVertical: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          {data.tipoDocumento === "ADVERTENCIA"
            ? "Gerar Advertência"
            : "Gerar Suspensão"}
        </Text>
      </Pressable>

      <Pressable
        onPress={confirmarLimpeza}
        style={{
          marginHorizontal: 16,
          marginTop: 20,
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#CBD5E1",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Text
          style={{
            color: "#475569",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Limpar Formulário
        </Text>
      </Pressable>
    </ScrollView>
  );
}
