import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddClient from "./pages/AddClient";
import ShowFinanceDetails from "./pages/ShowFinanceDetails";
import UpdateClient from "./pages/UpdateClient";
import DeleteClient from "./pages/DeleteClient";
import SearchClient from "./pages/SearchClient";
import SalarySlip from "./pages/SalarySlip";


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<AddClient />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/show-finance" element={<ShowFinanceDetails />} />
            <Route path="/update-client" element={<UpdateClient />} />
            <Route path="/delete-client" element={<DeleteClient />} />
            <Route path="/search-client" element={<SearchClient />} />
            <Route path="/salary-slip" element={<SalarySlip />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
