import main from "./Assets/main.png";
import bluebox from "./Assets/bluebox.png";
import prize from "./Assets/prize.png";
import { useState } from "react";
import Modal from "./Modal";

export default function MainSection() {
  const [modalImg, setModalImg] = useState("");
  const [modalDisplay, setModalDisplay] = useState("none");

  function openModal(e) {
    setModalImg(e.target.getAttribute("src"));
    setModalDisplay("block");
  }

  function closeModal() {
    setModalDisplay("none");
  }
  return (
    <>
      <Modal
        modalDisplay={modalDisplay}
        closeModal={closeModal}
        modalImg={modalImg}
      />
      <section
        className="main-section"
        style={{
          backgroundImage: `url(${main})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          className="epl-container"
          style={{ width: "600px", marginLeft: "100px", marginTop: "100px" }}
        >
          <div
            className="epl"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              backgroundImage: `url(${bluebox}) `,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
              padding: "20px",
              color: "white"
            }}
          >
            <div className="about" style={{ width: "150px" }}>
              <img
                src={"https://picsum.photos/id/1/120/100"}
                alt="modal-test"
                onClick={openModal}
              />
            </div>

            <div className="desc" style={{ width: "300px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div
              className="scoreboard"
              style={{
                backgroundImage: `url(${bluebox}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "300px",
                height: "200px",
                color: "white",
                borderRadius: "5px",
                padding: "20px",
                textAlign: "center"
              }}
            >
              Score Card "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam,
            </div>
            <div
              className="prizes"
              style={{
                backgroundImage: `url(${bluebox}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "300px",
                height: "200px",
                color: "white",
                borderRadius: "5px",
                padding: "20px",
                textAlign: "center"
              }}
            >
              <img src={prize} alt="prize" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
