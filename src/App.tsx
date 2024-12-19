// import React,{useState} from "react";
// import Sidebar from "./Components/Sidebar";
// import Booking from "./Components/Booking";
// // import Card from "./Components/Card";
// import Movie from "./Components/Movie";

// function App() {
//   const [currentView, setCurrentView] = useState("");

//   const handleNavigate = (view) => {
//     setCurrentView(view);
//   };
//   return (
//     <div><div style={{ display: "flex" }}>
//     <Sidebar onNavigate={handleNavigate} />
//     <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
//       {currentView === "movie" && <Movie />}
//       {!currentView && <h2>Welcome! Select an option from the sidebar.</h2>}
//     </div>
//   </div>
//       {/* <Sidebar />  */}
//         <Booking />
//        {/* <Card/> */}
//       </div>

//   );
// }

// export default App;
import React, { useState } from "react";
// import Movie from "./Components/Movie";
// import Booking from "./Components/Booking";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Movie from "./components/booking/MovieCard/MovieCard";
import Booking from "./components/booking/MovieBookingForm/MovieBookingForm";
// import Card from "./Components/Card";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleNavigation = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar with navigation handler */}
      <Sidebar onNavigate={handleNavigation} />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "20px" }}>
        {activeComponent === "Movie" && <Movie />}
        {activeComponent === ""}
      </div>
      <Booking />
    </div>
  );
}
