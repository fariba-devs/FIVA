import { apiSignOut } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: apiSignOut,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      // queryClient.removeQueries();
      navigate("/account", { replace: true });
    },
    onError: (error) => {
      console.log("Logout error:", error.message);
    },
  });
  return { logout, isLoading };
}
