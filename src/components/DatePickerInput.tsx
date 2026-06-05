import { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerInputProps {
  label: string;
  value?: Date;
  onChange: (date: Date) => void;
}

export function DatePickerInput({
  label,
  value,
  onChange,
}: DatePickerInputProps) {
  const [show, setShow] = useState(false);

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

      <Pressable
        onPress={() => setShow(true)}
        style={{
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 10,
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}
      >
        <Text
          style={{
            color: value ? "#0F172A" : "#94A3B8",
          }}
        >
          {value ? value.toLocaleDateString("pt-BR") : "Selecione uma data"}
        </Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={value ?? new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onValueChange={(selectedDate) => {
            setShow(false);

            if (selectedDate) {
              onChange(selectedDate);
            }
          }}
          onDismiss={() => {
            setShow(false);
          }}
        />
      )}
    </View>
  );
}
