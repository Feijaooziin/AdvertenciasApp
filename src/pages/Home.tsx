import { useState } from "react";
import {
  View,
  Alert,
  Pressable,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Sharing from "expo-sharing";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          paddingTop: (StatusBar.currentHeight ?? 0) + 20,
          paddingHorizontal: 20,
          paddingBottom: 15,
          backgroundColor: "#FFFFFF",
          borderBottomWidth: 1,
          borderBottomColor: "#E2E8F0",
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 3,
          zIndex: 10,
        }}
      >
        <View>
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
        <Ionicons name="document-text-outline" size={48} color="#2563EB" />
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={300}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginHorizontal: 16,
            marginTop: 15,
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
          onPress={confirmarLimpeza}
          style={{
            marginHorizontal: 16,
            marginTop: 20,
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            borderWidth: 1,
            borderColor: "#FCA5A5",
            backgroundColor: "#FEF2F2",
          }}
        >
          <Ionicons name="trash" size={20} color="#B91C1C" />
          <Text
            style={{
              color: "#B91C1C",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Limpar Formulário
          </Text>
        </Pressable>

        <Pressable
          onPress={handleGerarDocumento}
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            marginBottom: 32,
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            borderWidth: 1,
            borderColor: "#1D4ED8",
            backgroundColor: "#2563EB",
          }}
        >
          <Ionicons name="document-text" size={20} color="#FFFFFF" />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {data.tipoDocumento === "ADVERTENCIA"
              ? "Gerar Advertência"
              : "Gerar Suspensão"}
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </View>
  );
}
