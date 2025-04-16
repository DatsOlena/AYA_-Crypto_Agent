const Intro = () => {
   return (
      <section className="blc-about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="z-index-1 blc-about__img pos-rel text-center">
                     <img src="/assets/img/about/about_shape1.png" alt="" />
                     <div className="shape shape--1">
                        <div data-parallax='{"y" : 60}'>
                           <img src="/assets/img/about/about_shape2.png" alt="" />
                        </div>
                     </div>
                     <div className="shape shape--2">
                        <div data-parallax='{"y" : -60}'>
                           <img src="/assets/img/about/about_shape3.png" alt="" />
                        </div>
                     </div>
                     <div className="icon">
                        <img src="/assets/img/icon/syber_icon.svg" alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="blc-about__content">
                     <div className="sec-title style2 mb-40">
                        <h2 className="sec-title__title text-50 mb-25">Innovative AI Agent for Crypto Trading <br /> Market Insights & Mindset Mastery </h2>
                        <p>
                           AYA is an AI-powered agent designed to provide essential functionalities and high-quality crypto signals, sourced from top traders, insiders and whale advisors. It operates by combining traders' expertise, TradingView indicators, and real-time Twitter analysis.

                           All functionalities are carefully selected based on community voting and traders’ needs, ensuring that AYA provides stress-free trading and helps build healthy trading habits.

                           AYA is built on Solana, ensuring fast, low-cost transactions. Our whitepaper has been created to address all the essential aspects of future project development.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Intro
