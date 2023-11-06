import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import {offer} from "../assets/images"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"> 
    <div className="flex-1 ">
      <img src={offer} alt="image" height={690} width={780} className="object-contain w-full"/>
    
    
  </div>
  <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
          
        <span className="text-coral-red"> Special </span>
        Offers</h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus quas vitae repellat nostrum tempora perferendis sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, neque.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus quas vitae repellat nostrum tempora perferendis </p>
        <div className="mt-11 flex gap-4 flex-wrap"><Button label = "Shop Now" iconURL={arrowRight}/>
        <button className="flex justify-center items-center gap-2 px-7 text-coral-red py-4 border font-montserrat text-lh leading-none bg-white rounded-full border-coral-red ">Learn More</button></div>
        
      </div>
  </section>
   
  )
}

export default SpecialOffer
