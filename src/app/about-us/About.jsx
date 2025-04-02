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
            <h2 className="text-4xl text-black font-semibold mb-4">About Us</h2>
            <div className="flex flex-col text-center mx-auto gap-4 bg-white p-4 px-8 rounded-2xl font-semibold text-[#000000]">
              <div>
                Welcome to Art and Soul Photography, where every moment tells a
                story, and every frame captures the essence of life’s beauty. We
                are a passionate team of visual storytellers dedicated to
                turning your memories into timeless art.
              </div>
              <div>
                With a blend of creativity and precision, we specialize in
                crafting stunning photography and films that evoke emotion and
                celebrate individuality. From intimate portraits to grand
                celebrations, our lens focuses on the soul of every moment,
                ensuring each shot is as unique as you are.
              </div>
              <div>
                Our work extends beyond capturing images – we create
                experiences. Whether it's a heartfelt wedding film, a vibrant
                family shoot, or a professional portrait, we pride ourselves on
                bringing warmth, professionalism, and artistry to every project.
              </div>
              <div>
                Explore our work on YouTube to see how we transform moments into
                masterpieces. Let’s create something extraordinary together!
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
