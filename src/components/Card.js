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
                width: "100%", // let grid decide width
                boxSizing: "border-box",
            }}
        >
            {/* SINGLE ROW: 4 columns */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                {/* Column 1: Assignment Name */}
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>{card.assignmentname || "No Title"}</strong>
                </div>

                {/* Column 2: Due Date */}
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {card.duedate || "No Due Date"}
                </div>

                {/* Column 3: Status */}
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {card.status || "No Status"}
                </div>

                {/* Column 4: Buttons */}
                <div style={{ display: "flex", gap: "4px" }}>
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
        </div>
    );
}
