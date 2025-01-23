'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { ScaleLoader } from "react-spinners";

const Profile = () => {
  const { isLoading, isAuthenticated } = useKindeBrowserClient();

  if (isLoading) return <div className="flex flex-row justify-center items-center min-h-screen">
    <ScaleLoader color="#30bd05" />
  </div>

  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen">
      <div className=" py-10 flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-green-500">Welcome to the blog site!!</h1>
      </div>
      {/* <ProfileComponents /> */}
    </div>
  );
};

export default Profile;
