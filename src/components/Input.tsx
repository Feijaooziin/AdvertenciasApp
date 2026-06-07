import { Text, TextInput, View, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, multiline = false, ...rest }: InputProps) {
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
        {...rest}
        multiline={multiline}
        placeholderTextColor="#94A3B8"
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
