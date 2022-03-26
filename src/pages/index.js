import Slider from './../components/slider';
import Header from './../components/header';
import Footer from './../components/footer';
import Sections from './../components/sections';
//import Demo from './../components/demo';
import Form from './../components/form';
import data from './../data/sections-v2.json';

export default function App() {
    const date = new Date().toLocaleDateString(),
          wirdiCokie = window.localStorage.getItem("Wirdi-"+date+""),
          score = window.localStorage.getItem("score"),
          liste = [] ;

          data.map( (index) =>{
            liste.push(index.name);
          });
    if ( wirdiCokie == null) 
      window.localStorage.setItem('Wirdi-'+date+'',liste);

    if ( score == null) 
      window.localStorage.setItem("score",0);
    
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto">
          <Slider />
          <Sections />
          {/*<Demo /> <Form />*/}
        </div>
        <Footer />
      </div>
      
    )
  }
  