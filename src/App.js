import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNavbar from "./components/Navbar";
import Parant from "./components/Parant";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateNavbar />} />
                <Route path="/parent" element={<Parant />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);