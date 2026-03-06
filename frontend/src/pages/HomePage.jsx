import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import Apartment from '../components/Apartment';
import Location from '../components/Location';
import Experience from '../components/Experience';
import ExperiencesInVieste from '../components/ExperiencesInVieste';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import HouseRules from '../components/HouseRules';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="space-y-24 lg:space-y-32">
        <Hero />
        <WhyChoose />
        <Apartment />
        <Location />
        <Experience />
        <ExperiencesInVieste />
        <Testimonials />
        <Gallery />
        <Booking />
        <HouseRules />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
