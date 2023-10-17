import { ReactNode } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Hero from 'components/Hero';
import Feature from 'components/Feature';
import { MdChevronRight, MdInfo } from 'react-icons/md/index';
import Footer from 'components/Footer';
import { useMediaQuery } from 'react-responsive';

const Float = ({ dir = 'left', children }: { dir?: 'left' | 'right', children?: ReactNode }) => {
  const els = dir === 'left' ? [children, <div key="sep" className="w-full" />] : [<div key="sep" className="w-full" />, children];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {els}
    </div>
  );
};

const calculateStartEnd = (lg: boolean, start: number, end: number) => {
  if (lg) return { start, end };
  return { start: start + 0.5, end: end + 0.5 };
};

const HomeParallax = () => {
  const lg = useMediaQuery({ minWidth: 1024 });

  return (
    <Parallax pages={7}>
      <ParallaxLayer offset={0} speed={2.5}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={2} sticky={{ start: 0.9, end: lg ? 5 : 1.5 }}>
        <Float>
          <div className="flex flex-col justify-between items-center gap-8">
            <Feature icon={MdInfo} title="About Us">
                <a href="/about" className="flex items-center">
                  Learn more about our team and school
                  <MdChevronRight size={16} className="p-0 react-icon" />
                </a>
            </Feature>
            <img className="p-2" src="/hero.png" />
          </div>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} sticky={calculateStartEnd(lg, 1.5, 2)}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Our History">
            <a href="/about/history" className="flex items-center">
              How it all started, and where it&apos;s going.
              <MdChevronRight size={16} className="p-0 react-icon" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} sticky={calculateStartEnd(lg, 2.5, 3 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Meet The Team">
            <a href="/about/team" className="flex items-center">
              See who&apos;s behind the magic.
              <MdChevronRight size={16} className="p-0 react-icon" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1} sticky={calculateStartEnd(lg, 3.5, 4 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Meet our Safety Mascot">
            <a href="/about/safety-dale" className="flex items-center">
              Learn about Safety Dale and how we promote safety
              <MdChevronRight size={16} className="p-0 react-icon" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1} sticky={calculateStartEnd(lg, 4.5, 5 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="School">
            <a href="/about/school" className="flex items-center">
              Check out Appomattox Regional Governor&apos;s School
              <MdChevronRight size={16} className="p-0 react-icon" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={1.5} sticky={calculateStartEnd(lg, 6, 7)}>
        <form action="/newsletter-signup" className="p-6 w-full flex flex-col gap-5 items-center justify-start">
          <label className="text-3xl font-bold text-gradient" htmlFor="newsletter">Sign up for our Newsletter</label>
          <div className="flex w-1/2 flex-row gap-3 items-center justify-center">
            <input type="email" className="px-2 py-2 focus:outline-none w-full rounded-lg text-black focus:ring ring-offset-1 ring-red-700 dark:ring-violet-500" name="email" placeholder="Email" />
            <input className="button" type="submit" value="Sign Up" />
          </div>
        </form>
        <div className="h-full absolute bottom-0 top-[40%] left-0 right-0">
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomeParallax;
