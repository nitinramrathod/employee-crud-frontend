import MainHeader from "./components/common/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDetail from "./pages/EmployeeDetail";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <div style={{ backgroundColor: "#dae3f1", minHeight: '100vh' }}>
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/employee/create" element={<EmployeeDetail />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
