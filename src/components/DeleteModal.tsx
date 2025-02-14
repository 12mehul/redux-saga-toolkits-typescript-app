import { Button, Modal } from "react-bootstrap";

interface DeleteModalProps {
  show: boolean;
  userId: number;
  handleClose: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>Are you sure to want delete this data!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={props.handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
