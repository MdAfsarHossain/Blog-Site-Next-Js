'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { MdOutlineMarkEmailRead, MdPeopleAlt } from "react-icons/md";
import { ScaleLoader } from "react-spinners";

const Profile = () => {
  const { isLoading, isAuthenticated, user } = useKindeBrowserClient();
  // const user = await getUser();

  if (isLoading) return <div className="flex flex-row justify-center items-center min-h-screen">
    <ScaleLoader color="#30bd05" />
  </div>

  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen px-5 lg:px-0">
      <div className="py-10 flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-green-500">Welcome to the blog site!!</h1>
      </div>
      {/* <ProfileComponents /> */}

      <div className="p-8 flex flex-col justify-center items-start lg:items-start gap-3 border-2 shadow-xl  lg:w-[650px] mx-auto rounded-lg border-green-400">
        {/* User name */}
        <div className="flex flex-row justify-start items-center gap-5">
          <p><MdPeopleAlt className="text-5xl" /></p>
          <p className="text-xl lg:text-4xl">: {user.given_name} {user.family_name}</p>
        </div>

        {/* Email */}
        <div className="flex flex-row justify-start items-center gap-5">
          <p><MdOutlineMarkEmailRead className="text-5xl" /></p>
          <p className="text-xl lg:text-4xl">: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
