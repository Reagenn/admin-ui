import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signmasuk";
import SignUpPage from "./pages/signdaftar";
import ErrorRoute from "./pages/errorRoute";
import ForgotpwPage from "./pages/forgotpw";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goal";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

// up
const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
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
    {
      path: "/forgotpw",
      element: <ForgotpwPage />,
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    {
      path: "/goal",
      element: (
        <RequireAuth>
          <GoalPage />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <ExpensesPage />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
