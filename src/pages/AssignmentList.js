import { useEffect, useState } from "react";
import { getAssignments, deleteAssignment } from "../services/api";
import Assignment from "../components/Assignment"; // your existing component
import { useNavigate } from "react-router-dom";

export default function AssignmentList() {
    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAssignments() {
            try {
                const data = await getAssignments();

                // Sort: Pending first by earliest due date, then Completed
                const sorted = data.sort((a, b) => {
                    if (a.status === b.status) {
                        return new Date(a.duedate) - new Date(b.duedate);
                    }
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

            <div className="assignment-grid">
                {assignments.map((assignment) => (
                    <Assignment
                        key={assignment.id}
                        assignment={assignment}
                        onDelete={() => handleDelete(assignment.id)}
                        onEdit={() => navigate(`/edit/${assignment.id}`)}
                    />
                ))}
            </div>
        </main>
    );
}
