import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const user = (await cookies()).get("token")?.value;
  return (
    <>
      <div className="bg-black py-[20px] text-white ">
        <div className="flex items-center justify-center gap-[30px] text-2xl">
          <div>
            {user ? (
              <Link href={"/profile"}>Profile</Link>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};
