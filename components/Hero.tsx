import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';
import Socials from './Socials';
import DevImage from './DevImage';
import Badge from './Badge';
import HeroButtons from './HeroButtons';
const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='mx-auto container'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <p className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Developer
            </p>
            <h1 className='text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4'>
              Hello, my name is Abdullah Alojado
            </h1>
            <p className='text-muted-foreground text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0'>
              Here is a brief description of my journey to technology, as well
              as insights about myself and what I engage in professionally.
            </p>
            <HeroButtons />
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 transition capitalize'
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          <div className='hidden xl:flex relative'>
            <Badge />
            <div
              className='
              bg-hero_shape_2_light
              dark:bg-hero_shape_2_dark
              w-[500px]
              h-[500px]
              bg-no-repeat
              absolute 
              top-1 
              right-2'
            >
              <DevImage />
            </div>
          </div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
