import { ctaData } from '@/libs/HomeData'
import Image from 'next/image'

const CTASection = () => {
    // const {isMobile} = Mobile()
  return (
    <div className='xl:px-40 lg:px-20 md:px-8 px-5 mt-20'>
        <div className='space-y-3 text-center mx-auto max-w-xl'>
            <h1 className='font-bold text-3xl'>{ctaData.heading}</h1>
            <p className='text-gray-400 pb-8'>{ctaData.body}</p>
            <div className='border-gray-200 border flex justify-between space-x-2 md:max-w-md w-full mx-auto items-center'>
                <input type="text" placeholder='Enter your email' className='bg-transparent px-3 outline-none'/>
                <button className='bg-blue text-white px-6 py-3 rounded-md'>Get Started</button>
            </div>
        </div>
        {/* bg cta */}
        <div className='mt-5'>
            <Image src={require(`@/assets/images/${ctaData.bg_section}`)} alt='bg-cta-section' />
        </div>
    </div>
  )
}

export default CTASection