import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

interface Props {
  motivos: string[];
  selecionados: string[];
  onChange: (motivos: string[]) => void;
}

export function MotivosSelector({ motivos, selecionados, onChange }: Props) {
  function toggleMotivo(motivo: string) {
    const existe = selecionados.includes(motivo);

    onChange(
      existe
        ? selecionados.filter((item) => item !== motivo)
        : [...selecionados, motivo],
    );
  }

  function renderMotivo(motivo: string) {
    const isSelected = selecionados.includes(motivo);

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
            borderColor: isSelected ? COLORS.primary : "#CBD5E1",
            backgroundColor: isSelected ? COLORS.primary : "#CBD5E1",
          }}
        >
          {isSelected && (
            <Ionicons name="checkmark" size={16} color={"#FFFFFF"} />
          )}
        </View>

        <Text>{motivo}</Text>
      </Pressable>
    );
  }

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
        <Text
          style={{
            color: COLORS.danger,
          }}
        >
          {" *"}
        </Text>
      </Text>

      {motivos.map(renderMotivo)}
    </View>
  );
}
