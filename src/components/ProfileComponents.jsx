// 'use client'

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfileComponents = () => {

    // const { getUser } = getKindeServerSession();
    // const user = await getUser();

    return (
        <div>
            <h1>Welcome to the Blog Site Website!!</h1>
            {/* {
                user && <>
                <p>{user.given_name}</p>
                <p>{user.family_name}</p>
                <p>{user.email}</p>

                </>
            } */}
        </div>
    )
}

export default ProfileComponents
