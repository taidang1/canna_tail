import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';


export default () => {

    const features = [
        {
            icon:
            <ShopTwoOutlinedIcon
            style={{
                color: "rgb(34 197 94)",
                fontSize: "30px",
               
               
              }}
          />,
            title: "Ecommerce",
            desc: "Maximize your online reach and boost sales with a cutting-edge, fully automated ecommerce system that operates in real-time.",
            link: "https://google.com"
        },
        {
            icon:
            <AddBusinessOutlinedIcon
            style={{
              color: "rgb(34 197 94)",
              fontSize: "30px",
             
             
            }}
          />,
            title: "Branding",
            desc: "As a cannabis business grows, a software can easily scale with the business."
        },
        {
            icon:
            <TuneOutlinedIcon    
            style={{
                color: "rgb(34 197 94)",
                fontSize: "30px",
               
               
              }}
            />,

            title: "Custom software",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon:
                <VideoSettingsOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "Content Management",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon:
                <SupportAgentOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "IT services",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon:
                <StorageOutlinedIcon
                style={{
                    color: "rgb(34 197 94)",
                    fontSize: "30px",
                   
                   
                  }}/>,
            title: "Data services",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
    ]

    return (
        <section style={{paddingBottom:'160px'}} className="py-20 bg-slate-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-slate-900 text-3xl font-sans text-3xl font-bold  sm:text-4xl">
                            Powering your cannabis technologies
                        </h3>
                        <p className="mt-3 text-slate-800">
                        Everything you need to run your cannabis business, we have you covered. Cannabis technology that can count on and scale with.
                        </p>
                    </div>

                </div>
                <div className="relative mt-12 ">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg hover:drop-shadow-md hover:bg-green-100 transition duration-100 delay-50 hover:delay-100">
                                    <div className="text-indigo-600 pb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-slate-900 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className='text-base text-slate-700'>
                                        {item.desc}
                                    </p>

                                    <a 
                    className="cta-pr-btn  bg-transparent text-green-500 font-medium  rounded-full inline-flex items-center"
                    href={item.link}>
                  <span className='text-base text-slate-900'>Learn more</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
                <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}