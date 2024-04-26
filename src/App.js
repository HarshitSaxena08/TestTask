import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import FindDoctors from "./pages/FindDoctors";
import DoctorCard from "./components/DoctorCard";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/>  </>
    },
    {
      path: "/finddoctor",
      element: <> <Navbar/> <FindDoctors/> </>
    },
    {
      path: "/about",
      element: <> <Navbar/> <DoctorCard/> </>
    }
  ]);
  return (
    <div className="App">


      <RouterProvider router={router} />

    </div>
  );
}

export default App;
