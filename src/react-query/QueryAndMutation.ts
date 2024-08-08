import { fetchDataSearch, usefetchData } from "@/Api";
import { signInAccount, signUpUser } from "@/appwrite";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: { name: string; email: string; password: string }) =>
      signUpUser(user),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useFetchSearch = () => {
  return useMutation({
    mutationFn: ({ value }: { value: string }) => fetchDataSearch(value),
  });
};
export const useFetchSong = () => {
  return useMutation({
    mutationFn: ({ value, id }: { value: string; id: string }) =>
      usefetchData(value, id),
  });
};
