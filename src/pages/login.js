import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setBusy(true);
        setError("");

        try {
            const res = await login({ username, password });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            localStorage.setItem("token", data.token);
            navigate("/allAssignments");
        } catch (error) {
            console.error("Login failed", error);
            setError("Invalid username or password");
        } finally {
            setBusy(false);
        }
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "300px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "#fff",
        cursor: "pointer",
    };

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
    };

    return (
        <main style={mainStyle}>
            <h2 style={{ marginBottom: "20px" }}>Login</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    style={inputStyle}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    style={inputStyle}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button style={buttonStyle} disabled={busy} type="submit">
                    {busy ? "Logging in..." : "Login"}
                </button>
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </form>
        </main>
    );
}
