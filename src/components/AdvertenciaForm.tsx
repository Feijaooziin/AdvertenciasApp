import { Dispatch, SetStateAction } from "react";
import { ScrollView } from "react-native";

import { AdvertenciaData } from "../types/advertencia";
import { Input } from "./Input";
import { MotivosSelector } from "./MotivosSelector";
import { motivosAdvertencia } from "../data/motivos";
import { PickerInput } from "./PickerInput";
import { DatePickerInput } from "./DatePickerInput";

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

      <DatePickerInput
        label="Data de Admissão"
        value={data.admissao}
        onChange={(admissao) =>
          setData({
            ...data,
            admissao,
          })
        }
      />

      <PickerInput
        label="Tipo de Documento"
        value={data.tipoDocumento}
        options={[
          {
            label: "Advertência",
            value: "ADVERTENCIA",
          },
          {
            label: "Suspensão",
            value: "SUSPENSAO",
          },
        ]}
        onValueChange={(tipoDocumento) =>
          setData({
            ...data,
            tipoDocumento,
          })
        }
      />

      <PickerInput
        label="Número"
        value={data.numeroAdvertencia}
        options={[
          {
            label: "1ª Advertência",
            value: 1,
          },
          {
            label: "2ª Advertência",
            value: 2,
          },
          {
            label: "3ª Advertência",
            value: 3,
          },
        ]}
        onValueChange={(numeroAdvertencia) =>
          setData({
            ...data,
            numeroAdvertencia,
          })
        }
      />

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

      <DatePickerInput
        label="Data do Ocorrido"
        value={data.dataOcorrido}
        onChange={(date) =>
          setData({
            ...data,
            dataOcorrido: date,
          })
        }
      />

      <DatePickerInput
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
