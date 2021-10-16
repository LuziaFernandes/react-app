import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 <div className="container">
      <div className="row">
        <div className=" col heading">
          MyWheather 
        </div>
        <div className=" col form">
        <form className="col-8 searchBox"  id ="input-city">
          <input type="text" placeholder="Enter a city" id ="input-city-go"/>
          <input type="submit"  value="Go!"/>
        </form>
      </div>
      <div className=" col ">
          <button className="col  searchBox" >Current Location</button>
        </div>
      </div>
  </div>
        <header>
   
    <h1> Porto </h1>
    <br/>
    <h2 >Tuesday, 3 of July 2021</h2>
    <br/>
    <h3> <span>18</span> <a  href="#">ºC</a> | <a  href="#">ºF</a><span className="temperatureNow" >    Current Temperature at  <span> 16h00 </span> </span>  </h3>
    
<ul>
  <li>7ºC/13ºC <br/> <strong> Morning</strong></li>
  <li>7ºC/13ºC <br/> <strong>Afternoon</strong></li>
  <li>7ºC/13ºC <br/> <strong>Evening</strong></li>
</ul>
    </header>
  <div className="row">
    <div className="col ">  <br/>Next 5 Days:
          </div>
  
    <div className="col dayNumber">
      1 <br/> 13º/18º <br/> 🌞
    </div>
    <div className="col dayNumber">
      2 <br/> 13º/18º <br/> 🌨
    </div>
    <div className="col dayNumber">
      3 <br/> 13º/18º <br/> 🌦
    </div>
    <div className="col dayNumber">
      4 <br/> 13º/18º <br/> 🌤
    </div>
    <div className="col dayNumber">
      5 <br/> 13º/18º <br/> ⛈
    </div>
  </div>
    </div>
  );
}

export default App;
