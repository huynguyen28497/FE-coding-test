import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useAuthProtect = () => {
  const { user, loadingAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loadingAuth) {
      router.push("/signIn");
    }
  });
};
