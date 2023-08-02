export function SubmittedBookList(props) {
  const { bookListArray } = props;
  if (bookListArray === undefined || bookListArray.length === 0) {
    return <></>;
  }
  return (
    <div>
      <table>
        {bookListArray?.map((book) => {
          return (
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
            </tr>
          );
        })}

        {/* <tbody className="myBooklistContainer"></tbody> */}
      </table>
    </div>
  );
}
