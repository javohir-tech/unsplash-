import { Form, Link } from "react-router-dom";

//comonents
import { FormInput } from "../Components";

//icons
import { FcGoogle } from "react-icons/fc";

import { useRegister } from "../Hooks/useRegister";

export default function Login() {
  const {singUpWithGoogle}= useRegister()
  return (
    <div className="flex h-screen w-full">
      <div className="hidden w-[40%] bg-[url(https://picsum.photos/seed/picsum/900/1200)] bg-cover bg-center md:block"></div>
      <div className="flex h-screen w-full items-center justify-center bg-[url(https://picsum.photos/seed/picsum/900/1200)] md:w-[60%] md:bg-none">
        <div className="w-full max-w-96 px-3">
          <Form method="POST">
            <h1 className="text-center text-4xl font-medium">Register</h1>
            <div className="my-5 flex flex-col gap-5">
              <FormInput placeholder="Email" name="email" type="email" />
              <FormInput
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <button type="submit" className="btn btn-primary btn-sm grow md:btn-md">
                Register
              </button>
              <button onClick={singUpWithGoogle} type="button" className="btn btn-secondary btn-sm grow md:btn-md">
                <span>Google</span>
                <FcGoogle className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center mt-3 link link-secondary text-white md:text-secondary">
              <Link to="/register">You have not accaount ?</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
