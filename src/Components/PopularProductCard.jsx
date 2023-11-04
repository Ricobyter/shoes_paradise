import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
      <div className="mt-10 flex flex-col justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.8)</p>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">{price}</p>
      </div>
    </div>


  )
}

export default PopularProductCard
