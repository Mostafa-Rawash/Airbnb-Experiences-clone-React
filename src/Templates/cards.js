import React from "react"


import cardImage from "../assets/image 124@.png"
import card2Image from "../assets/wedding-photography 14@.png"
import card3Image from "../assets/mountain-bike 14@.png"


const cardsData = [
    {
        ratingNum: "5.0", countOfLearners: 6, counteryOfInstructor: "USA", courseDesc: "Life lessons with Katie Zaferes", courseCost: "FROM $136 ", courseUnit: "/ person", cardPhoto: cardImage
    },
    {
        ratingNum: "5.0", countOfLearners: 30, counteryOfInstructor: "USA", courseDesc: "Learn wedding photography", courseCost: "FROM $126 ", courseUnit: "/ person", cardPhoto: card2Image
    },
    {
        ratingNum: "4.8", countOfLearners: 2, counteryOfInstructor: "USA", courseDesc: "Group Mountain Biking", courseCost: "FROM $50 ", courseUnit: "/ person", cardPhoto: card3Image
    }
]

export default function CardList() {
    return (
        cardsData.map((card) => {
            return (
                <div className="cardBody">
                    <div className="cardImage">
                        <img src={card.cardPhoto} alt="" />
                    </div>
                    <div className="cardRating">
                        <span class="fa fa-star checked"></span>
                        <p className="ratingNum ">{card.ratingNum}</p>
                        <p className="countOfLearners light">({card.countOfLearners}) . {card.counteryOfInstructor}</p>
                    </div>
                    <p className="courseDesc">{card.courseDesc}</p>
                    <div className="cardPrice">
                        <p className="courseCost bold">{card.courseCost}</p>
                        <p className="courseUnit">{card.courseUnit}</p>
                    </div>

                </div>
            )
        })
    )
} 