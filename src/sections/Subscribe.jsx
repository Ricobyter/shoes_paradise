import Button from "../Components/Button";

const Subscribe = () => {
  return (
<section className="max-container max-lg:flex-col flex justify-between items-center gap-10" id="contact us">
<h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">Sign Up For
  <span className="text-coral-red"> Updates</span> & Newsletters
</h3>
<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
  <input type="text" placeholder="Subscribe to our website" className="input" />
  <div className="flex max-sm:justify-end items-center max-sm:w-full">
    <Button label="Sign Up"/>
  </div>
</div>
</section>
  )
}

export default Subscribe
