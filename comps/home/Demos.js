import React from 'react'
import MuxVideo from "@mux/mux-video-react";

function Demos() {
  return (
    <div  className="px-4 bg-slate-50 rounded py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px inset'}} className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
      <div className="flex flex-col   justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
        <div>

        <MuxVideo
    className='mux_video'
   style={{
    backgroundColor:'#000',
      //borderRadius: '6px',
     height:'auto',
     width:'auto',
      objectFit:'contain',
      zIndex: '0',
    //   border:'1px solid #292929',
    //   position:'absolute'
    // boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    
   }}
   playbackId="QMPOEHO2sE02ctBk638ki02KmQQCpKxDIeUytL2gdzOfA"
   metadata={{
     video_id: "video-id-123456",
     video_title: "Super Interesting Video",
     viewer_user_id: "user-id-bc-789",
   }}
   streamType="on-demand"
   autoPlay
   muted
   loop
 ></MuxVideo>
          <h5 style={{paddingTop:'25px'}} className="max-w-md mb-6 text-3xl font-extrabold text-black leading-none sm:text-4xl">
            Our basic package  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18981D] to-[#51CA58]">ecommerce store demo</span>
          </h5>
          {/* <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p> */}
        </div>
          <button
            type="submit"
            className="rounded-md hover:border-2 hover:border-4-black bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white w hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60"
          >
            View demo
          </button>
          
      </div>
      <div className="flex flex-col  justify-between p-5 sm:p-10 lg:w-1/2">
        <div >

        <MuxVideo
  className='mux_video'
  style={{
   //backgroundColor:'#000',
    //borderRadius: '6px',
   // height:'auto',
   // width:'auto',
     objectFit:'contain',
     zIndex: '0',
    // border:'1px solid #292929',
   //   position:'absolute'
 //  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
  }}
  playbackId="QMPOEHO2sE02ctBk638ki02KmQQCpKxDIeUytL2gdzOfA"
  metadata={{
    video_id: "video-id-123456",
    video_title: "Super Interesting Video",
    viewer_user_id: "user-id-bc-789",
  }}
  streamType="on-demand"
  autoPlay
  muted
  loop
></MuxVideo>

          <h5 style={{paddingTop:'25px'}} className="max-w-md mb-6 text-3xl text-black font-extrabold leading-none sm:text-4xl">
            Our advanced cart<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18981D] to-[#51CA58]"> ecommerce store demo</span>
          </h5>
          {/* <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p> */}
        </div>
        <button
            type="submit"
            className="rounded-md hover:border-2 hover:border-4-black bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white w hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60"
          >
            View demo
          </button>
       
      </div>
    </div>
  </div>
  )
}

export default Demos
