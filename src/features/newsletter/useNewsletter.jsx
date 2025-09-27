import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewsletter } from "../../services/apiNewsletter.js";
import toast from "react-hot-toast";

export function useNewsletter() {
  const queryClient = useQueryClient();

  const { mutate: newsletter, isPending: isLoading } = useMutation({
    mutationFn: addNewsletter, // ایمیل را دریافت می‌کنیم
    onSuccess: () => {
      toast.success("Thanks for subscribing!");
      queryClient.invalidateQueries({
        queryKey: ["newsletter"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { newsletter, isLoading };
}
