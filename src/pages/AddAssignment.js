import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";
import { addAssignment } from "../services/api"; 

export default function AddAssignment() {
    const navigate = useNavigate();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    const [assignmentData, setAssignmentData] = useState({
        assignmentname: "",
        duedate: "",
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
            await addAssignment(data);
            navigate("/allAssignments");
        } catch (err) {
            console.error(err);
            setError("Failed to add assignment");
        } finally {
            setBusy(false);
        }
    };

    return (
        <main className="edit-page">
            <div className="edit-container">
                <h1 className="edit-title">Add Assignment</h1>

                {error && <p className="edit-error">{error}</p>}

                <AssignmentForm
                    values={assignmentData}
                    onChange={setAssignmentData}
                    onSubmit={() => handleSubmit(assignmentData)}
                    busy={busy}
                    submitText="Add Assignment"
                />
            </div>
        </main>
    );
}
