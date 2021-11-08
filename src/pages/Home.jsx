import img from '../assets/parking.jpg';
import CardHome from '../components/CardHome';
import parkingD from '../assets/parkingHomeD.png';
import parkingS from '../assets/parkingHomeS.png';
import Footer from '../components/Footer';
import phoneImg from '../assets/phone.png';
import Search from '../components/Search';
import ModalNew from '../components/ModalNew';

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="mx-20 mt-16">
          <Search />
        </div>
        <div className="modal">
          <p>sqfsqf</p>
        </div>
        <div className="w-full absolute h-screen -z-1 top-0">
          <img src={img} alt="parking" />
          <div className="secondary__color visible md:invisible bg-secondary w-full h-screen">
            <div className="primary__color invisible md:visible bg-primary w-full h-screen" />
          </div>
          <Footer />
        </div>
        <div className="phone absolute">
          <img src={phoneImg} alt={phoneImg} />
        </div>
        <div className="modal__info ">
          <div className="visible md:invisible card__Home flex flex-wrap justify-center items-center inset-x-0 bottom-8 absolute">
            <CardHome name="Parking surveillé" parking={parkingS} />
          </div>
          <div className="visible md:invisible card__partage flex justify-center absolute w-full -bottom-48 shadow-2xl">
            <ModalNew
              imgClass="-my-6 absolute cursor-pointer"
              name="fdsdfsdfsf"
              names="qsdsds"
            />
            <div className="top-96 -my-5 absolute cursor-pointer bg">
              <ModalNew name="jhljhlhlhlhih" names="names" />
            </div>
            <CardHome name="Stationnement partagés" parking={parkingD} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
