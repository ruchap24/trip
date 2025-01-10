import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewTrip from "./pages/ViewTrip";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/create-trip" element={<CreateTrip />} />
          
        
          <Route exact path="/" element={<Home />} />

           <Route path="/view-trip/:tripId" element={<ViewTrip />} />
             <Route path="/trips" element={<MyTrips />} />

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
             {/* <Route path="/view-trip/:tripId" element={<ViewTrip />} />
             <Route path="/trips" element={<MyTrips />} /> */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
