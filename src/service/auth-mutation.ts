"use server";

import { cookies } from "next/headers";

interface loginResponseT {
  accessToken: string;
  user: { email: string; name: string; id: number };
}

export const registerData = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:3000/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error("xatolik");
  }

  return data;
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:3000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });

  const data: loginResponseT = await res.json();

  if (!res.ok) {
    throw new Error("xatolik");
  }
  (await cookies()).set("token", data.accessToken);
  (await cookies()).set("user", JSON.stringify(data.user));
};
