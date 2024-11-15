import React from 'react';

const ImageGrid = () => {
  const imageUrl =
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1e4a2f03-f9c4-4457-9f79-723e33ac4a7d/SUHA0838+2233.jpg';
  const images = Array(15).fill(imageUrl); // Create an array with 15 identical image URLs

  const ImageArray = [
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1e4a2f03-f9c4-4457-9f79-723e33ac4a7d/SUHA0838+2233.jpg',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/4a00dce3-bd1d-4d69-b5f5-1284090047eb/HB_22749+65.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/7f12f49f-5beb-40be-b559-d3c8bcb5dbce/AYUS5656+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/2759ceb3-a789-49bf-9721-62146f59143d/VKR62551-Edit+8878+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/3d043205-e2b0-463b-ab84-fd859165d0e8/Kiara+Advani+and+Sidharth+Malhotra+wedding+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/66ef1ca7-da97-490a-9afe-3f6b2fbc056c/Bridelan+Paris+-+Anamika+Knanna+Harper%27s+Bazaar+6+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/33dad4d2-60cc-4e25-a215-1bf8a33a7959/LONU2628+copy.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/060230ca-92ca-4998-b4c5-df9a9a7eaf9d/0H1A6527+copy+3.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/67baa040-63bf-4b7e-bfc0-a4662b919690/AYUS5834+Post+01.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/e958ce89-7e95-49fc-8526-677223bf5217/VKR69940+002.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/fa31f3fd-6e1d-4429-b8ba-bb377e2cbaea/002.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/f33c52ff-05b4-4cb2-b087-0f48f5fcbe88/Post%2B1.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/047e8e4c-6b7c-4010-9c1c-9daa679e5cf1/0H1A9717+%281%29.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/b3186deb-5416-4d14-bef0-8b0b787a6657/VKR60499.jpg?format=300w'
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5">
      {ImageArray.map((url, index) => (
        <div
          key={index}
          className="aspect-square w-full bg-gray-200 overflow-hidden"
        >
          <img
            src={url}
            alt={`Sample Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
