import pardieu from '../assets/cardCity/pardieu.jpeg';
import perrache from '../assets/cardCity/perrache.jpg';
import aeroport from '../assets/cardCity/aeroport.jpg';
import CardCityMui from '../components/CardCityMui';
import Phone from '../components/Phone';
import test from '../assets/test.png';
import Header from '../components/Header';

function Home() {
  return (
    <div className="">
      <Header />
      <section
        className="section__phone border-t-4 border-white border-b-2 flex flex-col items-center pt-20 mx-auto"
        id="section"
      >
        <div className="text pb-4 text-center">
          <span className="text-white font-bold text-4xl md:text-7xl">
            CHERCHER UNE PLACE
          </span>
          <br />
          <br />
          <span className="text-red-600 font-bold text-2xl md:text-5xl">
            NA JAMAIS ETE AUSSI FACILE
          </span>
        </div>
        {/* Card */}
        <div className="test flex items-center justify-center w-full px-4 pb-20 pt-16">
          <img className="rounded-3xl shadow-2xl" src={test} alt="test" />
        </div>
        {/* smartPhone */}
        <div className="phone_home flex">
          <div className="phone pb-12 flex justify-start">
            <Phone />
          </div>
        </div>
        {/* CardCity */}
        <div className="card__city_Mui grid pb-20">
          <div className="cardCity grid grid-cols-1 gap-x-20 pb-14 md:grid-cols-3 gap-y-10">
            <CardCityMui img={pardieu} nom="Lyon Part Dieu" quantity="875" />
            <CardCityMui img={perrache} nom="Lyon Perrache" quantity="1300" />
            <CardCityMui
              img={aeroport}
              nom="Aeroport St Exupery"
              quantity="234"
            />
          </div>
        </div>
      </section>
      <main className="bg-secondary md:bg-primary"> </main>
    </div>
  );
}

export default Home;
