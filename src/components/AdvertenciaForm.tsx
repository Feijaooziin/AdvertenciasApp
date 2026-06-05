import { Dispatch, SetStateAction } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AdvertenciaData } from "../types/advertencia";

interface Props {
  data: AdvertenciaData;
  setData: Dispatch<SetStateAction<AdvertenciaData>>;
}

export function AdvertenciaForm({ data, setData }: Props) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 4,
        }}
      >
        Funcionário
      </Text>

      <TextInput
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
        value={data.funcionario}
        onChangeText={(text) =>
          setData({
            ...data,
            funcionario: text,
          })
        }
      />

      <Text
        style={{
          fontSize: 16,
          marginBottom: 4,
          marginTop: 12,
          fontWeight: "600",
        }}
      >
        Tipo de Documento
      </Text>

      <Picker
        selectedValue={data.tipoDocumento}
        onValueChange={(value) =>
          setData({
            ...data,
            tipoDocumento: value,
          })
        }
      >
        <Picker.Item label="Advertência" value="ADVERTENCIA" />

        <Picker.Item label="Suspensão" value="SUSPENSAO" />
      </Picker>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 4,
          marginTop: 12,
          fontWeight: "600",
        }}
      >
        Número
      </Text>

      <Picker
        selectedValue={data.numeroAdvertencia}
        onValueChange={(value) =>
          setData({
            ...data,
            numeroAdvertencia: value,
          })
        }
      >
        <Picker.Item label="1ª" value={1} />

        <Picker.Item label="2ª" value={2} />

        <Picker.Item label="3ª" value={3} />
      </Picker>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 4,
          marginTop: 12,
          fontWeight: "600",
        }}
      >
        Observações
      </Text>

      <TextInput
        style={{ borderWidth: 1, borderRadius: 8, padding: 12, height: 120 }}
        multiline
        value={data.observacoes}
        onChangeText={(text) =>
          setData({
            ...data,
            observacoes: text,
          })
        }
      />
    </ScrollView>
  );
}
