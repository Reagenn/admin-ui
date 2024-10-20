import SignInPage from "./pages/signmasuk";
import SignUpPage from "./pages/signdaftar";
import ErrorRoute from "./pages/errorRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// up
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
