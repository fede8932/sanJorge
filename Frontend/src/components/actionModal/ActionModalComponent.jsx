import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./actionModal.module.css";
import CustomButton from "../../commonds/button/CustomButton";
import AddProductViewModalContainer from "../../containers/AddProductViewModalContainer";

const MyVerticallyCenteredModal = (props) => {
  const { title, type } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title style={{color: "#3C3C3C"}} id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type == "add" ? (
          <AddProductViewModalContainer />
        ) : (
          <>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
};

function ActionModalComponent(props) {
  const { icon, title, type } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <CustomButton
        props={{
          buttonStyle: "menuButton",
          icon: icon,
          iconStyle: "menuIconVio",
          iconHoverStyle: "menuIconBla",
          fnSidebar: () => setModalShow(true),
        }}
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        type={type}
      />
    </>
  );
}

export default ActionModalComponent;
