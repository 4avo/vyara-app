import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 flex justify-end items-center">
        <nav className="flex gap-6 text-black font-semibold text-sm">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">CONTENT</a>
          <a href="#" className="hover:underline">ПОДКРЕПИ</a>
          <a href="#" className="hover:underline">КОНТАКТИ</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-6">
            КРИТИЧНА ТОЧКА БЪЛГАРИЯ
          </h1>
          <button className="bg-white text-black text-lg font-medium py-2 px-6 rounded-full mt-4  hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out shadow-lg cursor-pointer">
                  НАПРЕД
          </button>


          {/* Decorative Shapes (now black & white) */}
          {/* <div className="mt-10 relative grid grid-cols-3 gap-6 items-center justify-center">
            <div className="absolute top-[-80px] right-[-40px]">
              <Image src="/black-white-shape1.svg" alt="black and white shape 1" width={100} height={100} />
            </div>
            <div className="absolute top-[20px] left-[-60px]">
              <Image src="/black-white-shape2.svg" alt="black and white shape 2" width={80} height={80} />
            </div>
            <div className="absolute bottom-[-80px] right-[-80px]">
              <Image src="/black-white-shape3.svg" alt="black and white shape 3" width={100} height={100} />
            </div>
            <div className="absolute top-[200px] left-[60px]">
              <Image src="/black-white-shape4.svg" alt="black and white shape 4" width={90} height={90} />
            </div>
            <div className="absolute bottom-[-100px] left-[10px]">
              <Image src="/black-white-shape5.svg" alt="black and white shape 5" width={70} height={70} />
            </div>
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-center text-black text-sm py-4">
        © 2024 Фондация "Слънчеви Деца". All rights reserved.
      </footer>
    </div>
  );
}
