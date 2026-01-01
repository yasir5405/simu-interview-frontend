import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  return (
    <div className="w-full h-dvh p-5">
      <h1 className="text-3xl font-bold underline">Welcome {user?.name}</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
