import { ChevronLeft } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";


interface Inputs {
    email: string,
    username: string,
    password: string

}


export function Authentication() {
    const { handleSubmit, register } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className=" flex justify-center items-center h-screen   " >
                <div className="min-h-[30rem] min-w-[30rem] bg-gray-200 py-4 px-4 " >
                    <div className="flex cursor-pointer items-center ">
                        <ChevronLeft className="stroke-blue-950" />
                        <span className="text-blue-950 text-sm " >Back to home</span>
                    </div>
                    <div className="flex flex-col gap-12 mt-4 ">
                        <div className="flex flex-col items-center" >
                            <h1 className="text-3xl text-blue-950 ">Create Account</h1>
                            <p className="text-sm text-center text-neutral-500 ">Enter your username, email and password to create your account</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}