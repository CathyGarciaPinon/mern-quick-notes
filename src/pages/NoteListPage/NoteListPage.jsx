import NoteItemPage from "../NoteItemPage/NoteItemPage"
import './NoteListPage.css';

export default function NoteListPage({ user, notes, handleDelete }) {
  return (
    <>
      <h1>All of {user.name}'s Notes</h1>
      <ul><NoteItemPage notes={notes} handleDelete={handleDelete}/></ul>
    </>
  );
}