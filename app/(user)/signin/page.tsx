"use client";

import {InputPassword, InputText} from "@/app/_comp/Input";
import {SubmitButton} from "@/app/_comp/Button";
import {useRouter} from "next/navigation";


const SignIn = () => {

    const router = useRouter();

    const handleSubmit = () => {
        router.push('/pass', { scroll: false })
    }

    return (
        <div
            className="sign-card flex flex-col justify-center w-full h-lvh"
        >
            <div
                className="signin-title flex justify-center align-middle w-full"
            >
                SignIn Page Title
            </div>
            <div
                className="signin-body flex flex-col justify-center w-full"
            >
                <InputText
                    placeholder="id"
                />
                <InputPassword
                    placeholder="password"
                />
                <div
                    className="flex justify-center w-full"
                >
                    <SubmitButton
                        label="Sign In"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
            <div
                className="signin-footer flex flex-col justify-center w-full"
            >

            </div>
        </div>
    )
}

export default SignIn;