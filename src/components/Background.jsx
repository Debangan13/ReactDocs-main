import React from 'react'

const Background = () => {
    return (
        <>
            <div className='w-full h-screen fixed z-[2]'>
                <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold'>document</div>
                <h1 className='absolute text-[13vw] leading-none tracking-tighter leading-none top-1/2 left-1/2 -translate-x-[50%] -translate-x-[50%] font-semibold'>Docs</h1>
            </div>
        </>


    )
}

export default Background
