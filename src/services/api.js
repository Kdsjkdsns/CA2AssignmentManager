const API_BASE_URL = process.env.REACT_APP_API_URL || "";

function authHeader() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function login(credentials) {
    return fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
}

export async function getCards() {
    const res = await fetch(`${API_BASE_URL}/allCard`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export function addCard(card) {
    return fetch(`${API_BASE_URL}/addcard`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify(card),
    });
}

export function updateCard(id, card) {
    return fetch(`${API_BASE_URL}/updatecard/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
    });
}

export function deleteCard(id) {
    return fetch(`${API_BASE_URL}/deletecard/${id}`, { method: "DELETE" });
}
