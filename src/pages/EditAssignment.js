import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";
import { updateAssignment } from "../services/api";

export default function EditAssignment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [assignmentData, setAssignmentData] = useState({
        assignmentname: "",
        cardpic: "",
        status: ""
    });

    const handleSubmit = async () => {
        try {
            setBusy(true);
            setError("");
            await updateCard(id, assignmentData); // Still calling updateCard
            navigate("/allAssignments");
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
                <h1 className="edit-title">Edit Assignment</h1>

                {error && <p className="edit-error">{error}</p>}

                <AssignmentForm
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
