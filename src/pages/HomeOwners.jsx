import Testimonials from '../components/Testimonials';
import Xarrow from 'react-xarrows';

const HomeOwners = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <img
          src="/homeowners.png"
          alt="Homeowners"
          className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
        />
        {/* Black Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
            <h1 className="font-bold text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              See if solar is the<br />right fit for you.
            </h1>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Join thousands switching to solar and save on your<br className="hidden sm:inline" />energy bills while protecting the planet.
            </p>
            <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502' }}>
              GET A FREE QUOTE
            </button>
          </div>
        </div>

        {/* Three Stats Pills - Half on hero, half below */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24">
              <div className="bg-white rounded-full flex items-center gap-3 sm:gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg" style={{ minHeight: '100px', padding: '16px 24px' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center p-2 sm:p-3">
                  <img src="/Solar_Experience.png.png" alt="Solar Experience" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    25+
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Years of Solar Experience
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center gap-3 sm:gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg" style={{ minHeight: '100px', padding: '16px 24px' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center p-2 sm:p-3">
                  <img src="/States.png.png" alt="States" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    25
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    States we cover
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center gap-3 sm:gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg" style={{ minHeight: '100px', padding: '16px 24px' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center p-2 sm:p-3">
                  <img src="/Installs.png.png" alt="Installs" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    20k+
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Completed installs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Options Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h2 className="text-center font-bold mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222' }}>
          Solar Options
        </h2>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Purchase Card */}
          <div className="flex flex-col items-start p-8 sm:p-10 md:p-12 lg:p-14 rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{ backgroundColor: 'rgba(161, 181, 2, 0.05)' }}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6" style={{ border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/purchase.png" alt="Purchase" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222' }}>
              Purchase
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6' }}>
              Flexible Financing, Maximum Freedom Think going solar is out of reach? Think...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Finance Card */}
          <div className="flex flex-col items-start p-8 sm:p-10 md:p-12 lg:p-14" style={{ backgroundColor: 'rgba(161, 181, 2, 0.10)' }}>
            <h3 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222' }}>
              Finance
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6' }}>
              Installing solar panels is a great way to reduce your energy costs and sup...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center" style={{ border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/finance.png" alt="Finance" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>

          {/* TPO Card */}
          <div className="flex flex-col items-start p-8 sm:p-10 md:p-12 lg:p-14 rounded-b-lg md:rounded-b-none md:rounded-r-lg" style={{ backgroundColor: 'rgba(161, 181, 2, 0.05)' }}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6" style={{ border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/tpo.png" alt="TPO" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222' }}>
              TPO
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6' }}>
              Installing solar panels is a great way to reduce your energy costs and sup...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Bold Energy Section */}
      <section className="w-full relative min-h-screen">
        <img
          src="/whyboldenergybg.png"
          alt="Why Bold Energy"
          className="w-full h-full object-cover absolute inset-0"
          style={{ transform: 'scaleX(-1)', minHeight: '600px' }}
        />
        {/* Color Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#F1F4D9',
            opacity: '0.85'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8" style={{ zIndex: 2 }}>
          <h2 className="font-bold mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: 'Quicksand, sans-serif', color: '#000000' }}>
            Why Bold Energy
          </h2>

          {/* Bold Energy Image - Center */}
          <div id="centerImage" className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '410px', height: '528px' }}>
            {/* SVG Dashed Border */}
            <svg style={{ position: 'absolute', width: '410px', height: '528px', top: 0, left: 0 }}>
              <rect
                x="0.5"
                y="0.5"
                width="409"
                height="527"
                rx="205"
                ry="205"
                fill="none"
                stroke="#A1B502"
                strokeWidth="1"
                strokeDasharray="5 10"
              />
            </svg>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '205px', overflow: 'hidden', padding: '10px' }}>
              <img
                src="/boldenergyimage.png"
                alt="Bold Energy Center"
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', borderRadius: '195px' }}
              />
            </div>
          </div>

          {/* Top Left - Why Bold Energy */}
          <div className="absolute" style={{ left: '270px', top: '220px', maxWidth: '300px' }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="whyBoldIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/volt.png" alt="Volt" style={{ width: '24px', height: '28px' }} />
              </div>
            </div>
            <h3 className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              Why Bold Energy
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              Ethical. Transparent. Relentless. We don't just install solar. We help you save money and the environment.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Bottom Left - ROI Calculator */}
          <div className="absolute" style={{ left: '270px', bottom: '200px', maxWidth: '300px' }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="roiIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/roicalculator.png" alt="ROI Calculator" style={{ width: '24px', height: '28px' }} />
              </div>
            </div>
            <h3 className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              ROI calculator
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              Crunch the Numbers. See the Light. Want to know what going solar really saves you? Our ROI calculator gives you the hard data.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right Side - Environmental Impact Calculator */}
          <div className="absolute" style={{ right: '180px', top: '50%', transform: 'translateY(-50%)', maxWidth: '300px', zIndex: 3 }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="envImpactIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/calculator.png" alt="Calculator" style={{ width: '28px', height: '28px' }} />
              </div>
            </div>
            <h3 className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              Environmental Impact Calculator
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              There are many variations of passages of Lorem Ipsum.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Bold BG Image - Right Side */}
          <div className="absolute" style={{ right: '0', top: '50%', transform: 'translateY(-50%)', width: '379px', height: '932px' }}>
            <img
              src="/boldbg.png"
              alt="Bold Energy"
              style={{ width: '379px', height: '932px', display: 'block' }}
            />
          </div>

          {/* Connector Lines using react-xarrows */}
          <Xarrow
            start="whyBoldIcon"
            end="centerImage"
            startAnchor="right"
            endAnchor="left"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="straight"
            zIndex={1}
          />
          <Xarrow
            start="roiIcon"
            end="centerImage"
            startAnchor="right"
            endAnchor="left"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="straight"
            zIndex={1}
          />
          <Xarrow
            start="envImpactIcon"
            end="centerImage"
            startAnchor="left"
            endAnchor="right"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="straight"
            zIndex={1}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default HomeOwners;
