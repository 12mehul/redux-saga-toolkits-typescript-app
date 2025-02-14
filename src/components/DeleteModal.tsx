import { Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store/store";
import { singleUserDelRequest } from "../redux/slices/userSlice";

interface DeleteModalProps {
  show: boolean;
  userId: number;
  handleClose: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const loader = useSelector<AppState>(
    (state) => state.user.delLoader
  ) as boolean;

  const handleDelete = () => {
    if (loader) return;
    if (props.userId) {
      dispatch(singleUserDelRequest(props.userId));
      props.handleClose();
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>Are you sure to want delete this data!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="danger" disabled={loader} onClick={handleDelete}>
          {loader ? <Spinner animation="border" size="sm" /> : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
