import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Row from "@/components/Row";
import { Movie } from "@/types/main";
import requests from "@/utils/requests";
import { useMemo } from "react";
import { modalState } from '@/atoms/ModalAtom';
import { useRecoilValue } from "recoil";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}
export default function Home({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) {
  const rows = useMemo(() => {
    return [
      { title: 'Trending now', movies: trendingNow },
      { title: 'Netflix Originals', movies: netflixOriginals },
      { title: 'Top Rated', movies: topRated },
      { title: 'Comedies', movies: comedyMovies },
      { title: 'Action movies', movies: actionMovies },
      { title: 'Scary movies', movies: horrorMovies },
      { title: 'Romence movies', movies: romanceMovies },
      { title: 'Documentaries', movies: documentaries },
    ];
  }, []);
  const showModal = useRecoilValue(modalState)
  
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      {true && <Modal />}
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          {rows.map((row, i) => (
            <Row key={row.title} title={row.title} movies={row.movies} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};

