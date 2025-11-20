import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="w-full relative min-h-screen">
        <img
          src="/bold.png.png"
          alt="Bold Energy Footer"
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: '800px' }}
        />
        {/* Green Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#A1B502',
            opacity: '0.8',
            zIndex: 1
          }}
        />
        {/* Bold Section Image */}
        <div className="absolute w-full flex justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4" style={{ zIndex: 2 }}>
          <img
            src="/boldsection.png.png"
            alt="Bold Section"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="absolute w-full flex flex-col items-center px-4 sm:px-6 md:px-8" style={{ top: '350px', zIndex: 2 }}>
          <h2 className="mb-4 sm:mb-6 text-white font-bold text-center text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Partner With Us
          </h2>
          <p className="text-white text-center mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed" style={{ fontFamily: 'Archivo, sans-serif' }}>
            We are an environmentally conscious renewable energy company that's focused on creating the most customer centric experience in the industry!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#FFFFFF', color: '#A1B502' }}
            >
              <img src="/greenquote.png.png" alt="Get a Quote" className="w-6 sm:w-7 h-4 sm:h-5" />
              GET A QUOTE
            </button>
            <button
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#385887' }}
            >
              <img src="/handshake.png.png" alt="Become a Sales Dealer" className="w-5 sm:w-6 h-5 sm:h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* White Rectangle - Half on bold section, half on footer */}
      <div className="hidden lg:block absolute w-full flex justify-center" style={{ top: '875.5px', zIndex: 10 }}>
        <div className="relative" style={{ width: '1350px', height: '789px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
          {/* Text Content */}
          <p className="absolute" style={{ left: '70px', top: '100px', fontFamily: 'Archivo, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#222222', maxWidth: '400px', paddingRight: '20px', lineHeight: '1.5' }}>
            As a national distributor of solar supplies we endeavor provide fast and knowledgeable service, we can get all the materials you need
          </p>

          {/* View Office Map */}
          <div className="absolute flex items-center gap-3" style={{ left: '70px', top: '250px' }}>
            <div className="flex items-center justify-center" style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#A1B502' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#222222' }}>
              View Our Office Map
            </span>
          </div>

          {/* Divider Line */}
          <div className="absolute" style={{ left: '70px', top: '310px', width: '400px', height: '1px', backgroundColor: '#CCCCCC' }}></div>

          {/* Contact Information */}
          <div className="absolute flex flex-col gap-4" style={{ left: '70px', top: '350px' }}>
            {/* Location */}
            <div className="flex items-center gap-3">
              <img src="/location.png.png" alt="Location" className="w-4 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                30 Old Kings Hwy S, Darien, CT 06820, USA
              </span>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <img src="/contact.png.png" alt="Contact" className="w-6 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                123-456-7890
              </span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <img src="/clock.png.png" alt="Hours" className="w-6 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                Mon - Fri: 9:00 AM - 5:00 PM
              </span>
            </div>

            {/* Contact Us Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-between mt-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502', width: '320px', height: '50px' }}
            >
              Contact Us
              <img src="/contactus.png.png" alt="Contact Us" className="w-5 h-5" />
            </button>

            {/* Become a Sales Dealer Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3 mt-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#385887', width: '320px', height: '50px' }}
            >
              <img src="/dealer.png.png" alt="Become a Sales Dealer" className="w-6 h-4" />
              BECOME A SALES DEALER
            </button>
          </div>

          {/* Blue Rectangle - Quote Form */}
          <div className="absolute flex flex-col" style={{ right: '40px', top: '50%', transform: 'translateY(-50%)', width: '759px', height: '669px', backgroundColor: '#385887', borderRadius: '10px', padding: '40px' }}>
            {/* Form Header */}
            <p className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '22px', color: '#A1B502' }}>
              Get your free solar estimate today.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <h3 style={{ fontFamily: 'Flamante-Roma, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#FFFFFF' }}>
                Request A Quote
              </h3>
              <div style={{ width: '250px', height: '3px', backgroundColor: '#A1B502' }}></div>
            </div>

            {/* Form Fields - Grid Layout */}
            <div className="grid grid-cols-2 gap-6 mt-6" style={{ marginBottom: '60px' }}>
              {/* Solar System */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  What You Want to Install?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Solar System
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 4-6 months */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  System Completed By?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    4-6 months
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 1300 KWH */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Monthly Electric Usage in Kwh?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    1300 KWH
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Widegrid */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Solar System Type?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Widegrid
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Residential home */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Solar Panels Place?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Residential home
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Solar panels */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Materials Type?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Solar panels
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 self-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502' }}
            >
              <img src="/dealer.png.png" alt="Dealer" className="w-6 h-5" />
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full relative min-h-screen">
        <img
          src="/footer.png.jpg"
          alt="Footer"
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: '600px' }}
        />
        {/* Bold Energy Logo */}
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-32 left-4 sm:left-8 md:left-12 lg:left-24">
          <img
            src="/boldenergy.png"
            alt="Bold Energy"
            className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto"
          />
        </div>

        {/* Company Section */}
        <div className="absolute top-32 sm:top-40 md:top-48 lg:top-64 left-1/2 transform -translate-x-1/2">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Company
          </h4>
          <div className="text-sm sm:text-base md:text-lg text-white space-y-2" style={{ fontFamily: 'Archivo, sans-serif' }}>
            <p>Homeowners</p>
            <p>Sales Dealers</p>
            <Link to="/customer-reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Reviews</p>
            </Link>
            <Link to="/blogs" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Latest Blog</p>
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-32 right-4 sm:right-8 md:right-12 lg:right-24 max-w-sm p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Contact Us
          </h4>

          {/* Contact Items */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Phone */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img src="/phone.png" alt="Phone" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                123-456-7890
              </span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img src="/email.png" alt="Email" className="w-5 sm:w-6 md:w-7 h-3 sm:h-4 md:h-5 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                info@bold.energy
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img src="/address.png" alt="Address" className="w-4 sm:w-5 md:w-6 h-6 sm:h-7 md:h-8 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-white leading-relaxed" style={{ fontFamily: 'Archivo, sans-serif' }}>
                30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-32 sm:bottom-24 md:bottom-20 left-4 sm:left-8 md:left-12 lg:left-24 flex gap-3 sm:gap-4">
          {/* Facebook */}
          <div className="flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white">
            <img src="/fb.png" alt="Facebook" className="w-3 h-5" />
          </div>

          {/* X (Twitter) */}
          <div className="flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white">
            <img src="/x.png" alt="X" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white">
            <img src="/insta.png" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white">
            <img src="/linkdin.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* White Line */}
        <div className="absolute bottom-16 sm:bottom-12 left-4 sm:left-8 md:left-12 lg:left-24 right-4 sm:right-8 md:right-12 lg:right-24 h-px bg-white"></div>

        {/* Copyright Text - Left */}
        <div className="absolute bottom-6 sm:bottom-4 left-4 sm:left-8 md:left-12 lg:left-24">
          <p className="text-xs sm:text-sm md:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Copyright © 2025 Bold Energy. All Rights Reserved.
          </p>
        </div>

        {/* Terms & Privacy - Right */}
        <div className="absolute bottom-6 sm:bottom-4 right-4 sm:right-8 md:right-12 lg:right-24">
          <p className="text-xs sm:text-sm md:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
