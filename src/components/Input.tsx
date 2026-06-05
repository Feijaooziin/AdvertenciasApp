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
    <View style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          marginBottom: 6,
        }}
      >
        {label}
      </Text>

      <TextInput
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 8,
          padding: 12,
          minHeight: multiline ? 100 : undefined,
          textAlignVertical: multiline ? "top" : "center",
        }}
      />
    </View>
  );
}
