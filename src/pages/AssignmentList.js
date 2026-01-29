import { useEffect, useState } from "react";
import Assignment from "../components/Assignment";
import { getAssignments, deleteAssignment } from "../services/api";

export default function AssignmentList() {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getAssignments()
            .then(setAssignments)
            .catch(() => setError("Failed to load assignments"))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (assignment) => {
        setBusy(true);
        try {
            await deleteAssignment(assignment.id);
            setAssignments(assignments.filter(a => a.id !== assignment.id));
        } catch {
            setError("Failed to delete assignment");
        } finally {
            setBusy(false);
        }
    };

    if (loading) return <main>Loading...</main>;
    if (error) return <main>{error}</main>;

    return (
        <main className="assignmentlist-page">
            <div className="assignmentlist-container">
                <h2 className="assignmentlist-title">All Assignments</h2>

                {loading && <p className="assignmentlist-status">Loading...</p>}
                {error && <p className="assignmentlist-status error">{error}</p>}

                <div className="assignmentlist-grid">
                    {assignments.map(assignment => (
                        <Assignment
                            key={assignment.id}
                            assignment={assignment}
                            onDelete={() => handleDelete(assignment)}
                            disabled={busy}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
