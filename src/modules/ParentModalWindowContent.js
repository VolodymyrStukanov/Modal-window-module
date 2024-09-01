
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { ModalWindow } from "./ModalWindow/ModalWindow";
import { ModalWindowController } from "./ModalWindow/ModalWindowController";
import { ChildModalWindowContent } from "./ChildModalWindowContent";

const ParentModalWindowContent = () => {

  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        ModalWindowController.showRenderableModal({
          styles: {
            width: "25vw"
          },
          onClose: OnCloseChild,
          page: <ChildModalWindowContent />,
          modalId: "ChildWindow"
        });
      } else {
        ModalWindowController.hideModal("ChildWindow");
      }
    }, [isOpen]);

    const OnCloseChild = () => {
      console.log(`child window is closing`);
      setIsOpen(false);
    }

    const OnClose = () => {
      ModalWindowController.hideModal("ParentWindow");
    }

    const OpenModal = () => {
      setIsOpen(true);
    }

    return(
    <>
      <ModalWindow id={"ChildWindow"}/>
      <Card>                    
        <Card.Body>

        <div className="h3">Parent window</div>
        <div>
          <div className="m-2">
            <Button className={"w-100"} color="primary" type="button"
              onClick={() => OpenModal()}>
                Open child window
            </Button>
          </div>
          <div className="m-2">
            <Button className={"w-100"} color="primary" type="button"
              onClick={() => OnClose()}>
                Close
            </Button>
          </div>
        </div>
        </Card.Body>
      </Card>        
    </>)
}

export {ParentModalWindowContent}