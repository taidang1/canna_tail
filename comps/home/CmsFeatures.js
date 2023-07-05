import React from 'react'
import MuseumOutlinedIcon from '@mui/icons-material/MuseumOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

function CmsFeatures() {
    const features = [
        {
            icon:
            <MuseumOutlinedIcon/>,
            title: "Store management",
            desc: "Manage all your products and brand content from a single source. Provide the best shopping experience to your customers. No coding knowledge is required! "
        },
        {
            icon:
            <LockOpenOutlinedIcon/>,
            title: "Inventory and sales",
            desc: "Automatically updates inventory in real time, based on sales, transfers, restocks and more. Get a complete view of inventory and sales in one handy dashboard."
        }
    ]

  return (
    <section className="py-14  bg-white">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
            <div className="max-w-xl space-y-3">
               
                <p className="text-gray-800 text-3xl font-sans text-3xl font-bold sm:text-4xl">
                Manage your store content. Anywhere.
                </p>
                <p>
                Headless Content Management Systems (CMS) function by separating the backend processes, such as content creation and storage, from the frontend activities, such as design and deployment.                </p>
            </div>
            <div className="mt-10 max-w-lg lg:max-w-none">
                <ul className="space-y-8">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3">
                                        {item.desc}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="mt-12 lg:mt-0">
            <img src="/cms_img.png" className="w-full shadow-lg rounded-lg border" />
            </div>
    </div>
</section>
  )
}

export default CmsFeatures
