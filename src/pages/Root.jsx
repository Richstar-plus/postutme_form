import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div>
      <Header />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
