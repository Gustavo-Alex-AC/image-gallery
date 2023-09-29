export default function Card({ image }) {
  const { previewURL, tags, views, downloads, likes, user, type } = image;
  const arrtag = tags.split(",");

  return (
    <div className="card">
      <img className="card-image" src={previewURL} alt={type} />
      <div className="card-text">
        <p className="card-text-actor">Photo by ${user}</p>

        <div className="photo-details">
          <p>
            <strong>Views:</strong> {views}
          </p>
          <p>
            <strong>Downloads:</strong> {downloads}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>

        <div className="tags">
          <Tag arrtag={arrtag} />
        </div>
      </div>
    </div>
  );
}

function Tag({ arrtag }) {
  return arrtag.map((tag, i) => <p key={i}>#{tag}</p>);
}
