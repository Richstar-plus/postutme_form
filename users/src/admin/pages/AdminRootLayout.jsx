import { Outlet } from "react-router-dom";

export function AdminRootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <Outlet />
    </>
  );
}
