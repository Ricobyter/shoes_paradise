import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
          We provide you
        <span className="text-coral-red"> Super </span>
        <span className="text-coral-red"> Quality  </span>
        
        Shoes</h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus quas vitae repellat nostrum tempora perferendis sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, neque.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus quas vitae repellat nostrum tempora perferendis </p>
        <div className="mt-11"><Button label = "View Now" /></div>
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={525} className="object-contain "/>

      </div>
    </section>
  )
}

export default SuperQuality
