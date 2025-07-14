import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import VideoSection from './components/VideoSection'
import Expectations from './components/Expectations'
import Testimonials from './components/Testimonials'
import PreApproval from './components/PreApproval'
import PressLogos from './components/PressLogos'
import CallToAction from './components/CallToAction'
import Offerings from './components/Offerings'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='bg-white'>
      <Header />
      <HeroSection />
      <HowItWorks />
      <VideoSection />
      <Expectations />
      {/* <Testimonials /> */}
      <PreApproval />
      <PressLogos />
      <CallToAction />
      {/* <Offerings /> */}
      <Footer />
    </main>
  )
}
