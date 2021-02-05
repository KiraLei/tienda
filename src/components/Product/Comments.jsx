import { useState } from "react";
import  "../../styles/DetailAndComment.scss";

const Comments = () => {
  //const [nombre, setName] = useState("");
  //const [comment, setComment] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });
  const [totalComments, setTotalComments] = useState([]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    //console.log(comment);
    if (formData.comment.length >= 6) {
      setTotalComments([...totalComments, formData]);
      setFormData({ comment: "", name: "" });
    } else {
      alert("El comentario debe  tener minimo 10 caracteres");
    }
  }; /*
  const handleChangeComment = (e) => {
    setFormData({ ...formData, comment: e.target.value });
  };

  const handleChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  }; */
  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Deja un comentario</h2>
      <ul className="ul-comment">
        {totalComments.map((comment, index) => (
          <li key={index}>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmitComment}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeForm}
          
        />
        <label>Comentario</label>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          value={formData.comment}
          onChange={handleChangeForm}
        />
        <input type="submit" value="Enviar comentario" />
      </form>
    </section>
  );
};
export default Comments;
