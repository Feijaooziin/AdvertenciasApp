import { Dispatch, SetStateAction } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AdvertenciaData } from "../types/advertencia";
import { Input } from "./Input";
import { DateInput } from "./DateInput";
import { motivosAdvertencia } from "../data/motivos";
import { MotivosSelector } from "./MotivosSelector";

interface Props {
  data: AdvertenciaData;
  setData: Dispatch<SetStateAction<AdvertenciaData>>;
}

export function AdvertenciaForm({ data, setData }: Props) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginVertical: 36,
        }}
      >
        Advertências
      </Text>
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

      <DateInput
        label="Data de Admissão"
        value={data.admissao}
        onChange={(date) =>
          setData({
            ...data,
            admissao: date,
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

      <MotivosSelector
        motivos={motivosAdvertencia}
        selecionados={data.motivos}
        onChange={(motivos) =>
          setData({
            ...data,
            motivos,
          })
        }
      />

      <DateInput
        label="Data do Ocorrido"
        value={data.dataOcorrido}
        onChange={(date) =>
          setData({
            ...data,
            dataOcorrido: date,
          })
        }
      />

      <DateInput
        label="Data da Assinatura"
        value={data.dataAssinatura}
        onChange={(date) =>
          setData({
            ...data,
            dataAssinatura: date,
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

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Motivos selecionados:
      </Text>

      <Text>{data.motivos.join(", ")}</Text>
    </ScrollView>
  );
}
