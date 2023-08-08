import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./actionModal.module.css";
import AddProductViewModalContainer from "../../containers/AddProductViewModalContainer";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";
import EditUserViewContainer from "../../containers/EditUserViewContainer";
import EditClientViewContainer from "../../containers/EditClientViewContainer";
import EditSupplierViewContainer from "../../containers/EditSupplierViewContainer";

const MyVerticallyCenteredModal = (props) => {
  const { title, type, data, size } = props;
  //size es: 'sm' | 'lg' | 'xl'
  return (
    <Modal
      {...props}
      size={size}
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
        {type == "updateSeller" ? <EditUserViewContainer seller={data} close={props.onHide}/> : null}
        {type == "updateClient" ? <EditClientViewContainer client={data} close={props.onHide}/> : null}
        {type == "updateSupplier" ? <EditSupplierViewContainer supplier={data} close={props.onHide}/> : null}
      </Modal.Body>
      {/* {type == "update" ? null : (
        <Modal.Footer>
          <Button onClick={props.onHide}>Guardar</Button>
        </Modal.Footer>
      )} */}
    </Modal>
  );
};

function ActionModalComponent(props) {
  const { icon, title, type, data, size } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <IconButonUsersTable
        fn={() => setModalShow(true)}
        icon={icon}
        iconInitialStyle="iconStyleBlue"
      />
      <MyVerticallyCenteredModal
        size={size}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        type={type}
        data={data}
      />
    </>
  );
}

export default ActionModalComponent;
