import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { updateCard } from "../services/api";

export default function EditCard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [cardData, setCardData] = useState({
        cardname: "",
        cardpic: ""
    });

    const handleSubmit = async () => {
        try {
            setBusy(true);
            setError("");
            await updateCard(id, cardData);
            navigate("/allCard"); // MUST match App.js
        } catch (err) {
            console.error(err);
            setError("Failed to update card");
        } finally {
            setBusy(false);
        }
    };

    return (
        <main>
            <h1>Edit Card</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <CardForm
                values={cardData}
                onChange={setCardData}
                onSubmit={handleSubmit}
                busy={busy}
                submitText="Update Card"
            />
        </main>
    );
}
