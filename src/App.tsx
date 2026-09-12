import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { ITechnologyType } from "./types/TechnologyType";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const TechnologiesPromise = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = TechnologiesPromise();

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <Suspense fallback={<Loading />}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
