CA2 Assignment Manager

---

## Routes (Required)

- `/` Home
- `/login` Login
- `/allAssignments` All Assignments
- `/addAssignments` Add Assignments
- `/editAssignments` Edit Assignments

## Backend API Contract (Required)

- `GET    /assignments`
- `POST   /assignments`
- `PUT    /assignments/:id`
- `DELETE /assignments/:id`

Expected assignment JSON shape:

```json
{ "id": 1, "assignmentname": "aaa", "duedate": "2026-01-31", "status": "Pending" }
```

Work done:
QiYan: AddAssignment / AssignmentForm / Home
Matthew: Server / Assignment / Api
ChunLin: Navbar / EditAssignment / App / Styles (App.css) / Login
