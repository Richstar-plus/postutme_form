import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import HomePage from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import ErrorPage from "./pages/ErrorPage";
import { FormRootLayout } from "./pages/FormRootLayout";
import { FirstSitting } from "./pages/FirstSitting";
import { PaymentPage } from "./pages/PaymentPage";
import { ReviewPage } from "./pages/ReviewPage";

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
        element: <FormRootLayout />,
        children: [
          {
            index: true,
            element: <FormPage />,
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
          {
            path: "review",
            element: <ReviewPage />,
          },
          {
            path: ":id",
            id: "first-sitting-id",
            element: <FirstSitting />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
