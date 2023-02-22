import { type NextPage } from "next";
import SearchContainer from "../components/SearchContainer";

const Home: NextPage = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SearchContainer />
      </main>
    </>
  );
};

export default Home;
