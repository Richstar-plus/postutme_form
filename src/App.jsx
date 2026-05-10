import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import HomePage from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/post-utme",
        element: <FormPage />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
