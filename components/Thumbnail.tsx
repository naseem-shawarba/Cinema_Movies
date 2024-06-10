import { modalState, movieState } from "@/atoms/ModalAtom";
import { Movie } from "@/types/main";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const setShowModal = useSetRecoilState(modalState)
  const setCurrentSelectedMovie = useSetRecoilState(movieState)
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    onClick={() => {
      setCurrentSelectedMovie(movie)
      setShowModal(true)
    }}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt={""}
      />
    </div>
  );
}

export default Thumbnail;
