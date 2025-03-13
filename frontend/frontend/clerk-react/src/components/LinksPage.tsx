import { useEffect, useState } from "react";
import axios from "axios";

const LinksPage = () => {
  const [links, setLinks] = useState<
    { original_url: string; short_url: string }[]
  >([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/links`
        );
        setLinks(
          response.data as { original_url: string; short_url: string }[]
        );
      } catch (error) {
        console.error("Error fetching links", error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Shortened Links</h2>
      <ul>
        {links.map(
          (link: { original_url: string; short_url: string }, index) => (
            <li key={index}>
              {link.original_url} →{" "}
              <a href={link.short_url}>{link.short_url}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default LinksPage;
