import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface PickerOption<T = string> {
  label: string;
  value: T;
}

interface PickerInputProps<T = string> {
  label: string;
  value: T;
  options: PickerOption<T>[];
  onValueChange: (value: T) => void;
}

export function PickerInput<T extends string | number>({
  label,
  value,
  options,
  onValueChange,
}: PickerInputProps<T>) {
  function handleValueChange(itemValue: unknown) {
    onValueChange(itemValue as T);
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
          color: "#334155",
          marginBottom: 6,
        }}
      >
        {label}
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
          selectedValue={value}
          dropdownIconColor="#64748B"
          style={{
            color: "#0F172A",
            backgroundColor: "#FFFFFF",
          }}
          onValueChange={handleValueChange}
        >
          {options.map(({ label, value }) => (
            <Picker.Item key={String(value)} label={label} value={value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
