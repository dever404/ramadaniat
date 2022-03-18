import Slider from './../components/slider';
import Header from './../components/header';
import Footer from './../components/footer';
import Sections from './../components/sections';
//import SectionsV2 from './../components/sectionsV2';

export default function App() {
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto">
          <Slider />
          <Sections />
        </div>
        <Footer />
      </div>
      
    )
  }
  