import { Dispatch, SetStateAction } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AdvertenciaData } from "../types/advertencia";
import { Input } from "./Input";

interface Props {
  data: AdvertenciaData;
  setData: Dispatch<SetStateAction<AdvertenciaData>>;
}

export function AdvertenciaForm({ data, setData }: Props) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Input
        label="Funcionário"
        value={data.funcionario}
        placeholder="Nome do colaborador"
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

      <Input
        label="Observações"
        value={data.observacoes}
        multiline
        placeholder="Observações adicionais"
        onChangeText={(text) =>
          setData({
            ...data,
            observacoes: text,
          })
        }
      />

      <Input
        label="Cidade"
        value={data.cidade}
        placeholder="Ex: Pinhais"
        onChangeText={(text) =>
          setData({
            ...data,
            cidade: text,
          })
        }
      />
    </ScrollView>
  );
}
