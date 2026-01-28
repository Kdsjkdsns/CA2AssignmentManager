import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";
import { addCard } from "../services/api"; // Keep as addCard

export default function AddAssignment() {
    const navigate = useNavigate();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    const [assignmentData, setAssignmentData] = useState({
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
            await addCard(data); // Still calling addCard
            navigate("/allAssignments");
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
            <AssignmentForm
                values={assignmentData}
                onChange={setAssignmentData}
                onSubmit={() => handleSubmit(assignmentData)}
                busy={busy}
                submitText="Add Assignment"
            />
        </main>
    );
}