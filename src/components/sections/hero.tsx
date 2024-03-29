import Image from 'next/image';
import { MapPin } from 'lucide-react';

import OmHeadShot from '/public/images/logos/om-front-pic.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
const HeroSection = () => {
  
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            
            <Image
            unoptimized={true}
              src={OmHeadShot}
              alt="Headshot of Om"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Om{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              Hello, I&apos;m Om, a Full Stack DevOps Engineer with 2 years of experience in the dynamic intersection of web development and DevOps.
               Proficient in ( <span className=" font-semibold">VueJs+Vanilla Javascript+NodeJs+AWS</span> ) I specialize in creating captivating and efficient web applications.
               My expertise extends to crafting seamless user interfaces using plain and Tailwind CSS.
                With a commitment to enhancing development processes, I bring a passion for DevOps practices and workflow optimization to every project. 
                Excited to contribute my skills and drive for innovation to new endeavors in the ever-evolving landscape of technology.
            </Typography>
          </div>
          <div>
          <Typography className='text-[19px] font-medium'> Visit <a href="https://blog.omahir.com" target="_blank" className=' text-indigo-500 hover:underline'> My Blogs </a> to learn DevOps, AWS, and Vue.js. </Typography>

          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Pune, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
