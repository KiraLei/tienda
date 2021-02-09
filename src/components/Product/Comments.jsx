import { useState } from "react";
import "../../styles/DetailAndComment.scss";

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
    <section className="section-comment">
      <ul className="ul-comment">
        <h2>Comentarios</h2>
        <li>
          <img className='img-comment' src={"https://i.pravatar.cc/50"} alt="foto" />
          <div>
            <p>Karla</p>
            <p>Fue la mejor compra que he hecho, me gusto !</p>
          </div>
         
        </li>

        {totalComments.map((comment, index) => (
          <>
            <li key={index}>
              <img className='img-comment' src={"https://i.pravatar.cc/50"} alt="foto" />
              <div>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            </li>
          </>
        ))}
      </ul>

      <form className="form-comment" onSubmit={handleSubmitComment}>
        <h2>Deja un comentario</h2>
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
          rows="5"
          value={formData.comment}
          onChange={handleChangeForm}
        />
        <input type="submit" value="Enviar comentario" />
      </form>
    </section>
  );
};
export default Comments;
