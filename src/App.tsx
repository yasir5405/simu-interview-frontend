import { Route, Routes } from "react-router-dom";
import { Home, Signup } from "./pages";

function App() {
  return (
    <div className="w-full min-h-dvh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
