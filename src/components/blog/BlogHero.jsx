import React from "react";
import { Heading } from "../heading/Heading";
import Typography from "../typography";

const BlogHero = () => {
  const blogHeroImage = "/assests/bloghero.svg";

  return (
    <section className="py-20 overflow-hidden w-full bg-cover" style={{
      backgroundImage: `url(${blogHeroImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div className="relative flex flex-col justify-between h-full sm:mx-10 mx-4">
        <h1 className="font-bold italic leading-tight sm:text-[80px] text-[40px] text-white">
          No more <br />
          Speculations.
        </h1>
        <p  className="text-[#C3C3C3] sm:text-3xl mt-4">
          Amplify your music production game <br /> with Lowfied's blogs.
        </p>
    
      </div>
      
    </section>
    
  );
};

export default BlogHero;
