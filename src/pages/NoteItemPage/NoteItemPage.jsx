export default function NoteItemPage({ notes, handleDelete }) {



  return (
      <>
      { notes.length ?
      notes.map((n, idx) => 
          <li className="NoteListItem" key={idx}>
              <span>Entered: {new Date(n.updatedAt).toLocaleDateString()}</span>
              &nbsp; -- &nbsp;
              <span>{n.text}</span>
              <button onClick={() => handleDelete(n._id)}>Delete</button>
          </li>)         
      :
      <h3>No Notes Yet!</h3>
      }
      </>
  );
}