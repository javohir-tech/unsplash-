import { Form, Link, useActionData } from "react-router-dom";

//comonents
import { FormInput } from "../Components";

//icons
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../Hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let adminname = formData.get("adminname");
  let email = formData.get("email");
  let password = formData.get("password");
  let passwordrestart = formData.get("passwordrestart");
  return {
    adminname,
    email,
    password,
    passwordrestart,
  };
};


export default function Register() {

  const { singUpWithGoogle } = useRegister()
  

  return (
    <>
      <div className="flex h-screen w-full">
        <div className="hidden w-[40%] bg-[url(https://picsum.photos/900/1200)] bg-cover bg-center md:block"></div>
        <div className="fixed bg-black opacity-35 top-0 left-0 bottom-0 w-full md:hidden "></div>
        <div className="flex h-screen w-full items-center justify-center bg-[url(https://picsum.photos/900/1200)] md:w-[60%] md:bg-none">
          <div className="w-full max-w-96 px-3 z-30">
            <Form method="POST">
              <h1 className="text-center text-4xl font-medium">Register</h1>
              <div className="my-5 flex flex-col gap-5">
                <FormInput
                  placeholder="Full Name"
                  name="adminname"
                  type="text"
                />
                <FormInput placeholder="Email" name="email" type="email" />
                <FormInput
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <FormInput
                  placeholder="Password Restart"
                  name="passwordrestart"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm grow md:btn-md"
                >
                  Register
                </button>
                <button
                  onClick={singUpWithGoogle}
                  type="button"
                  className="btn btn-secondary btn-sm grow md:btn-md"
                >
                  <span>Google</span>
                  <FcGoogle className="h-4 w-4" />
                </button>
              </div>
              <div className="link link-secondary mt-3 text-center text-white md:text-secondary">
                <Link to="/login">You have a accaount ?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
