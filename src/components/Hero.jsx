import Laptop from '../assets/macbook.jpg';

const Hero = () => {
    return (
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={Laptop}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-300">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Revolutionizing
                <br className="hidden md:block" />
                {' '}
                <span className="inline-block text-purple-600">
                  Trust
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Empowering your business with secure, decentralized solutions.
              Leverage blockchain to ensure transparency, reliability, and innovation. Build a future where data integrity is the standard, and trust is seamless.
              </p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Name"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-purple-600 focus:outline-none focus:shadow-outline"
                />
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-purple-600 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-800"
                >
                  Learn more
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;