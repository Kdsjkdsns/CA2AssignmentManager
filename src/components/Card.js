import { useNavigate } from "react-router-dom";

export default function Card({ card, onDelete, disabled }) {
    const navigate = useNavigate();

    return (
        <div
            className="card"
            style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "6px",
                width: "180px",
            }}
        >
            {/* ROW 1: Assignment info */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                }}
            >
                <div style={{ flex: 2 }}>
                    <strong>{card.assignmentname || "No Title"}</strong>
                </div>

                <div style={{ flex: 1 }}>
                    {card.duedate || "No Due Date"}
                </div>

                <div style={{ flex: 1 }}>
                    {card.status || "No Status"}
                </div>
            </div>

            {/* ROW 2: Buttons */}
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "8px",
                }}
            >
                <button
                    onClick={onDelete}
                    disabled={disabled}
                    style={{
                        flex: 1,
                        padding: "6px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#f44336",
                        color: "#fff",
                        cursor: disabled ? "not-allowed" : "pointer",
                    }}
                >
                    {disabled ? "Deleting..." : "Delete"}
                </button>

                <button
                    onClick={() => navigate(`/editCard/${card.id}`)}
                    style={{
                        flex: 1,
                        padding: "6px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}
