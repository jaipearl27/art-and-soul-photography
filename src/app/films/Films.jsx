import { BlogCard } from "@/components/BlogCard";
import React from "react";

const Films = () => {
  return (
    <div className="pt-[150px] space-y-10">
      <div className="text-4xl text-center">Films</div>
      <div className="mx-auto w-[90%] shadow bg-white rounded-3xl p-14 grid grid-cols-3 gap-10">
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1707251420757-D4Y8RNWOF6B32Z9EHAHQ/ZAFA2077+009.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1728309731397-7SX5RFVHER5BFEH3P790/LONA2136+9090.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1693727025026-JEYC1JUDF20NITOLKEY9/VKR50027-2-2.jpg?format=500w"
          }
          film={true}
        />

        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1707251420757-D4Y8RNWOF6B32Z9EHAHQ/ZAFA2077+009.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1728309731397-7SX5RFVHER5BFEH3P790/LONA2136+9090.jpg?format=500w"
          }
          film={true}
        />
        <BlogCard
          img={
            "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1693727025026-JEYC1JUDF20NITOLKEY9/VKR50027-2-2.jpg?format=500w"
          }
          film={true}
        />
      </div>
    </div>
  );
};

export default Films;
