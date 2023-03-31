import React from "react";
import { useMediaQuery } from "react-responsive";

const Hero = ({ src = 'hero-light.png' }) => {
  return (
    <section className="hero mb-24 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <h1 className="text-center text-6xl md:text-left lg:text-8xl">
              <slot><span className="text-gradient">Team 404</span> Not Found</slot>
            </h1>
          </div>
          <img src={src} alt="" decoding="async" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
