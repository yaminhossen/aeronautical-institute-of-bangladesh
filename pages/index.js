import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/slider'
import Introduction from '../components/introduction'
import Facility from '../components/facility'
import Speciality from '../components/speciality'
import Featured from '../components/featured'
import Courses from '../components/courses'
import Reward from '@/components/reward'
import Department from '@/components/departments'
import Reviews from '@/components/reviews'
import Registration from '@/components/registration'
import Gallery from '@/components/gallery'
import Organization from '@/components/organization'
import Swiper from '@/components/swiper'
import Location from '@/components/location'
import Events from '@/components/events'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aeronautical Institute</title>
      </Head>
      <div>
        <Slider></Slider>
        <Introduction></Introduction>
        <Facility></Facility>
        <Speciality></Speciality>
        <Featured></Featured>
        <Courses></Courses>
        <Reward></Reward>
        <Department></Department>
        <Reviews></Reviews>
        <Events></Events>
        <Registration></Registration>
        <Swiper></Swiper>
        <Organization></Organization>
        <Location></Location>
      </div>
    </div>
  )
}
