import { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Platform, Pressable, Text, View } from "react-native";

interface DateInputProps {
  label: string;
  value?: Date;
  onChange: (date: Date) => void;
}

export function DateInput({ label, value, onChange }: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
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
          marginBottom: 6,
        }}
      >
        {label}
      </Text>

      <Pressable
        onPress={() => setShowPicker(true)}
        style={{
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 8,
          padding: 12,
        }}
      >
        <Text>
          {value ? value.toLocaleDateString("pt-BR") : "Selecione uma data"}
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}
