import Card from "./Card";

export default function CardContainer({ images }) {
  return (
    <div className="card-container">
      {images.map((image) => (
        <Card image={image} key={image.id} />
      ))}
    </div>
  );
}
