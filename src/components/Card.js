import { useNavigate } from "react-router-dom";

export default function Card({ card, onDelete, disabled }) {
    const navigate = useNavigate();

    return (
        return (
    <div
        className="card"
        style={{
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "6px",
            width: "180px",
            textAlign: "center",
        }}
    >
        {/* Assignment info in ONE ROW */}
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
                textAlign: "left",
            }}
        >
            <h3 style={{ margin: 0, flex: 2 }}>
                {assignments.assignmentname || "No Title"}
            </h3>

            <div style={{ flex: 1 }}>
                {assignments.duedate || "No Due Date"}
            </div>

            <div style={{ flex: 1 }}>
                {assignments.status || "No Status"}
            </div>
        </div>

        {/* Leave this untouched */}
        {card.cardpic ? (
            <img
                src={card.cardpic}
                alt={card.cardname || "Card image"}
                width="150"
                height="200"
            />
        ) : (
            <div>No Image</div>
        )}

            {/* Buttons side by side */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                <button
                    onClick={onDelete}
                    disabled={disabled}
                    style={{
                        flex: 1,
                        marginRight: "4px",
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
                        marginLeft: "4px",
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
