import { createContext, useContext, useEffect, useState } from "react";
import { getMe, type MeSuccessResponse } from "@/api/auth.api";
import { toast } from "sonner";

type AuthContextType = {
  user: MeSuccessResponse["user"] | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<MeSuccessResponse["user"] | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const res = await getMe();

    if (res.success) {
      setUser(res.user);
    } else {
      setUser(null);
      localStorage.removeItem("token");
      toast.error(res.message ?? "Session Expired");
    }
  };
  useEffect(() => {
    (async () => {
      await refreshUser();
      setLoading(false);
    })();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
