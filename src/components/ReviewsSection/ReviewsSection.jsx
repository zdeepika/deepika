import { useRef, useState } from "react"
import './ReviewsSection.scss'

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="reviewSectionTitle">
        Horoscope Forecasts
        </div>
        <div className="reviewSectionSubtitle">
        It is a long established fact that a reader will be distracted .
        </div>
        <div className="reviewSectionSubtitle">
              The readable content of a page when looking at its layout. The point of using Lorem Ipsum .
        </div>
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h1.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Aries
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h2.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Taurus
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h3.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Gemini
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h4.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Cancer
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewTextSection">
        
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h5.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Leo
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h6.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Virgo
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h7.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Libra
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h8.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Scorpio
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h9.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Sagittairus
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h10.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Capricorn
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h11.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Aquarius
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="../src/images/h12.svg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
            Pisces
            </div>
            <div className="reviewerLocation">
            Mar 21 - Apr 19
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
          </div>
      </div>
    </section>
    
  )
}

export default ReviewsSection
