import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from './homePage/homePage';
import Owasp from './owasp/owasp';
import Routing from './all route/route';
import DocumentMeta from 'react-document-meta';

function App() {
  return (
  <Router>
    <DocumentMeta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/owasp" element={<Owasp/>} />
        <Route path="/:orgName" element={<Routing/>} />
    </Routes>
  </Router>
  );
}

export default App;
