import { useNavigate } from "react-router-dom";

export default function Card({ card, onDelete, disabled }) {
    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="card-grid">
                {/* Column 1: Assignment Name */}
                <div className="card-column card-name">
                    <strong>{card.assignmentname || "No Title"}</strong>
                </div>

                {/* Column 2: Due Date */}
                <div className="card-column">{card.duedate || "No Due Date"}</div>

                {/* Column 3: Status */}
                <div className="card-column">{card.status || "No Status"}</div>

                {/* Column 4: Buttons */}
                <div className="card-column card-actions">
                    <button
                        onClick={onDelete}
                        disabled={disabled}
                        className="card-btn delete-btn"
                    >
                        {disabled ? "Deleting..." : "Delete"}
                    </button>
                    <button
                        onClick={() => navigate(`/editCard/${card.id}`)}
                        className="card-btn edit-btn"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
