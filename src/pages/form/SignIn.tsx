import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import SongContext from "@/context/SongContext";
import { useToast } from "@/components/ui/use-toast";
import { useSignInAccount } from "@/react-query/QueryAndMutation";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function SignIn() {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error(
      "MusicPlayerComponent must be used within a MusicPlayerProvider"
    );
  }

  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutateAsync: signIn, isPending: isSignInAccount } =
    useSignInAccount();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const getuser = await signIn({
      email: values.email,
      password: values.password,
    });

    if (!getuser) {
      toast({ title: "Sign in failed. Please try again." });

      return;
    }

    if (!getuser) {
      toast({ title: "Something went wrong. Please login your new account" });

      navigate("/sign-in");

      return;
    }

    if (getuser) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again." });

      return;
    }
  }
  return (
    <div className='w-full h-full  flex items-center justify-center over'>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <img src={logo} alt='logo' className='w-[20vw] h-40' />

          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Welcome Back</h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>
            To use SP Music, Please enter your details
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-5 w-full mt-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='text' className='p-4 bg-gray-900' {...field} />
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
              disabled={form.formState.isSubmitting || isSignInAccount}
            >
              {isSignInAccount ? (
                <div className='flex items-center gap-2'>
                  <Loader className='animate-spin' /> Loading...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>

            <p className='text-small-regular text-light-2 text-center mt-2'>
              Already have an account?
              <Link
                to='/signup'
                className='text-primary-500 text-small-semibold ml-1'
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
