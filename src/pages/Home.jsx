import img from '../assets/parking.jpg';
import CardHome from '../components/CardHome';
import parkingD from '../assets/parkingHomeD.png';
import parkingS from '../assets/parkingHomeS.png';
import phoneImg from '../assets/sm.png';
import Search from '../components/Search';
import CardCity from '../components/CardCity';
import pardieu from '../assets/pardieu.jpeg';
import pardieu1 from '../assets/car.png';
// import ModalNew from '../components/ModalNew';
// import car from '../assets/car.svg';
// import car1 from '../assets/car.png';

function Home() {
  return (
    <>
      <div className="home flex flex-col">
        {/* Search Button */}
        <div className="mx-20 mt-16">
          <Search />
        </div>
        {/* Phone */}
        <div className="phone__container flex">
          <div className=" my-52 flex justify-end">
            <img className="phone" src={phoneImg} alt="Phone#" />
          </div>
        </div>
        {/* Picture card Parking */}
        <div className="w-full absolute h-screen -z-1 top-0">
          <img src={img} alt="parking" />
          <div className="secondary__color visible md:invisible bg-secondary w-full h-screen">
            <div className="primary__color invisible md:visible bg-primary w-full h-screen" />
          </div>
        </div>
        {/* Modal */}
        <div className="modal__info flex-1 flex ">
          <div className="visible md:invisible card__Home flex flex-wrap justify-center items-center inset-x-0 bottom-12 absolute">
            <CardHome name="Parking surveillé" parking={parkingS} />
          </div>
          <div className="visible md:invisible card__partage flex justify-center absolute w-full -bottom-72 shadow-2xl">
            <CardHome name="Stationnement partagés" parking={parkingD} />
          </div>
        </div>
        {/* CardCity */}
        <article className="">
          <div className="cardCity flex justify-around items-center flex-col lg:flex-row">
            <CardCity img={pardieu} nom="Lyon Part Dieu" />
            <CardCity img={pardieu1} nom="Lyon Part Dieu" />
            <CardCity img={pardieu} nom="Lyon Part Dieu" />
          </div>
        </article>
        {/* Footer */}
      </div>
    </>
  );
}

export default Home;
