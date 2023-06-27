
import React from 'react'
import SideBar from '../navbar/sidebar'
import Typography from '../typography'

const LayOut = ({ children }) => {
    return (
        <div className='flex gap-10 '>
            <div className="basis-[20%] min-h-screen bg-black_100">
                <div className=' font-semibold text-white_300 pt-10 px-8'>
                    <Typography variant={"h3"} className={"text-[20px]"}>Hello Tokas,</Typography>
                    <div className=' text-[14px] text-white_100 mt-10'>Seller Panel</div>

                </div>
                <div className=' px-12 mt-10'>
                    <SideBar />
                </div>
            </div>
            <div className="basis-[80%] bg-black_100">
                {children}
            </div>

        </div>
    )
}

export default LayOut