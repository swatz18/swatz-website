import "./CollectionCard.css";

function CollectionCard({
  collection,
  onClick,
  isSelected,
}) {
  return (
    <div
      className={`collection-card ${isSelected ? "active" : ""}`}
      onClick={onClick}
    >

      <div className="collection-icon">
        {collection.emoji}
      </div>

      <h3>{collection.title}</h3>

      <p>{collection.tagline}</p>

      <button>
        Make It Special 🎀
      </button>

    </div>
  );
}

export default CollectionCard;