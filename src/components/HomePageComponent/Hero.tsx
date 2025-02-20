
import { Link } from 'react-router-dom'
import Button from '../Button'
import hero3 from '../../assets/hero3.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero1 from '../../assets/hero1.jpg'

const Hero = () => {
  return (
    <>
      <div className="bg-neutral pt-8"> 
        <div className="grid md:grid-cols-2 md:gap-0 gap-3 py-18 container mx-auto max-w-6xl h-full place-content-center md:px-0 px-3">
          <div className="content flex flex-col gap-3 items-start justify-center">
            <p className="m-0 p-0 font-semibold italic text-primary">Explore the world ✨</p>
            <h4 className="text-neutral1 m-0 p-0 md:text-5xl text-3xl font-bold">
              It's a Big World Out There, Go Explore.
            </h4>
            <p>Discover new destinations, plan unforgettable journeys, and make every adventure count.</p>
            <Link to={"/login"}>
              <Button text="Go Explore" />
            </Link>
          </div>
          <div className="flex flex-row  gap-5 ">
            <div className="image1">
              <img src={hero3} className="h-96 rounded-2xl transition-transform duration-300 hover:scale-105 object-cover" alt="" />
            </div>
            <div className="image2 flex flex-col gap-3">
              <img src={hero1} className="h-44 transition-transform duration-300 hover:scale-105 rounded-2xl object-cover" alt="" />
              <img src={hero2} className="h-48 transition-transform duration-300 hover:scale-105 rounded-2xl object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


