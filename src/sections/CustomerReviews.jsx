import ReviewCard from "../Components/ReviewCard"
import {reviews} from "../constants"
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold ">
          What Our 
          <span className="text-coral-red"> Customers </span>
          Say ?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum quasi,</p>
      </div>
      <div className="justify-evenly items-center mt-24 flex flex-1  max-lg:flex-col gap-14 ">
        {reviews.map((review)=>(
          <ReviewCard 
          key={review.customerName}
          imgURL = {review.imgURL}
          customerName = {review.customerName}
          rating = {review.rating}
          feedback = {review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
