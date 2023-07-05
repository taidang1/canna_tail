export const Compliance = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl bg-slate-50 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="#31B237"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span style={{whiteSpace:'nowrap'}} className="relative">Keeping your software compliant</span>
          </span>{" "}
           in a regulated industry
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          The consequences for non-compliance range from a hefty fine to the
          loss of your business license. We mitigate those risks, ensuring your
          compliance with cannabis regulations.
        </p>
      </div>
      <div className="grid max-w-screen-xl gap-20 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="/compliance_one.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/hippa_compliance.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="/iso_compliance.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 text-black font-semibold leading-5">
              Health Insurance Portability and Accountability Act
            </h6>
            <p className="text-sm text-gray-900">
              Protecting medical cannabis patient's personal health information,
              such as medical history, conditions, and patients right to
              privacy. By the highest standards for data security and the
              protection of Personally Identifiable Information.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 text-black font-semibold leading-5">
            Cannabis online and compliant ecommerce software
            </h6>
            <p className="text-sm text-gray-900">
            Ecommerce Saas platforms like shopify, do not allow products that are not federally legal, which includes THC. Our in-house decentralized ecommerce platform was design to overcome these complexities.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold text-black leading-5">
            Cannabis IT compliance services & consulting
            </h6>
            <p className="text-sm text-gray-900">
            We offer cannabis software regulatory compliance consulting & cyber security compliance consulting services. Let us help you achieve IT compliance; we understand that every organization is different and work with our clients to ensure we implement the right software compliance services and solutions. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
