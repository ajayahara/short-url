import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto">
        <AllRoutes />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
