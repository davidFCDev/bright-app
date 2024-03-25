import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/volunteer/dashboard");
  };

  return (
    <form className="flex flex-col gap-6 justify-center items-start w-80 text-sm">
      <button className="flex justify-center items-center gap-2 border border-neutral-500 rounded-md w-full py-3 hover:shadow-sm hover:shadow-neutral-400">
        <Image src="/google-icon.png" alt="google" width={20} height={20} />
        <span className="font-semibold">Sign in with Google</span>
      </button>
      <hr className="border border-neutral-200 w-full" />
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="email" className="font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-neutral-100 border border-neutral-300 w-full p-3 outline-none focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="password" className="font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-neutral-100 border border-neutral-300 w-full p-3 outline-none focus:outline-none"
        />
      </div>
      <div className="flex w-full justify-end">
        <a href="#" className="text-xs font-semibold hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        onClick={handleLogin}
        className="bg-primary text-white w-full py-2 hover:bg-secondary transform transition-all ease-in-out"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
