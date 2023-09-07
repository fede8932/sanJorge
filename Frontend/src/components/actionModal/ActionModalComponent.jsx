import React from "react";
import Modal from "react-bootstrap/Modal";
import AddProductViewModalContainer from "../../containers/AddProductViewModalContainer";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";
import EditUserViewContainer from "../../containers/EditUserViewContainer";
import EditClientViewContainer from "../../containers/EditClientViewContainer";
import EditSupplierViewContainer from "../../containers/EditSupplierViewContainer";
import CustomCarrousel from "../../commonds/carrousel/CustomCarrousel";
import AddSupplierToBrandContainer from "../../containers/AddSupplierToBrandContainer";
import AddDataFacContainer from "../../containers/AddDataFacContainer";

const MyVerticallyCenteredModal = (props) => {
  const { title, type, data, size, repindex } = props;
  //size es: 'sm' | 'lg' | 'xl'
  return (
    <Modal
      {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {type !== "infoProduct" ? (
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#3C3C3C" }}
            id="contained-modal-title-vcenter"
          >
            {title}
          </Modal.Title>
        </Modal.Header>
      ) : (
        <></>
      )}
      <Modal.Body style={type === "infoProduct" ? { padding: "4px" } : {}}>
        {type == "infoProduct" ? <CustomCarrousel /> : null}
        {type == "add" ? <AddProductViewModalContainer /> : null}
        {type == "brand" ? (
          <AddSupplierToBrandContainer brand={data} close={props.onHide} />
        ) : null}
        {type == "updateSeller" ? (
          <EditUserViewContainer seller={data} close={props.onHide} />
        ) : null}
        {type == "updateClient" ? (
          <EditClientViewContainer client={data} close={props.onHide} />
        ) : null}
        {type == "updateSupplier" ? (
          <EditSupplierViewContainer
            supplier={data}
            close={props.onHide}
            template="supplier"
          />
        ) : null}
        {type == "updateRepresSupplier" ? (
          <EditSupplierViewContainer
            repindex={repindex}
            supplier={data}
            close={props.onHide}
            template="representative"
          />
        ) : null}
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
  const { icon, title, type, data, size, iconColor, disabled } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <IconButonUsersTable
        disabled={disabled}
        fn={() => setModalShow(true)}
        icon={icon}
        iconInitialStyle={iconColor ? iconColor : "iconStyleBlue"}
      />
      <MyVerticallyCenteredModal
        {...props}
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
