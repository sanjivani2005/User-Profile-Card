import React from "react";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#6c63ff" }}>👤 Profile Card</h1>

      <UserCard
        name="Sanjivani Shende"
        email="sanjivanishende9@gamil.com"
        age={20}
        image="https://as2.ftcdn.net/jpg/07/94/44/57/1000_F_794445741_eCgT3mtM47IMmcAPsv0CH15OQRMVY9Se.webp" // random avatar generator
      />
    </div>
  );
}

export default App;
