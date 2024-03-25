'use client'
import Image from "next/image";
import React from "react";
import LoginForm from "../components/form";

const LoginTemplate = () => {
    

  return (
    <main className="w-full bg-secondary">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center gap-8 px-24 py-10">
          <Image src="/logo.png" alt="logo" width={220} height={70} />
          <h2 className="text-2xl text-center font-semibold">
            Login to Bright Sky Cloud
          </h2>
          
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginTemplate;
