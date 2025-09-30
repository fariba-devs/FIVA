import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSignIn } from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: apiSignIn,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
      console.log("User signed in:", data);
      toast.success("Signed in successfully");
      navigate("/home", { replace: true }); //button back
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || "Sign in failed");
    },
  });

  return { signIn, isLoading };
}
