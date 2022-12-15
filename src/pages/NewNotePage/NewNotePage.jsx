import { useState } from 'react';

export default function NewNoteForm({ addNote }) {
  const [formData, setFormData] = useState('');

  function submitAddNote(evt) {
    evt.preventDefault();
    addNote(formData);
    setFormData('')
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <form className="NewSkillForm" onSubmit={submitAddNote}>
      <label>Note</label>
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="New Note"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}