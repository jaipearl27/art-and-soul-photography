import Image from "next/image";
import { useRouter } from "next/navigation";

export const BlogCard = ({ img, film = false, item }) => {
  const router = useRouter();
  return (
    <div
    onClick={ () => router.push(`/photography/${item._id}`) }
    className=" p-4 cursor-pointer flex flex-col  space-y-4">
      {/* Image Section */}
      <div className="relative w-full">
        <Image
          src={img || "/placeholder.jpg"} // Fallback image
          height={400}
          width={400} // Adjusts based on container
          alt={item?.name || "Blog image"} // Meaningful alt text
          className={`${
            film ? "h-[250px]" : "h-[400px]"
          } object-cover w-full aspect-video`}
        />
      </div>

      {/* Content Section */}
      <div className="leading-tight space-y-2 px-4">
        {/* Title */}
        <div className="text-lg font-bold text-gray-800">
          {item?.name || "Default Title"}
        </div>

        {/* Description */}
        <div className="text-sm font-medium text-gray-600 line-clamp-3 lg:line-clamp-3">
          {item?.description ||
            "This is a sample description used as a placeholder to illustrate where the actual description text will appear."}
        </div>


        {/* Type/Category */}
        <div className="text-xs font-semibold uppercase text-gray-500 mt-4 tracking-wide">
          {item?.type || "INTERNATIONAL"}
        </div>
      </div>
    </div>
  );
};
