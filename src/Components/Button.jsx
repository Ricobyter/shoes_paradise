const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
<button className={`flex justify-center items-center gap-2 px-7 text-white py-4 border font-montserrat text-lh leading-none bg-coral-red rounded-full border-coral-red `}>
    {label}
    {iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5 "/>}
</button>
  )
}

export default Button
