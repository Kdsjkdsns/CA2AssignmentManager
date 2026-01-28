import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";
import './App.css';

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
  <main className="cardlist-page">
    <div className="cardlist-container">
      <h2 className="cardlist-title">All Cards</h2>

      {loading && <p className="cardlist-status">Loading...</p>}
      {error && <p className="cardlist-status error">{error}</p>}

      <div className="cardlist-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onDelete={() => handleDelete(card)}
            disabled={busy}
          />
        ))}
      </div>
    </div>
  </main>
);
