import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(() => setError("Failed to load cards"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (card) => {
    setBusy(true);
    try {
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
    } catch {
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main>Loading...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main style={styles.container}>
      <h2>All Cards</h2>

      <div style={styles.grid}>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onDelete={() => handleDelete(card)}
            disabled={busy}
          />
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
};
