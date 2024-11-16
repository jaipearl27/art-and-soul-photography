import Image from "next/image";
import { useRouter } from "next/navigation";

const FilmCard = ({ film }) => {
    const router = useRouter();
  return (
    <div
    onClick={ () => router.push(`/films/${film._id}`)}
    className="flex flex-col cursor-pointer items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="w-full h-[150px]  sm:h-[200px] relative">
        <Image
          src={film.thumbnail}
          alt={film.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Film Details */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold truncate">{film.name}</h3>
        <p className="text-sm text-gray-800 line-clamp-2">{film.description}</p>
      </div>
    </div>
  );
};

export default FilmCard;
