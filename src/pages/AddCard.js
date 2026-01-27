import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [cardData, setCardData] = useState({
    cardname: "", // CHANGED: card_name → cardname
    cardpic: ""   // CHANGED: card_pic → cardpic
  });

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) navigate("/login");
  }, [navigate]);

  const handleSubmit = async (data) => {
    try {
      setBusy(true);
      setError("");
      console.log("Submitting data:", data); // Debug log
      await addCard(data);
      navigate("/allCard");
    } catch (err) {
      console.error("Error adding card:", err); // Debug log
      setError("Failed to add card"); 
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h1>Add New Card</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CardForm
        values={cardData}
        onChange={setCardData}
        onSubmit={() => handleSubmit(cardData)}
        busy={busy}
        submitText="Add Card"
      />
    </main>
  );
}