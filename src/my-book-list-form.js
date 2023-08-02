import "./my-book-list-form.css";
import { useState } from "react";
import { SubmittedBookList } from "./submitted-book-list";

export function MyBookListForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [submittedLists, setSubmittedLists] = useState([]);

  const onSubmitButtonClicked = () => {
    const updateList = [
      ...submittedLists,
      {
        title,
        author,
        isbn,
      },
    ];
    setSubmittedLists(updateList);
  };
  return (
    <div className="my-book-list-form">
      <h1>MyBookList</h1>
      <label className="label-component">Title</label>
      <input
        placeholder="Enter Title Name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <label className="label-component">Author</label>
      <input
        placeholder="biko kedu afa gii"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      ></input>
      <label className="label-component">ISBN</label>
      <input
        placeholder="well done oo"
        onChange={(e) => setISBN(e.target.value)}
        value={isbn}
      ></input>
      <button onClick={onSubmitButtonClicked}>Submit</button>
      <SubmittedBookList bookListArray={submittedLists} />
    </div>
  );
}
