import { Dispatch, SetStateAction } from "react";
import { ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AdvertenciaData } from "../types/advertencia";
import { Input } from "./Input";
import { DateInput } from "./DateInput";
import { MotivosSelector } from "./MotivosSelector";
import { motivosAdvertencia } from "../data/motivos";

interface Props {
  data: AdvertenciaData;
  setData: Dispatch<SetStateAction<AdvertenciaData>>;
}

export function AdvertenciaForm({ data, setData }: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Input
        label="Funcionário"
        value={data.funcionario}
        placeholder="Nome completo do funcionário"
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
          fontSize: 14,
          fontWeight: "600",
          color: "#334155",
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        Tipo de Documento
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
        }}
      >
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
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#334155",
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        Número da Medida
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Picker
          selectedValue={data.numeroAdvertencia}
          onValueChange={(value) =>
            setData({
              ...data,
              numeroAdvertencia: value,
            })
          }
        >
          <Picker.Item label="1ª Advertência" value={1} />

          <Picker.Item label="2ª Advertência" value={2} />

          <Picker.Item label="3ª Advertência" value={3} />
        </Picker>
      </View>

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

      <Input
        label="Observações"
        value={data.observacoes}
        placeholder="Informações adicionais (opcional)"
        multiline
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
        placeholder="Cidade da assinatura"
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
