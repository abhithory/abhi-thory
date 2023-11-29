import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import About from '@/components/Route/About'
import Future from '@/components/Route/Future'
import Hero from '@/components/Route/Hero'
import Partners from '@/components/Route/Partners'
import { styles } from '@/styles/styles'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import { GrGithub } from 'react-icons/gr'

export default function Home() {
  return (
    <main className="">

      <div className="banner" id='hello'>
        <Header activeItem={0} />
        <Hero />
      </div>
      {/* <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      /> */}
      {/* <br /> */}
      {/* <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts
          </h1>
          <br />
          <Future />
          <Partners />
          <br />
          <br />
          </div>
        </div> */}
      <Divider className="bg-[#ffffff23]" />
      <Footer />
    </main>
  )
}
