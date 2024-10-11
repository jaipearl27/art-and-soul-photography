import { Hero } from "@/components/Hero";
import WeddingList from "@/components/WeddingList";

export default function Home() {
  return (
    <>
      <Hero
        img={
          "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1623453283834-GT9UR8BV9W7WXYQ4EPR6/V_KL9752.jpg?format=2500w"
        }
        
      />
      <WeddingList />
    </>
  );
}
