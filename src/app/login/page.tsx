"use client";
import { loginUser } from "@/service/auth-mutation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
interface LoginDataType {
  email: string;
  password: string;
}
const Login = () => {
  const { reset, register, handleSubmit } = useForm<LoginDataType>();
  const [loading, setLoading] = React.useTransition();
  const router = useRouter();
  const submit = (data: LoginDataType) => {
    setLoading(async () => {
      await loginUser(data);
      reset();
      router.replace("/");
    });
  };
  return (
    <>
      <div className="container mt-[50px]">
        <form
          className="shadow-2xl bg-orange-300 p-[10px] rounded-lg  mx-auto w-[400px]"
          onSubmit={handleSubmit(submit)}
        >
          <div className="mb-[10px] text-2xl">
            <Link href={"/register"}>Register</Link>
          </div>
          <div className="w-[350px]">
            <input
            //   autoComplete="off"
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
              {loading ? "Loading..." : "send"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
