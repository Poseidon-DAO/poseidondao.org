import { Dialog, Pane } from "evergreen-ui";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ICustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  style?: any;
  body?: any;
  footer?: any;
}

export default function CustomModal({
  isOpen,
  onClose,
  header,
  style,
  body,
  footer,
}: ICustomModalProps) {
  return (
    <Pane>
      <Dialog
        isShown={isOpen}
        title={header}
        hasFooter={false}
        shouldCloseOnEscapePress
        shouldCloseOnOverlayClick
        onCloseComplete={onClose}
      >
        {body && (
          <Pane
            style={
              style
                ? style
                : {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
            }
          >
            {body}
          </Pane>
        )}
        {footer && (
          <Pane marginY="2rem" justifyContent="flex-end" display="flex">
            {footer}
          </Pane>
        )}
      </Dialog>
    </Pane>
  );
}
