import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <div className="w-full min-h-dvh">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/unauthorize" element={<Unauthorized />} />
      </Routes>
    </div>
  );
}

export default App;
