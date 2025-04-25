interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: string;
};

const solution_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/icon/s_01.svg",
      title: "Don’t Miss THIS Anymore!",
      desc: "Inspired by the recent hype around tokens like $TRUMP, we don’t want you to miss the next big opportunity. AYA monitors Twitter accounts of key influencers and whales in real-time, so you can react within seconds.",
   },
   {
      id: 2,
      icon: "/assets/img/icon/s_04.svg",
      title: "VIP Crypto Signals",
      desc: "Comprehensive analytics and monitoring tools are included",
   },
   {
      id: 3,
      icon: "/assets/img/icon/s_03.svg",
      title: "Automated Twitter Growth",
      desc: "AYA automatically posts content on Twitter, building its own online personality to attract attention and increase liquidity for the ecosystem.",
   },
   {
      id: 4,
      icon: "/assets/img/icon/s_02.svg",
      title: "More Features Coming Soon...",
      desc: "Join our community and be part of the presale to access exclusive features. We are preparing for a strong launch, and early adopters will benefit the most!",
   },
];

const Solution = () => {
   return (
      <section className="solution pt-10 pb-70 p-relative z-index-1">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="solution__content">
                     <div className="sec-title style2 mb-60">
                        <h2 className="sec-title__title text-50 mb-25">AYA’s First Functionalities</h2>
                     </div>
                     <ul className="solution__list list-unstyled">
                        {solution_data.map((item) => (
                           <li className="z-index-1" key={item.id}>
                              <div className="icon">
                                 <img src={item.icon} alt="" />
                              </div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="solution__img pos-rel">
                     <img src="/assets/img/solution/ai-agent-performance.gif" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Solution
