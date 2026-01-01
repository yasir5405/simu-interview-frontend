import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

function App() {
  return (
    <div className="w-full min-h-dvh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
