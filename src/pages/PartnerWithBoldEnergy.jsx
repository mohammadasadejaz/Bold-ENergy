const PartnerWithBoldEnergy = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '550px' }}>
        <img
          src="/partnerwithboldenergy.png.jpg"
          alt="Partner With Bold Energy"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '550px' }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <h1 className="font-bold text-white text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '75px' }}>
            Partner With Bold Energy
          </h1>
        </div>
      </section>

      {/* Powering Possibilities Section */}
      <section style={{ padding: '100px 200px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '30px' }}>
              Powering Possibilities, Together
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '20px' }}>
              At Bold Energy, we don't just talk about impact — we build it. By teaming up with like-minded dealers, financiers, contractors, and referral partners, we amplify clean-energy adoption, accelerate project timelines, and raise the bar for ethics and transparency across the solar industry.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '30px' }}>
              If you share our commitment to fair pricing, rock-solid installs, and zero-BS service, let's put our values to work side by side.
            </p>
            <button style={{
              backgroundColor: '#A1B502',
              color: '#FFFFFF',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '50px',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <img src="/dealer.png.png" alt="Dealer" style={{ width: '18px', height: '18px' }} />
              BECOME A PARTNER
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/possibilities.png.png"
              alt="Possibilities"
              style={{ width: '863px', height: '664px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={{ height: '920px', padding: '100px 200px', backgroundColor: '#FAFBF2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        {/* First Row - Heading + 2 Cards */}
        <div style={{ display: 'flex', alignItems: 'center', width: '1350px' }}>
          {/* Left Heading */}
          <div style={{ flex: '0 0 400px' }}>
            <h2 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', lineHeight: '1.2', marginBottom: '20px' }}>
              Why Partner With Bold Energy?
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#A1B502', fontWeight: 'bold' }}>
              Your Goal → Our Solution
            </p>
          </div>

          {/* 2 Cards - positioned with margin-left auto */}
          <div style={{ display: 'flex', gap: '30px', marginLeft: 'auto' }}>
            {/* Card 1 - Close More Deals */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Close More Deals" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Close More Deals
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                We provide ready-to-use proposal templates with customer-facing savings models, financing options, and ROI calculators that shorten the sales cycle and build confidence
              </p>
            </div>

            {/* Card 2 - Boost Revenue */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Boost Revenue" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Boost Revenue
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Our transparent pricing, full-permit installs, and industry-leading reviews mean happier customers and more referrals in your pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Cards Centered */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            {/* Card 3 - Streamline Operations */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Streamline Operations" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Streamline Operations
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Our dealer portal gives you real-time tracking, digital document uploads, and direct access to our ops team. Spend more time selling, less time chasing updates
              </p>
            </div>

            {/* Card 4 - Stand on Values */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Stand on Values" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Stand on Values
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Ethical pricing and transparent processes ensure your reputation grows with every deal
              </p>
            </div>

            {/* Card 5 - Deliver Faster Installs */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Deliver Faster Installs" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Deliver Faster Installs
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Permits secured upfront + local professional crews = installs in as little as 1-2 days once approvals clear.
              </p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default PartnerWithBoldEnergy;
