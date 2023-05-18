
import Card from "./card";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";





function App(){

return(
  <>
  <NavBar/>
  <Header/>
  
  <div className="row">
    <div className="col-sm-3 p3"><Card title="Gato" description="This is a cat in the world" image="https://cdn2.thecatapi.com/images/ad1.jpg" /> </div>
    <div className="col-sm-3 p3"><Card title="Gato" description="This is a cat in the world" image="https://cdn2.thecatapi.com/images/ad1.jpg" /> </div>
    <div className="col-sm-3 p3"><Card title="Gato" description="This is a cat in the world" image="https://cdn2.thecatapi.com/images/ad1.jpg" /> </div>
    <div className="col-sm-3 p3"><Card title="Gato" description="This is a cat in the world" image="https://cdn2.thecatapi.com/images/ad1.jpg" /> </div>
  </div>
  
  <Footer/>
  </>
  
)

}

export default App
