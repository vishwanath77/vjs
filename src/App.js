import React from "react";
import EligibilityForm from "./components/EligibilityForm";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import FAQ from "./components/FAQ.js";
import Desc from './components/Desc.js'




function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <EligibilityForm />
      <Desc />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
