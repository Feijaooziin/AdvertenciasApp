import { Pressable, Text, View } from "react-native";

interface Props {
  motivos: string[];
  selecionados: string[];
  onChange: (motivos: string[]) => void;
}

export function MotivosSelector({ motivos, selecionados, onChange }: Props) {
  const toggleMotivo = (motivo: string) => {
    const existe = selecionados.includes(motivo);

    if (existe) {
      onChange(selecionados.filter((item) => item !== motivo));
      return;
    }

    onChange([...selecionados, motivo]);
  };

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          marginBottom: 8,
        }}
      >
        Motivos
      </Text>

      {motivos.map((motivo) => {
        const ativo = selecionados.includes(motivo);

        return (
          <Pressable
            key={motivo}
            onPress={() => toggleMotivo(motivo)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                width: 22,
                height: 22,
                borderWidth: 1,
                borderRadius: 4,
                marginRight: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {ativo && (
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </Text>
              )}
            </View>

            <Text>{motivo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
