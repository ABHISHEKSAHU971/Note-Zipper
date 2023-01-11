import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Landingpage from "./screen/Landingpage/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mynotes from "./screen/Mynotes/Mynotes";
import RegisterPage from "./screen/registerscreen/RegisterPage";
import LoginPage from "./screen/loginscreen/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/mynotes" element={<Mynotes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
