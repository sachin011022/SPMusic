import { boolean, string, z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInAccount } from "../../appwrite";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader } from "lucide-react";
import logo from "../../assets/logo.png";
import { useCreateUserAccount } from "@/react-query/QueryAndMutation";
import { useToast } from "@/components/ui/use-toast";
import SongContext from "@/context/SongContext";
import { useContext } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function SignUp() {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error(
      "MusicPlayerComponent must be used within a MusicPlayerProvider"
    );
  }

  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const newUser = await createUserAccount(values);

      if (!newUser) {
        toast({ title: "Sign up failed. Please try again." });

        return;
      }

      const session = await signInAccount({
        email: values.email,
        password: values.password,
      });

      if (!session) {
        toast({ title: "Something went wrong. Please login your new account" });

        navigate("/sign-in");

        return;
      }

      if (session) {
        form.reset();

        navigate("/");
      } else {
        toast({ title: "Login failed. Please try again." });

        return;
      }
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className=' bg-black  w-full h-full'>
      <div className='h-[73vh] lg:h-[73vh] w-full rounded-lg'>
        <main className=' h-full rounded-lg overflow-hidden mt-2 over'>
          <div className='w-full h-full over bg- flex items-center justify-center'>
            <Form {...form}>
              <div className='sm:w-420 flex-center flex-col'>
                <img src={logo} alt='logo' className='w-[20vw] h-40' />

                <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>
                  Create a new account
                </h2>
                <p className='text-light-3 small-medium md:base-regular mt-2'>
                  To use SP Music, Please enter your details
                </p>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex flex-col gap-5 w-full mt-4'
                >
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            className='p-4 bg-gray-900'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            className='p-4 bg-gray-900'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            className='p-4 bg-gray-900'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='bg-green-500'
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={isCreatingAccount}
                  >
                    {isCreatingAccount ? (
                      <div className='flex gap-2'>
                        <Loader className='animate-spin' /> Loading...
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>

                  <p className='text-small-regular text-light-2 text-center mt-2'>
                    Already have an account?
                    <Link
                      to='/sign-in'
                      className='text-primary-500 text-small-semibold ml-1'
                    >
                      Log in
                    </Link>
                  </p>
                </form>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
