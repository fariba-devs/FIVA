import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiSignup } from "../../services/apiAuth.js";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: apiSignup,
    onSuccess: (data) => {
      // Cache رو invalidate کن تا user جدید رو بگیره
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      console.log("User registered:", data);
      toast.success("Account created successfully");
      navigate("/home", { replace: true }); //button back
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || "Signup failed");
    },
  });

  return { signup, isLoading };
}
