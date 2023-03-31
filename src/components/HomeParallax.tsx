import React, { ReactNode } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "./Hero"
import Feature from "./Feature"
import { MdChevronRight, MdInfo } from "react-icons/md"
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";

const Float = ({ dir = 'left', children }: { dir?: 'left' | 'right', children?: ReactNode }) => {
  const els = dir === 'left' ? [children, <div className="w-full" />] : [<div className="w-full" />, children]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {els}
    </div>
  )
}

const calculateStartEnd = (lg: boolean, start: number, end: number) => {
  if (lg) return { start, end }
  return { start: start + 0.5, end: end + 0.5 }
}

const HomeParallax = () => {
  const lg = useMediaQuery({ minWidth: 1024 })
  const dark = useMediaQuery({ query: "(prefers-color-scheme: dark)" })
  return (
    <Parallax pages={6}>
      <ParallaxLayer offset={0} speed={1.5}>
        <Hero src={dark ? "hero-dark.png" : "hero-light.png"} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={2.5} sticky={{ start: 1, end: lg ? 5 : 1.5 }}>
        <Float>
          <Feature icon={MdInfo} title="About Us">
              <a href="/about" className="flex items-center">
                Learn more about our team and school
                <MdChevronRight size={16} className="p-0" />
              </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} sticky={calculateStartEnd(lg, 1.5, 2 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Our History">
            <a href="/about/history" className="flex items-center">
              How it all started, and where it&apos;s going.
              <MdChevronRight size={16} className="p-0" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} sticky={calculateStartEnd(lg, 2.5, 3 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Meet The Team">
            <a href="/about/team" className="flex items-center">
              See who&apos;s behind the magic.
              <MdChevronRight size={16} className="p-0" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} sticky={calculateStartEnd(lg, 3.5, 4 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="Safety... Dale?">
            <a href="/about/safety-dale" className="flex items-center">
              Learn about our beloved king and embodiment of safety
              <MdChevronRight size={16} className="p-0" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} sticky={calculateStartEnd(lg, 4.5, 5 )}>
        <Float dir="right">
          <Feature icon={MdInfo} title="School">
            <a href="/about/school" className="flex items-center">
              Check out Appomattox Regional Governor&apos;s School
              <MdChevronRight size={16} className="p-0" />
            </a>
          </Feature>
        </Float>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={1}>
        <div className="h-full absolute bottom-0 top-[59%] left-0 right-0">
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default HomeParallax;
