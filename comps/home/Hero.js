
import MuxVideo from "@mux/mux-video-react";







export default function Hero() {
 

  return (
    <div style={{maxHeight:'90vh'}} >
      <div className="hero_backdrop"></div>
<MuxVideo
   
   style={{
    backgroundColor:'#000',
     borderRadius: '0',
     height:'90vh',
     width:'100%',
      objectFit:'cover',
      zIndex: '0',
      position:'absolute'
    
   }}
   playbackId="CXBX02Ds4bKeMmQYLKPgbFOjaMKLPhZ00hov101OflqAEA"
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

    <div className="relative isolate px-6 lg:px-8 z-10">
 <div className="hero_content" style={{}}>
      <div  className="mx-auto  max-w-2xl py-32 sm:py-44 lg:py-25">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-600 hover:ring-green-300">
            Announcing our new store demo update.{' '}
            <a href="#" className="font-semibold text-green-500">
              <span className="absolute inset-0" aria-hidden="true" />
              View demo <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          
          <h1 className="text-4xl  font-bold tracking-tight text-white sm:text-5xl">
          Your <span style={{color:'#31B237'}} >Nation Wide</span> cannabis software connect
          </h1>
          <p className="mt-6 text-base leading-8 text-white">
          Discover our market-leading software, tailored specifically for cannabis businesses. Transforming cannabis businesses with software that satisfies the needs of today and unlock the opportunities of tomorrow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-green-500">
              Learn more <span aria-hidden="true">→</span>
            </a>
           
          </div>
        </div>
        </div>
      </div>
  
    </div>
    
  </div>
  );
}

