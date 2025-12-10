import React from 'react'
import Hero from '../components/Home/Hero'
import OurPhilosophy from '../components/Home/OurPhilosophy'
import MobilityAidsPage from '../components/Home/MobilityAidsPage'
import BestSellingProducts from '../components/Home/BestSellingProducts'
import Welcome from '../components/Home/Welcome'
import Products from './Products'
import TestimonialsCarousel from '../components/Home/TestimonialsCarousel'
import SubscribeSection from '../components/Home/SubscribeSection'

function Home() {
  return (
    <div>
        <Hero />
        <OurPhilosophy />
        <MobilityAidsPage />
        <BestSellingProducts />
        <Welcome />
        <Products />
        <TestimonialsCarousel />
        <SubscribeSection />
    </div>
  )
}

export default Home