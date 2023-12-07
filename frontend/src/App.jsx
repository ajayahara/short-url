import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto">
        <AllRoutes />
      </div>
    </div>
  );
};

export default App;
