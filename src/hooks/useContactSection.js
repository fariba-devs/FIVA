import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addContactsectoion } from "../services/apiContactSection.js";

export function useContactSection() {
  const queryClient = useQueryClient();

  const { mutate: Contact, isPending: isLoading } = useMutation({
    mutationFn: addContactsectoion, // اطلاعات کاربر را دریافت می‌کنیم
    onSuccess: () => {
      toast.success("Thanks for contacting us!");
      queryClient.invalidateQueries({
        queryKey: ["Contact"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { Contact, isLoading };
}
