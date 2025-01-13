import Navbar from './components/navbar/Navbar';
import SectionMain from './components/section-main/SectionMain';
import SectionTwo from './components/section-main/SectionTwo';
import SectionThree from './components/section-main/SectionThree';
import SectionFour from './components/section-main/SectionFour';
import SectionFive from './components/section-main/SectionFive';
import SectionSeven from './components/section-main/SectionSeven';
import Footer from './components/section-main/Footer';

export default function Page() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 pt-[70px] min-h-screen relative">
    
    <Navbar />

    
    <main className="flex-1 flex flex-col justify-between wx-96">
    <SectionMain />


    <SectionTwo />

    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSeven />

    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  );
}
