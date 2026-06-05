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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Funcionário</Text>

      <TextInput
        style={styles.input}
        value={data.funcionario}
        onChangeText={(text) =>
          setData({
            ...data,
            funcionario: text,
          })
        }
      />

      <Text style={styles.label}>Tipo de Documento</Text>

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

      <Text style={styles.label}>Número</Text>

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

      <Text style={styles.label}>Observações</Text>

      <TextInput
        style={[styles.input, { height: 120 }]}
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  label: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 12,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
});
