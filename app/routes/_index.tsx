import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <section>
        <div className="bg-gray-50 pt-12 lg:pt-20 pb-20 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-green-700">
                      <span>Build & Launch without problems</span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        to="#"
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                        to="#"
                      >
                        How it works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative" style={{ zIndex: 0 }}>
                  <img
                    height={280}
                    width={920}
                    className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                    src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-4">
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  Lorem ipsum dolor sit amet consectutar
                </h4>
                <p className="text-gray-500 leading-loose">
                  Fusce quam tellus, placerat eu metus ut, viverra aliquet
                  purus. Suspendisse potenti. Nulla non nibh feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
