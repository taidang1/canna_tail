import React from 'react'

function OtherHome() {
  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    // <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
    //   <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
    //     <span className="inline-block mb-1 sm:mb-4">
    //     Custom solutions that
    //       <br className="hidden md:block" />
    //       perfectly fit your needs
    //     </span>
    //     <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
    //   </h2>
    //   <p className="text-gray-700 lg:text-sm lg:max-w-md">
    //   We bring together deep industry expertise and the latest software advancements to develop reliable, scalable and secure software solutions for all of your cannabis project ideas.
    //   </p>
    // </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto items-center flex-col sm:text-center md:mb-10 lg:max-w-2xl">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight  md:mb-2">
        <span className="inline-block mb-1 sm:mb-4">
         Custom solutions that 
           <br className="hidden md:block" />
            perfectly fit your needs
         </span>
        </h2>
        <p className="text-gray-700 lg:text-base lg:max-w-auto">
        We bring together deep industry expertise and the latest software advancements to develop reliable, scalable and secure software solutions for all of your cannabis project ideas.
        </p>
      </div>

    <div className="grid gap-6 row-gap-5 lg:grid-cols-4">
      <div>
        <img
          className="object-cover w-full h-48 shadow-md mb-6 rounded"
          src="/other_pos.png"
          alt=""
        />
        <h5 className="mb-2 text-lg font-semibold text-black leading-none sm:text-lg">
          Point of sale
        </h5>
        <p className="text-gray-700">
        We create reliable and adaptable point of sale systems for cannabis retailers. Our system incorporates inherent traceability, sophisticated data reporting, consolidated payment processing, and beyond. 
        </p>
        <a style={{paddingTop:'10px'}}
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/'>
                  <span style={{color:'#000'}}>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
      </div>
      <div>
        <img
          className="object-cover w-full h-48 shadow-md mb-6 rounded"
          src="/other_b2b.png"
          alt=""
        />
        <h5 className="mb-2 text-lg font-semibold text-black leading-none sm:text-lg">
          Marketplace B2B
        </h5>
        <p className="text-gray-700">
        A marketplace catered to the B2B for cannabis, is essentially an online platform that enables multiple vendors to showcase and sell their products. Offers a myriad of features tailored to meet the specific needs of cannabis businesses. 
        </p>
        <a style={{paddingTop:'10px'}}
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/'>
                  <span style={{color:'#000'}}>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
      </div>
      <div>
        <img
          className="object-cover w-full h-48 shadow-md mb-6 rounded"
          src="/other_seed.png"
          alt=""
        />
        <h5 className="mb-2 text-lg font-semibold text-black leading-none sm:text-lg">
          Seed to sale
        </h5>
        <p className="text-gray-700">
         Seed-to-sale software specifically tailored for the cannabis industry. Innovative software services that cover every aspect of the cannabis business lifecycle, from cultivation and inventory management to compliance tracking and sales analytics. 
        </p>
        <a style={{paddingTop:'10px'}}
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/'>
                  <span style={{color:'#000'}}>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
      </div>
      <div>
        <img
          className="object-cover w-full h-48 shadow-md mb-6 rounded"
          src="/other_delivery.png"
          alt=""
        />
        <h5 className="mb-2 text-lg font-semibold text-black leading-none sm:text-lg">
          Delivery systems
        </h5>
        <p className="text-gray-700">
        Specialized software for cannabis delivery. Our software streamlines the entire cannabis delivery process, from online ordering and inventory management to driver tracking and customer communication. 
        </p>
        <a style={{paddingTop:'10px'}}
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href='/'>
                  <span style={{color:'#000'}}>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
      </div>
    </div>
  </div>
  )
}

export default OtherHome
