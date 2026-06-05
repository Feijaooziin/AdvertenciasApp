import { Document, Page, Text, View } from "@react-pdf/renderer";
import { AdvertenciaData } from "../types/advertencia";

interface Props {
  data: AdvertenciaData;
}

export function AdvertenciaPDF({ data }: Props) {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 20,
        }}
      >
        <View>
          <Text>Documento de Teste</Text>
          <Text>Funcionário: {data.funcionario}</Text>
          <Text>Tipo: {data.tipoDocumento}</Text>
          <Text>Número: {data.numeroAdvertencia}</Text>
          <Text>Motivos:</Text>
          {data.motivos.map((motivo) => (
            <Text key={motivo}>• {motivo}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
