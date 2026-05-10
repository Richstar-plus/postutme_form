import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function FormRootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <Outlet />
    </>
  );
}
