const About = () => {
   return (
      <section className="blc-about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="blc-about__content">
                     <div className="sec-title style2 mb-40">
                     </div>
                     <ul className="list-unstyled blc-about__list ul_li mt-none-20 justify-content-center">

                        <li className="pb-2 fw-light"><img src="/assets/img/icon/ul_icon.svg" alt="" />
                           AYA is knowledgeable in <span className="fw-bolder" style={{color:"lightblue"}}>cryptocurrency trading, market insights, and technical analysis.</span>
                        </li>
                        <li className="pb-2 fw-light"><img src="/assets/img/icon/ul_icon.svg" alt="" />
                           She provides expertise in <span className="fw-bolder" style={{color:"lightblue"}}>TradingView indicators, whale movements, and community-driven trading strategies.</span>
                        </li>
                        <li className="pb-2 fw-light"><img src="/assets/img/icon/ul_icon.svg" alt="" />
                           She offers <span className="fw-bolder" style={{color:"lightblue"}}>mindset coaching for traders, helping them manage stress, emotions, and financial discipline.</span>
                        </li>
                        <li className="pb-2 fw-light"><img src="/assets/img/icon/ul_icon.svg" alt="" />
                           She educates on <span className="fw-bolder" style={{color:"lightblue"}}>AI in trading, blockchain technology, and the evolving landscape of decentralized finance.</span>
                        </li>
                        <li className="pb-2 fw-light"><img src="/assets/img/icon/ul_icon.svg" alt="" />
                           She enjoys <span className="fw-bolder" style={{color:"lightblue"}}>discussing trader psychology, risk management, and ways to develop a long-term, sustainable trading approach.</span>
                        </li>

                     </ul>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="z-index-1 blc-about__img pos-rel text-center">
                     <div className="p-5">
                        <img src="/assets/img/about/ai.gif" alt="" style={{ transform: "scaleX(-1)" }} />
                     </div>

                  </div>
               </div>


            </div>
         </div>
      </section>
   )
}

export default About
