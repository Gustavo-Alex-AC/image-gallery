import { useState } from "react";

const KEY = "39702009-eb82aa98f01b0321efb293800";

export default function Search({
  onSearch,
  onLoad,
  isLoading,
  onFound,
  setError,
}) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const controller = new AbortController();
    async function fetchImage() {
      try {
        onLoad(true);
        onFound(false);
        setError("");

        const res = await fetch(
          `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&pretty=true`,
          { signal: controller.signal }
        );

        const data = await res.json();
        console.log(data);
        onSearch(data.hits);

        if (data.hits.length === 0) {
          onFound(true);
        }
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        onLoad(false);
      }
    }

    fetchImage();
    setQuery("");

    return function () {
      controller.abort();
    };
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search image term..."
        disabled={isLoading}
      />
      <button className="button">Search</button>
    </form>
  );
}
