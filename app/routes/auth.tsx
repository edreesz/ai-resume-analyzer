import { useNavigate } from "react-router";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Authentication page' },
])

const Auth = () => {
    const navigate = useNavigate();

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Authentication Required</h1>
                        <h2>Please configure authentication to continue</h2>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth
