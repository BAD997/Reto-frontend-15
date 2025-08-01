import {Hero} from "./components/Hero/hero"
import { CardsContainer } from "./components/card-container/cards-container"
import { Footer } from "./components/Footer/footer"
function App() {
  
  return (
    <>
    <main className="font-Poppins flex justify-center text-Grey-500">
      <section className=" w-[296px] my-[80px] xl:w-[1110px]">
        <Hero/>
        <CardsContainer/>
      </section>
    </main>
      <Footer/>
    </>
    
    
  )
}

export default App
