import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { updateCard } from "../services/api";

export default function EditCard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [assignmentData, setAssignmentData] = useState({
        assignmentname: "",
        duedate: "",
        status: ""
    });

    const handleSubmit = async () => {
        try {
            setBusy(true);
            setError("");
            await updateCard(id, assignmentData);
            navigate("/allCard"); // MUST match App.js
        } catch (err) {
            console.error(err);
            setError("Failed to update assignment");
        } finally {
            setBusy(false);
        }
    };

    return (
      <main className="edit-page">
        <div className="edit-container">
          <h1 className="edit-title">Edit Card</h1>

          {error && <p className="edit-error">{error}</p>}

          <CardForm
            values={assignmentData}
            onChange={setAssignmentData}
            onSubmit={handleSubmit}
            busy={busy}
            submitText="Update Assignment"
          />
        </div>
      </main>
    );
}
