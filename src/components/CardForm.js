import React from "react";


export default function CardForm({ 
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <div>
        <label htmlFor="cardname">Card Name</label>
        <input
          type="text"
          id="cardname"
          name="cardname"  // MUST match: cardname
          value={values.cardname || ""}
          onChange={handleChange}
          required
          disabled={busy}
          placeholder="Enter card name"
        />
      </div>
      
      <div>
        <label htmlFor="cardpic">Picture URL</label>
        <input
          type="url"
          id="cardpic"
          name="cardpic"  // MUST match: cardpic
          value={values.cardpic || ""}
          onChange={handleChange}
          disabled={busy}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <button type="submit" disabled={busy}>
          {busy ? "Saving..." : submitText}
        </button>
      </div>
    </form>
  );
};