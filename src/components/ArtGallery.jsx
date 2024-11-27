import React, { useState } from "react";
import artData from "../art.json";

const ArtGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrering basert på søk
  const filteredArt = artData.filter(
    (art) =>
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h4>Eventyrbilder</h4>
      <input
        type="text"
        placeholder="Søk"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "50%",
          padding: "10px",
          margin: " 50px 0 60px 0",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        {filteredArt.map((art) => (
          <div key={art.id} className="box">
            <img
              src={art.image}
              alt="Bilde"
              style={{
                width: "100%",
                borderRadius: "4px 4px 0 0",
                marginBottom: "10px",
              }}
            />
            <label>{art.title}</label>
          </div>
        ))}
        {filteredArt.length === 0 && (
          <p>Fant ingen bilder som passet til søk</p>
        )}
      </div>
    </div>
  );
};

export default ArtGallery;
