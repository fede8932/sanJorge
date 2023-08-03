import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./actionModal.module.css";
import AddProductViewModalContainer from "../../containers/AddProductViewModalContainer";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";
import EditUserViewContainer from "../../containers/EditUserViewContainer";

const MyVerticallyCenteredModal = (props) => {
  console.log(props);
  const { title, type } = props;
  //size es: 'sm' | 'lg' | 'xl'
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ color: "#3C3C3C" }}
          id="contained-modal-title-vcenter"
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type == "add" ? <AddProductViewModalContainer /> : null}
        {type == "update" ? <EditUserViewContainer /> : null}
      </Modal.Body>
      {type == "update" ? null : (
        <Modal.Footer>
          <Button onClick={props.onHide}>Guardar</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

function ActionModalComponent(props) {
  const { icon, title, type } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <IconButonUsersTable
        fn={() => setModalShow(true)}
        icon={icon}
        iconInitialStyle="iconStyleBlue"
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
