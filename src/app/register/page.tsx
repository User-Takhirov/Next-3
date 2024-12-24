"use client";
import { registerData } from "@/service/auth-mutation";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";
interface LoginDataType {
  email: string;
  password: string;
  name: string;
}
const Register = () => {
  const [loading, setLoading] = React.useTransition();
  const { reset, register, handleSubmit } = useForm<LoginDataType>();
  const router = useRouter();
  const submit = (data: LoginDataType) => {
    setLoading(async () => {
      try {
        const res = await registerData(data);
        if (res) {
          router.push("/login");
        }
      } catch (error) {}
    });
    reset();
  };
  return (
    <>
      <div className="container mt-[50px]">
        <form
          className="shadow-2xl bg-orange-300 p-[30px] rounded-lg  mx-auto w-[400px]"
          onSubmit={handleSubmit(submit)}
        >
          <div className="w-[350px] mb-[10px]">
            <input
              className="bg-lime-300-300 p-[10px] placeholder:text-black w-full"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </div>

          <div className="w-[350px]">
            <input
            //   autoComplete="auto"
              className="bg-blue-300 p-[10px] placeholder:text-black w-full"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="mt-[10px] w-[350px] ">
            <input
              autoComplete="off"
              className="bg-red-300 p-[10px] placeholder:text-black w-full"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <div className="mt-[10px] text-right">
            <button className="p-[14px] bg-green-400">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
