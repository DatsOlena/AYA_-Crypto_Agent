
// import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <section className="hero hero__blockchain position-relative bg-black">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="blockchain-hero__content position-relative z-1"> 
                     <h1 className="title text-80 mb-25 -tracking-2/4">AYA <br /> protocol presale</h1>

                     <p className="mb-50 text-20 leading-30">Your guiding spirit….</p>
                     <h4 className="pt-35 text-65 lh-lg" style={{color:"lightblue"}}>Innovative AI Agent for Crypto Trading, <br />Market Insights & Mindset Mastery</h4>
                     {/* <div className="btns">
                        <Link className="blc-btn" to="#">get started</Link>
                        <Link className="blc-btn blc-btn--white" to="#">white paper</Link>
                     </div> */}
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="blockchain-hero__img position-absolute top-0 end-0 z-0">
                     <img src="/assets/img/bg/aya.png" alt="aya" className="w-full h-full" />
                  </div>
                  {/* <div className="hero__blockchain-icon pos-rel">
                     <div className="icon ul_li icon--1 absolute">
                        <span className="text-white mr-5">Secure & Safe</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--2 absolute">
                        <span className="text-white mr-5">Tested</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--3 absolute">
                        <span className="text-white mr-5">Trustworthy</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--4 absolute">
                        <img src="/assets/img/icon/sc.svg" alt="" />
                        <span className="text-white ml-5">Optimized</span>
                     </div> */}
                  {/* </div> */}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
