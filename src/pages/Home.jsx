import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h2 className='font-serif font-bold text-center text-3xl mt-5'>Create a Note</h2>
      <form onSubmit={createNote}>
        <div className=" max-w-screen-sm mx-auto card bg-base-300 my-4">
          <div className="card-body">
            <label
              htmlFor="title"
              className="input input-bordered flex items-center gap-2"
            >
              Title :
              <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label htmlFor="content">Content : </label>
            <textarea
              id="content"
              name="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered"
            ></textarea>
            <br />
            <input type="submit" value="Submit" className="btn btn-success" />
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4 mt-10">
        <h2 className='font-sans text-2xl font-bold'>Notes:-</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
    </div>
  );
}
