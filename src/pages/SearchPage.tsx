import Footer from "@/components/Footer";
import { z } from "zod";

const formSchema = z.object({
  search: z.string().min(4).max(50),
});
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Card from "@/components/Card";
import { useState } from "react";
import { useFetchSearch } from "@/react-query/QueryAndMutation";

function SearchPage() {
  const [searchData, setSearchData] = useState<any[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const { mutateAsync: fetchData, isPending: searchPending } = useFetchSearch();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const searchResult = await fetchData({ value: values.search });
    // setSearchData(data.data || []);

    setSearchData(searchResult.data);
  }
  return (
    <div className=' bg-black  w-full h-full'>
      <div className='h-[73vh] lg:h-[73vh] w-full rounded-lg'>
        <main className='bg-[#1d1d1d] h-full rounded-lg overflow-hidden mt-2 over'>
          <div className='flex flex-col w-full p-5'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=' w-full gap-6  '
              >
                <FormField
                  control={form.control}
                  name='search'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Search your favorite song.</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Search...'
                          className='bg-gray-800 text-white'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' className='mt-4'>
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          <Card
            searchValue={searchData.length > 0 ? searchData : []}
            isLoading={searchPending}
          />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default SearchPage;
