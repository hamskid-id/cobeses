import { useState } from "react";
import { Text } from "../../elements/text";
import StarRatings from 'react-star-ratings';
import  avatar  from "../../assets/Avatar.svg";

export const Review=()=>{
    const[
        activeRating,
        setActiverating
    ]=useState(2);
    const handleChangeRating=(newRating, name )=>{
        setActiverating(newRating)
    }
    return(
        <div className="spaceTop">
            <div className="inner-cover d-flex flex-column align-items-center justify-content-center faint-white">
                <Text
                    style="fw-600 fonts-3 text-center mb-3 spaceAside"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare commodo est eget laoreet. Ut ut sapien auctor, aliquam est quis, facilisis laoreet elit. Nunc tempor orci non ex cursus, ac rhoncus urna imperdiet."
                />
                <img 
                    src={avatar}
                    alt="object not found"
                    className="avatar"
                />
                <Text
                    style="fs-7 fw-600 mb-1"
                    title="Mollie Hall"
                />
                <Text
                    style="fs-7 faint mb-2"
                    title="Etudiant, University du Senegal mb-2"
                />
                <StarRatings
                    rating={activeRating}
                    starRatedColor="yellow"
                    changeRating={handleChangeRating}
                    numberOfStars={6}
                    name='rating'
                    starDimension="20px"
                />
            </div>
        </div>
    )
}