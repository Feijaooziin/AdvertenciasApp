import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Variant = "primary" | "danger";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: ReactNode;
  variant?: Variant;
}

export function Button({
  title,
  icon,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const isDanger = variant === "danger";

  return (
    <TouchableOpacity
      {...rest}
      style={[
        {
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 8,
          borderWidth: 1,
          borderColor: isDanger ? "#FCA5A5" : "#1D4ED8",
          backgroundColor: isDanger ? "#FEF2F2" : "#2563EB",
        },
        rest.style,
      ]}
    >
      {icon}

      <Text
        style={{
          color: isDanger ? "#B91C1C" : "#FFFFFF",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
