import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/ToastConfig";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <>
      <Home />
      <Toast config={toastConfig} position="top" topOffset={115} />
    </>
  );
}
