import { View, Text } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

import { COLORS } from "../constants/colors";

export const toastConfig = {
  success: ({ text1, text2 }: BaseToastProps) => (
    <View
      style={{
        width: "90%",
        backgroundColor: `${COLORS.primary}DD`,
        borderRadius: 12,
        padding: 16,
        borderLeftWidth: 5,
        borderLeftColor: "#22C55EDD",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: "700",
        }}
      >
        {text1}
      </Text>

      {!!text2 && (
        <Text
          style={{
            color: "#E2E8F0",
            fontSize: 16,
            marginTop: 4,
          }}
        >
          {text2}
        </Text>
      )}
    </View>
  ),

  error: ({ text1, text2 }: BaseToastProps) => (
    <View
      style={{
        width: "90%",
        backgroundColor: `${COLORS.primary}DD`,
        borderRadius: 12,
        padding: 16,
        borderLeftWidth: 5,
        borderLeftColor: `${COLORS.danger}DD`,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: "700",
        }}
      >
        {text1}
      </Text>

      {!!text2 && (
        <Text
          style={{
            color: "#E2E8F0",
            fontSize: 16,
            marginTop: 4,
          }}
        >
          {text2}
        </Text>
      )}
    </View>
  ),
};
