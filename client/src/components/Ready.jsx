import React from 'react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
const Ready = () => {
    const { user } = useUser();
    const { openSignIn } = useClerk();
    return (
        <div>
            <div class="max-w-[90rem] py-2 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-[#4F46E5] to-[#312E81] rounded-2xl p-10 text-white">
                <div>
                    <h1
                        class="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
                        Ready to try-out this web-app?
                    </h1>
                    <p class="bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-lg">
                        Your next favourite tool is just one click away.
                    </p>
                </div>
                {
                    user ? <UserButton /> :
                        <button onClick={openSignIn} className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-4">
                            Get Started
                             </button>
                }
            </div>
            <br />
        </div>
    )
}

export default Ready
