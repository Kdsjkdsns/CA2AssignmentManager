const API_BASE_URL = process.env.REACT_APP_API_URL || "";

// GET all assignments
export async function getAssignments() {
    const res = await fetch(`${API_BASE_URL}/assignments`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// ADD a new assignment
export function addAssignment(assignment) {
    return fetch(`${API_BASE_URL}/assignments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assignment),
    });
}

// UPDATE an assignment
export function updateAssignment(id, assignment) {
    return fetch(`${API_BASE_URL}/assignments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assignment),
    });
}

// DELETE an assignment
export function deleteAssignment(id) {
    return fetch(`${API_BASE_URL}/assignments/${id}`, {
        method: "DELETE",
    });
}
