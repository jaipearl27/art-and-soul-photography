"use client";

import Hero from "@/components/Homepage/Hero";

const About = () => {
  return (
    <div>
      <Hero
        img="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/02990e87-8328-4560-be34-99aac32df6ec/VKR65165.jpg"
        customClass="!h-[500px] object-cover"
      />
      <div className="pt-10 leading-relaxed tracking-wide flex flex-colmx-auto">
        <main className="flex-grow container mx-auto px-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-black font-semibold mb-4">
              About Us
            </h2>
            <div className="flex  text-center mx-auto">

            Welcome to Art and Soul – where every click tells a story!

We are passionate about capturing life’s most precious moments and turning them into everlasting memories. With a team of professional photographers, innovative thinkers, and creative minds, we specialize in delivering stunning visuals that speak volumes. From weddings to corporate events, fashion shoots to family portraits, our mission is to document your unique journey with style and elegance.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
