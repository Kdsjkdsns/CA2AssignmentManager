import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  
  const [cardData, setCardData] = useState({
    assignmentname: "", 
    cardpic: "",
    status: "Pending",
  });

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) navigate("/login");
  }, [navigate]);

  const handleSubmit = async (data) => {
    try {
      setBusy(true);
      setError("");
      await addCard(data);
      navigate("/allCard");
    } catch (err) {
      console.error(err);
      setError("Failed to add assignment");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h1>Add Assignment</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CardForm
        values={cardData}
        onChange={setCardData}
        onSubmit={() => handleSubmit(cardData)}
        busy={busy}
        submitText="Add Assignment"
      />
    </main>
  );
}
