import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/sen_logo.png'

const Header = () => {
  return (
    <section>
        <div className='flex w-full h-[160px] bg-[#0D1626]'>
            <Image src={Logo} width={400} height={160} alt='SEN Logo' className='ml-[5%]'></Image>
            <div className='flex w-[858px] h-[160px] justify-between items-center font-bold text-white mr-[50px]'>
                <div>HOME</div>
                <div>SCHEDULE</div>
                <div>SPEAKERS</div>
                <div>PARTNERS</div>
                <div>FAQ</div>
                <div>REGISTER</div>
            </div>
        </div>
    </section>
  )
}

export default Header
