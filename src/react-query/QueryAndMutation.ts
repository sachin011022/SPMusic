import { fetchDataSearch, usefetchData } from "@/Api";

import { useMutation } from "@tanstack/react-query";

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
