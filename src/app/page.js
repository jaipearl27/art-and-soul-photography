import Hero from "@/components/Homepage/Hero";
import WeddingList from "@/components/Homepage/WeddingList";
import ModernApproach from "@/components/Homepage/ModernApproach";
import VedioSection from "@/components/Homepage/VedioSection";
import ImageGrid from "@/components/Homepage/ImageGrid";

export default function Home() {
  return (
    <>
      <Hero
        img={
          "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1623453283834-GT9UR8BV9W7WXYQ4EPR6/V_KL9752.jpg?format=2500w"
        }
      />
      <WeddingList />
      <ModernApproach />
      <ImageGrid/>
      <VedioSection />


    </>
  );
}
