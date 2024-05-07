import PropTypes from "prop-types";
export default function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div>
    <div className="max-w-sm p-5  border border-gray-200 rounded-lg shadow bg-gray-800  hover:bg-gray-700">
      <div className="md:flex">
        <div className="p-5">
          
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white ">{note.title}</h3>
          <p className="mt-2 text-gray-400">{note.content}</p>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{formattedDate}</div>
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
Note.propTypes = {
  note: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};
