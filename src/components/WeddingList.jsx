"use client";

import { PhotoCard } from "./PhotoCard";

const WeddingList = () => {
  return (
    <>
      <div className="px-5 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-1">
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1707251420757-D4Y8RNWOF6B32Z9EHAHQ/ZAFA2077+009.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1728309731397-7SX5RFVHER5BFEH3P790/LONA2136+9090.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1693727025026-JEYC1JUDF20NITOLKEY9/VKR50027-2-2.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1707251420757-D4Y8RNWOF6B32Z9EHAHQ/ZAFA2077+009.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1728309731397-7SX5RFVHER5BFEH3P790/LONA2136+9090.jpg?format=500w"
            }
          />
          <PhotoCard
            img={
              "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1693727025026-JEYC1JUDF20NITOLKEY9/VKR50027-2-2.jpg?format=500w"
            }
          />
        </div>
      </div>
    </>
  );
};

export default WeddingList;
