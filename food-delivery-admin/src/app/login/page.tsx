import LoginForm from "@/components/auth/login-form"

const Page = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="flex flex-col justify-center md:items-center px-3 sm:px-14 py-10 w-full md:w-fit rounded-md">
                <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 text-center tracking-wide mb-6 drop-shadow-sm">
                    🔐 Admin Login Panel
                </h1>

                <LoginForm />
                
            </div>
        </div>
    )
}

export default Page