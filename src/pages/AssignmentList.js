import { useEffect, useState } from "react";
import { getAssignments, deleteAssignment } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AssignmentList() {
    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAssignments() {
            try {
                const data = await getAssignments();

                // Sort assignments
                const sorted = data.sort((a, b) => {
                    if (a.status === b.status) {
                        // If both have same status, sort by due date
                        return new Date(a.duedate) - new Date(b.duedate);
                    }
                    // Pending first
                    return a.status === "Pending" ? -1 : 1;
                });

                setAssignments(sorted);
            } catch (err) {
                console.error(err);
                setError("Failed to load assignments");
            }
        }

        fetchAssignments();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteAssignment(id);
            setAssignments(assignments.filter(a => a.id !== id));
        } catch (err) {
            console.error(err);
            setError("Failed to delete assignment");
        }
    };

    return (
        <main className="list-page">
            <h1>All Assignments</h1>
            {error && <p className="edit-error">{error}</p>}

            <ul>
                {assignments.map((a) => (
                    <li key={a.id} style={{ marginBottom: "12px" }}>
                        <strong>{a.assignmentname}</strong> - {a.duedate} - {a.status}
                        <button onClick={() => navigate(`/edit/${a.id}`)}>Edit</button>
                        <button onClick={() => handleDelete(a.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
