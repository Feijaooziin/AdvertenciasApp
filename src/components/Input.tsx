import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  onChangeText: (text: string) => void;
}

export function Input({
  label,
  value,
  placeholder,
  multiline,
  onChangeText,
}: InputProps) {
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
          color: "#334155",
          marginBottom: 6,
        }}
      >
        {label}
      </Text>

      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        multiline={multiline}
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 10,
          padding: 12,
          backgroundColor: "#FFFFFF",
          color: "#0F172A",
          minHeight: multiline ? 100 : undefined,
          textAlignVertical: multiline ? "top" : "center",
        }}
      />
    </View>
  );
}
