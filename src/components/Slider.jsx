import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const baseUrl = 'http://placekitten.com/200/300';
    const datas = [
        {
            id: 1,
            image: `${baseURl}1.jpeg`,
            title: "im a cat",
            text: 'Cat ipsum dolor sit amet, shake treat bag. Cats are a queer kind of folk waffles, i is not fat, i is fluffy trip owner up in kitchen i want food time to go zooooom or chase red laser dot or i cry and cry and cry unless you pet me, and then maybe i cry just for fun.',
        },
        {
            id: 2,
            image: `${baseURl}2.jpeg`,
            title: "meow",
            text: 'Cat ipsum dolor sit amet, sleep on my humans head and suddenly go on wild-eyed crazy rampage scream at teh bath. Hopped up on catnip instead of drinking water from the cat bowl, make sure to steal water from the toilet yet litter box is life, for destroy the blinds jump off balcony, onto strangers head.',
        }
    ];
    return (
        <Carousel>
      {datas.map((slide) => (
          <div key={slide.id}>
              <img src={slide.image} />
              <div className="overlay">
                  <h2 className="overlay_title">{slide.title}</h2>
                  <p className="overlay_text">{slide.text}</p>
              </div>
          </div>
      )

      )}
        </Carousel>
    )
}

export default Slider
