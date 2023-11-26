import Footer from '@/component/Layout/Footer'
import Header from '@/component/Layout/Header'
import About from '@/component/Route/About'
import Future from '@/component/Route/Future'
import Hero from '@/component/Route/Hero'
import Partners from '@/component/Route/Partners'
import { styles } from '@/styles/styles'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts
          </h1>
          {/* <div className="w-full flex flex-wrap mt-5">
              {loading ? (
                [...new Array(8)].map((i) => (
                  <>
                    <PromptCardLoader />
                  </>
                ))
              ) : (
                <>
                  {prompts &&
                    prompts.map((item: any) => (
                      <PromptCard prompt={item} key={item.id} />
                    ))}
                </>
              )}
            </div> */}
          <br />
          <Future />
          <Partners />
          {/* <SellersBanner /> */}
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </main>
  )
}
