import Toast from "react-native-toast-message";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <>
      <Home />
      <Toast bottomOffset={80} topOffset={120} visibilityTime={3000} />
    </>
  );
}
