import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './App.css'

const App = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoidWRheS1rdW1hci1zYWgiLCJhIjoiY2w3dGQyMmltMGJzbDNxbzBpbDB6YzZoNiJ9.y6DTA2q4hwfFGUgQYIIJ8A",
      
  });
  return (
    <div className="main-con">
      <div className="map-con">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "75vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
      </div>
      <div className="sidebar-con">
        <input className="input-con" type="text" placeholder="Search Location..." />
      
        <div className="buttons-con">
        <div className="button">Draw shape</div>
        <div className="button">Save shape</div>
        <div className="button">Fetch shape</div>
        </div>
        <div className="area-calculator-box">
          <h1>area</h1>
          {/* <h1>area</h1>
          <h1>area</h1>
          <h1>area</h1>
          <h1>area</h1> */}
        </div>
      </div>
      ;
    </div>
  );
};

export default App;
