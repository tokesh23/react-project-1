import React from 'react'
import './Hero.css'
import ShoesImg from "../assets/img/img.png"

const Hero = () => {
  return (
    <div className='pairent'>
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET <br /> DESERVEN THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='hero-btn'>
                    <button>Shopt Now</button>
                    <button className='btn2'>Category</button>
                </div>
                <div className='shoping'>
                    <p>Also Available On </p>
                    <div className='brand-icon'>
                        <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrV3u9GoFF4uXuGClD6HqSYOYMzPQE35xoA&sfilifpcart" alt=""className='icon' />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
               <img src={ShoesImg} alt=""className='sooze' />
            </div>
        </main>
        
    </div>
  )
}

export default Hero