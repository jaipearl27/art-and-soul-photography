import { Source } from '@mui/icons-material';
import React from 'react';

const VideoComponent = () => {
  return (
    <div>
   <div className="relative h-screen overflow-hidden">
  <video autoPlay muted loop className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0">
    <source src="https://videos.pexels.com/video-files/6929264/6929264-hd_1920_1080_30fps.mp4" type="video/mp4" />

  </video>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
    <h1 className="text-5xl font-bold mb-4">SOUL + CINEMA
 </h1>
    <p className="text-base px-36">     
      Every wedding is unique and so are our films. For past 8 years HOTC has set new benchmarks of of storytelling within wedding realm and beyond. We are fortunate to have experienced so unique cultures and traditions across 25 countries and to document stories that continuously overwhelm us. </p>
  </div>
</div>

<div className='flex flex-row px-20 gap-4 mt-10'>
  <video autoPlay muted loop className='w-1/2 h-1/2'>
    <source src='https://videos.pexels.com/video-files/8503120/8503120-sd_640_360_24fps.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <video autoPlay muted loop className='w-1/2 h-1/2'>
    <source src='https://videos.pexels.com/video-files/28940048/12524010_640_360_25fps.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className=' flex flex-row justify-center px-20  gap-8'>
  <div className='justify-center'>
    <h1 className='mt-10 font-bold'>Love In Second Innings</h1>
<p>
Second marriage, for many, is still a taboo. And this story illustrates why it’s not. It’s a treatise on how the past doesn’t come in the way of love and respect. It’s a heroic tale of victory over stereotypes and archaic customs. It’s a story of how love always triumphs in the end. Every moment that we spent with Deepal and Nishant convinced us that life can be made beautiful… that tears can be turned into a drizzle of hope; that fear can be turned into the excitement of exploring the unknown; that the end is but a new beginning.</p>
  </div>

  <div>
  <h1 className='mt-10 font-bold'>Twenty Years in the Making</h1>
<p>
This one is special, very special. Hiba and Akbar's story took us on a journey all the way from Hiba's childhood till their reception in Bhopal and on the way we discovered an all new perspective of filming a wedding. We knew from start that no matter how hard we try we can never justify this wedding in a 5 minute film, but we tried, tried for an year now and this is the best we could do. Its a film which is not just about a wedding, an India Pakistan story which is not about India or Pakistan. For us its much more than that. </p>
  </div>
</div>

    </div>
  );
};

export default VideoComponent;
