import { useEffect, useState } from "react";

import CardContainer from "./CardContainer";
import Search from "./Search";

export default function Main() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [found, setFound] = useState(false);
  const [error, setError] = useState("");

  return (
    <main>
      <Search
        onSearch={setImages}
        isLoading={isLoading}
        onLoad={setIsLoading}
        onFound={setFound}
        setError={setError}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <CardContainer images={images} />
      )}
      {!isLoading && found ? <NotFound /> : ""}
      {/* {error && <ErrorMessage message={error} />} */}
    </main>
  );
}

function Loader() {
  return <p className="message">Loading...</p>;
}

function NotFound() {
  return <p className="message">No images found ⛔</p>;
}
function ErrorMessage({ message }) {
  return <p className="message">{message} ❌</p>;
}
