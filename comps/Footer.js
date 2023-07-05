import Image from "next/image";
import Gmaps from "./Gmaps";
const Footer = () => {
   

    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]


    return (
        <footer className="text-slate-50 bg-slate-950  px-4 py-4 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
            <div className="flex-1">
                <div className=" flex row items-center">
                <Image
                  src="/ninjas_logo.svg"
                  style={{ width: "30px", height: "30px" }}
                  alt="logo"
                  width={40}
                  height={40}
                />                  
                
                
                
                  <p style={{fontWeight:'600', paddingLeft:'6px'}} className="leading-relaxed text-green-500 mt-2 text-xl">
Canna                    </p>

                </div>
              
              <div> 
                 <p className="leading-relaxed text-slate-50 max-w-xs mt-2 text-base">
                 📱: +1(201)328-7539
                        </p>
                        <p className="leading-relaxed text-slate-50 max-w-xs mt-2 text-base" >✉️: canna@01ninjas.com</p>
                        </div>
                      
               
            </div>
          
            <div className="flex-1 text-slate-50 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                
                {
                    footerNavs.map((item, idx) => (
                        <ul
                            className="space-y-4  "
                            key={idx}
                        >
                            
                            <h4 className="text-green-500 text-xs">
                                { item.label }
                            </h4>
                            
                            {
                                item.items.map(((el, idx) => (
                                    <li  key={idx}>
                                        <a 
                                            href={el.href}
                                            className="hover:underline hover:text-green-500 text-white"
                                        
                                        >
                                            
                                           { el.name }
                      
                                           
                                        </a>
                                        
                                        
                                    </li>
                                    
                                )))
                                
                            }
                        </ul>
                    ))
                }
                
            </div>
            <div style={{display:'flex', flexDirection:'column'}} className="" >
            <form 
                    onSubmit={(e) => e.preventDefault()}
                >
                    <label className="block pt-4 pb-2">
                        Stay up to date
                    </label>
                    <div className="max-w-sm flex items-center  rounded p-1">
                        <input 
                        style={{borderRadius:'5px 0 0 5px'}}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2.5 outline-non bg-slate-50 text-black"
                        />
                        <button style={{borderRadius:'0 5px 5px 0'}}
                            className="p-2.5  text-white bg-green-500 outline-none shadow-md focus:shadow-none sm:px-5"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
                </div>
            
        </div>
        <div className="mt-8 py-6 border-t text-xs text-slate-400 items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
                &copy; 2023 Canna All rights reserved.
            </div>
           
        </div>
        <style jsx>{`
            .svg-icon path,
            .svg-icon polygon,
            .svg-icon rect {
                fill: currentColor;
            }
        `}</style>
    </footer>
    );
}

export default Footer;