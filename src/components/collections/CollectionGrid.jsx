import "./CollectionGrid.css";
import CollectionCard from "./CollectionCard";
import { collections } from "../../data/collections";

function CollectionGrid({
  selectedCollection,
  onSelectCollection,
}) {
  return (
    <section className="collection-section">

      <p className="section-tag">
        START WITH SOMEONE SPECIAL
      </p>

      <h2>
        Who are you making smile today?
      </h2>

      <p className="section-description">
        Every special person deserves a thoughtful little reminder.
      </p>

      <div className="collection-grid">

        {collections.map((collection) => (

          <CollectionCard
            key={collection.id}
            collection={collection}
            isSelected={selectedCollection === collection.id}
            onClick={() => onSelectCollection(collection.id)}
          />

        ))}

      </div>

    </section>
  );
}

export default CollectionGrid;