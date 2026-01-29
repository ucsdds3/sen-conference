import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/sen_logo.png'

const Header = () => {
  return (
    <section>
        <div className='flex w-full h-[160px] bg-[#0D1626]'>
            <Image src={Logo} width={400} height={160} alt='SEN Logo' className='ml-[5%]'></Image>
            <div className='flex w-[858px] h-[160px] justify-between items-center text-white mr-[50px]'>
                <div>Home</div>
                <div>Schedule</div>
                <div>Speakers</div>
                <div>Partners</div>
                <div>FAQ</div>
                <div>Register</div>
            </div>
        </div>
    </section>
  )
}

export default Header
