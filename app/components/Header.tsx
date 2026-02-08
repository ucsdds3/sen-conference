import Image from 'next/image'

export default function Header() {
  return (
    <section>
        <div className='flex w-full h-40 p-16 bg-[#0D1626]'>
            <img src="/sen-conference/assets/SEN_full_logo_light_text.png" alt='SEN Logo' className='h-full w-auto' />
            <div className='flex w-214.5 h-40 justify-between items-center font-bold text-white mr-12.5'>
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