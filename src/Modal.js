import "./styles.css";

export default function Modal({ modalDisplay, closeModal, modalImg }) {
  // function closeModal() {
  //   setModalDisplay("none");
  // }

  return (
    <div id="myModal" className="modal" style={{ display: modalDisplay }}>
      <span onClick={closeModal} className="close">
        &times;
      </span>
      <img
        src={modalImg}
        className="modal-content"
        id="img01"
        alt="modal-img"
      />
    </div>
  );
}
