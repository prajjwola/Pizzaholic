import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    
      <Hero/>
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          It is very important for the customer to pay attention to the adipiscing process. The great hates to be refused. Should she not reject him? He himself whom the times receive? It should be open to find out the laborious tasks that matter!

          </p>
          <p>
          But the choice of the chosen leader is to do rightly to seek troubles blinded by the pleasure of life? Aspernatur pain I will explain this less trouble to give birth to some people often?
        </p>
          <p>
          Are you not blinded by hatred of the troubles of labor, because what you criticize is the pleasures of life? He is bound to them.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  )
}