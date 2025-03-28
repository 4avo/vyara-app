/* eslint-disable */
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative scroll-smooth">
      {/* Header - Shortened navbar */}
      <header className="bg-black p-4 flex items-center fixed top-0 left-0 w-full z-10">
  <div className="flex items-center gap-4 z-50">
    <div className="flex-shrink-0">
      <Image src="/images/logo.jpg" alt="Logo" width={150} height={150} />
    </div>
    <nav className="flex gap-6 text-white font-semibold text-xl">
      <a href="#home" className="hover:underline">HOME</a>
      <a href="#about" className="hover:underline">ABOUT US</a>
      <a href="#content" className="hover:underline">CONTENT</a>
      <a href="#support" className="hover:underline">ПОДКРЕПИ</a>
      <a href="#contacts" className="hover:underline">КОНТАКТИ</a>
    </nav>
  </div>
</header>

      <main className="flex-grow p-8 bg-black mt-0">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-white text-5xl sm:text-7xl font-extrabold mb-6 animate-fade-in">
              КРИТИЧНА ТОЧКА БЪЛГАРИЯ
            </h1>            
            <a
              href="#content"
              className="bg-white text-black text-lg font-medium py-2 px-6 rounded-full mt-4 inline-block hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out shadow-lg cursor-pointer"
            >
              НАПРЕД
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-8">Learn more about our mission, vision, and core values.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black border border-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p>To empower and uplift the community through social action and change.</p>
              </div>
              <div className="bg-black border border-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                <p>We envision a better, united future for all Bulgarians.</p>
              </div>
              <div className="bg-black border border-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                <p>Integrity, inclusivity, and impact-driven leadership.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="content" className="min-h-screen bg-black text-white p-8 flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl font-bold mb-4">Our Content</h2>
            <p className="text-lg mb-8">Explore our diverse content offerings, from podcasts to video series.</p>
            <div className="flex justify-center space-x-8">
              <div className="p-6 bg-black border border-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold">Podcast</h3>
                <p>Engaging conversations on crucial topics.</p>
              </div>
              <div className="p-6 bg-black border border-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold">Video Series</h3>
                <p>Inspiring stories from the heart of Bulgaria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Support Us (ПОДКРЕПИ)</h2>
            <p className="text-lg mb-8">Join our cause and make a difference by supporting us.</p>
            <button className="bg-white text-black text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              Donate Now
            </button>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="min-h-screen bg-black text-white p-8 flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">Reach out to us at <strong>contact@kritichnatocka.bg</strong></p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-center text-white text-sm py-4">
        © 2025 КРИТИЧНА ТОЧКА БЪЛГАРИЯ. All rights reserved.
      </footer>
    </div>
  );
}
