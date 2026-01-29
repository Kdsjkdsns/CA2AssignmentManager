import React from "react";


export default function AssignmentForm({ 
  values, 
  onChange, 
  onSubmit, 
  busy = false, 
  error = "",
  submitText = "Submit"
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>      
      <div>
        <label>Assignment Name</label>
        <input
          type="text"
          name="assignmentname" 
          value={values.assignmentname || ""}
          onChange={handleChange}
          required
          disabled={busy}
          placeholder="Enter assignment name"
        />
      </div>
      
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="duedate"  
          value={values.duedate || ""}
          onChange={handleChange}
          required
          disabled={busy}
          placeholder="DD-MM-YYYY"
        />
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={values.status || "Pending"}
          onChange={handleChange}
          disabled={busy}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

        <button type="submit" disabled={busy}>
          {busy ? "Saving..." : submitText}
        </button>
    </form>
  );
};
