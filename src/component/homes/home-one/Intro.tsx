import { useEffect, useRef, useState } from "react";

const Intro = () => {
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [isReversing, setIsReversing] = useState<boolean>(false);
   const reverseIntervalRef = useRef<number | null>(null);
 
   useEffect(() => {
     const video = videoRef.current;
 
     const handleEnded = () => {
      if (!video) return;
       setIsReversing(true);
       video.pause();
 
       reverseIntervalRef.current = setInterval(() => {
         if (!videoRef.current) return;

         if (video.currentTime <= 0) {
            if (reverseIntervalRef.current !== null) {
               clearInterval(reverseIntervalRef.current);
             }
           setIsReversing(false);
           video.play(); // Start playing forward again
         } else {
           video.currentTime -= 0.05;
         }
       }, 50);
     };
     if (!video) return;
     video.addEventListener("ended", handleEnded);
 
     return () => {
       video.removeEventListener("ended", handleEnded);
       if (reverseIntervalRef.current !== null) {
         clearInterval(reverseIntervalRef.current);
       }
     };
   }, []);

   return (
      <section className="blc-about">
         <div className="container z-index-1 position-relative">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="z-index-1 blc-about__img pos-rel text-center">
                     <div className="p-5">
                        <img src="/assets/img/intro/ai-agents.gif" />
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
         <div className="">
         <video
      ref={videoRef}
      className="w-100"
      autoPlay
      muted
      playsInline
      controls={!isReversing} // disable controls during reverse
    >
            <source src="/assets/img/intro/IntroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
         </div>
      </section>
   )
}

export default Intro
