import Slider from './../components/slider';
import Header from './../components/header';
import Footer from './../components/footer';
import Sections from './../components/sections';
import data from './../data/sections-v2.json';

export default function App() {
    const date = new Date().toLocaleDateString(),
          wirdiCokie = window.localStorage.getItem("Wirdi-"+date+""),
          liste = [] ;

          data.map( (index) =>{
            liste.push(index.name);
          });
    if ( wirdiCokie == null) 
      window.localStorage.setItem('Wirdi-'+date+'',liste);
    
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
  