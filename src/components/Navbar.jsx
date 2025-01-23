'use client'

import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";


// const Navbar = () => {


const Navbar = () => {

    const pathName = usePathname();

    // const { isAuthenticated } = getKindeServerSession();
    const { isAuthenticated } = useKindeBrowserClient();
    // const user = await getUser();

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Profile",
            path: '/profile',
        },
    ]

    return (
        <div className='bg-gray-200 py-5 px-5 lg:px-0'>
            <nav className="flex flex-row justify-between items-center container mx-auto">
                <div className="">
                    <Link href={'/'} className="font-bold text-2xl md:text-3xl">Blog <span className='text-green-500'>Site</span></Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                    <ul className='flex flex-row gap-3 md:gap-8'>
                        {/* <li>
                            <Link
                                href={"/"}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                href={"/about"}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                            >Contact</Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                            >Login</Link>
                        </li> */}

                        {/* Nav Links */}
                        {
                            links?.map((link) =>
                                <li key={link.title}>
                                    <Link
                                        className={`${pathName === link.path ? ' font-bold border-2 bg-green-500 text-white border-green-500 px-3 py-1 rounded-md transition-all' : "font-bold"}`}
                                        href={link.path}
                                    >{link.title}</Link>
                                </li>)
                        }
                        {/* {
                            !user && <LoginLink>
                                <li>
                                    <button

                                    >Login</button>
                                </li>
                            </LoginLink>
                        } */}
                        {/* {
                            user && <RegisterLink>
                                <li>
                                    <button

                                    >Logout</button>
                                </li>
                            </RegisterLink>
                        } */}
                    </ul>

                    <div className="flex flex-row justify-start items-center gap-4">

                        {/* {!user ? <>
                            <LoginLink
                                postLoginRedirectURL="/profile"
                            >
                                <button className='border-2 border-blue-500 text-white font-bold bg-blue-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-blue-500 transition-all'>Login</button>
                            </LoginLink>
                            <RegisterLink
                                postLoginRedirectURL="/profile"
                            >
                                <button className='border-2 border-blue-500 text-white font-bold bg-blue-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-blue-500 transition-all'>Register</button>
                            </RegisterLink>
                        </> : <LogoutLink>
                            <button className='border-2 border-red-500 text-white font-bold bg-red-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-red-500 transition-all'>Logout</button>
                        </LogoutLink>} */}


                        {/* {(await isAuthenticated()) ? ( */}
                        {(isAuthenticated) ? (

                            <LogoutLink>
                                <button className='border-2 border-red-500 text-white font-bold bg-red-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-red-500 transition-all'>Logout</button>
                            </LogoutLink>) : <>
                            <LoginLink
                                postLoginRedirectURL="/profile"
                            >
                                <button className='border-2 border-blue-500 text-white font-bold bg-blue-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-blue-500 transition-all '>Login</button>
                            </LoginLink>
                            <RegisterLink
                                postLoginRedirectURL="/profile"
                            >
                                <button className='border-2 border-blue-500 text-white font-bold bg-blue-500 px-3 py-1 rounded-md hover:bg-transparent hover:text-blue-500 transition-all hidden md:block'>Register</button>
                            </RegisterLink>
                        </>}


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
