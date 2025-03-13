import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [database, setDatabase] = useState("mongodb");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const apiUrl = "http://127.0.0.1:8000"; //process.env.REACT_APP_API_BASE_URL ||
      const response = await axios.post<{ short_url: string }>(
        `${apiUrl}/shorten`,
        {
          original_url: url,
          database: database,
        }
      );
      setShortenedUrl(response.data.short_url);
    } catch (error) {
      console.error("Error shortening the link", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shorten a Link</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <select
          value={database}
          onChange={(e) => setDatabase(e.target.value)}
          style={{ padding: "0.5rem" }}
        >
          <option value="mongodb">MongoDB</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="sqlite">SQLite</option>
        </select>
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}
        >
          Shorten
        </button>
      </form>
      {shortenedUrl && (
        <div>
          <p>
            Shortened URL:{" "}
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
