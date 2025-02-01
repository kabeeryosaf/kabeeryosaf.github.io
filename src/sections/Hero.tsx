import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image'
import { HeroOrbit } from '@/components/HeroOrbit'

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0' style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)' }}>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}
        ></div>
        <div className='hero-ring size-[680px]'></div>
        <div className='hero-ring size-[880px]'></div>
        <div className='hero-ring size-[1080px]'></div>
        <div className='hero-ring size-[1280px]'></div>
        <HeroOrbit size={840} rotation={-72}>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={20}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={610} rotation={98}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={-14}>
          <SparkleIcon className='size-6 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={480} rotation={79}>
          <SparkleIcon className='size-3 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={560} rotation={178}>
          <SparkleIcon className='size-8 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={740} rotation={144}>
          <SparkleIcon className='size-12 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={890} rotation={85}>
          <div className='size-2 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-41}>
          <div className='size-1 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
        <HeroOrbit size={690} rotation={-10}>
          <div className='size-2 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt='Memoji of a person on a computer'
            className='size-[100px]'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in trasnforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span className='font-semibold'>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
