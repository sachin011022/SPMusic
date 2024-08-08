import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function FormCard() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-4 mt-6'>
        <h1 className='text-3xl font-semibold'>Hi! User</h1>
        <p>You not Login/signup </p>
        <div className=''>
          <div className='flex items-center gap-3 my-4'>
            <Link to={"/signup"}>
              <Button className='rounded-full bg-slate-600 p-6'>SignUp</Button>
            </Link>
            <Link to={"/sign-in"}>
              {" "}
              <Button className='rounded-full bg-slate-600 p-6'>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
