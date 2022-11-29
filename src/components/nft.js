import React from 'react'
import './nft.css';
export default function Header() {
    
    return (
        
        

    <body>
    
      <section class="swiper mySwiper">
    
        <div class="swiper-wrapper">
    
          <div class="card swiper-slide">
            <div class="card__image">
              <img src="/Card_HC_GoldFront.jpg" alt="card image">
            </div>
    
            <div class="card__content">
              <span class="card__title">HEADLINE CREATOR</span>
              <span class="card__name">$49</span>
              <p class="card__text">begin your journey without any limits and become a pianoeer of the deserve to earn concept
              </p>
              <button class="card__btn">buy NOW</button>
            </div>
          </div>
    
          <div class="card swiper-slide">
            <div class="card__image">
              <img src="/Card_HC_BlackFront.jpg" alt="card image">
            </div>
    
            <div class="card__content">
              <span class="card__title">ADVERTISEMENT</span>
              <span class="card__name">for brands only</span>
              <p class="card__text">experience the interactive advertisement concept and be in touch with your target audience in seconds</p>
              <button class="card__btn">CONTACT US</button>
            </div>
          </div>
          
          <div class="card swiper-slide">
            <div class="card__image">
              <img src="/Card_HC_BlackBonusFront.jpg" alt="card image">
            </div>
    
            <div class="card__content">
              <span class="card__title">HASHTAG CREATOR</span>
              <span class="card__name">$99</span>
              <p class="card__text">create your own community to monetize your content as a group and expand your dedicated hashtag</p>
              <button class="card__btn">COMING SOON</button>
            </div>
          </div>
    
          <div class="card swiper-slide">
            <div class="card__image">
              <img src="/Card_HC_BronzeFront.jpg" alt="card image">
            </div>
    
            <div class="card__content">
              <span class="card__title">NEWCOMER</span>
              <span class="card__name">$9</span>
              <p class="card__text">start your journey as a newcomer and build your reputation from scratch to mint other NFTs for free</p>
              <button class="card__btn">BUY NOW</button>
            </div>
          </div>
    
          <div class="card swiper-slide">
            <div class="card__image">
              <img src="/Card_HC_SilverFront.jpg" alt="card image">
            </div>
    
            <div class="card__content">
              <span class="card__title">STORYTELLER</span>
              <span class="card__name">$39</span>
              <p class="card__text">share your thoughts and experiences in the existing headlines and monetize your content to earn more</p>
              <button class="card__btn">BUY NOW</button>
            </div>
          </div>
          
        </div> 
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    
 
      <script>
        {var swiper = new Swiper(".mySwiper", {
          effect: "coverflow",
          loop: true,
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 20,
            stretch: 5,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: ".swiper-pagination",
            },
        });
      </script>
    
    </body>
   