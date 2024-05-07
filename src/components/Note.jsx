import PropTypes from "prop-types";
export default function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div 
      className="p-4 border border-gray-300 rounded-md shadow-md m-25"
    >
      <p className="text-lg font-semibold mb-2">{note.title}</p>
      <p className="text-gray-700 mb-4">{note.content}</p>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <button
        className="btn btn-neutral" 
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
  </div>
  );
}
Note.propTypes = {
  note: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};
