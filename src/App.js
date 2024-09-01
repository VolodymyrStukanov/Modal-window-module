import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ModalWindow } from "./modules/ModalWindow/ModalWindow";
import { ModalWindowController } from "./modules/ModalWindow/ModalWindowController";
import { ParentModalWindowContent } from "./modules/ParentModalWindowContent";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      ModalWindowController.showRenderableModal({
        styles: {
          width: "20vw"
        },
        onClose: OnClose,
        page: <ParentModalWindowContent />,
        modalId: "ParentWindow"
      });
    } else {
      ModalWindowController.hideModal("ParentWindow");
    }
  }, [isOpen]);

  const OpenModal = () => {
    setIsOpen(true);        
  }

  const OnClose = () => {
    setIsOpen(false);        
  }

  return (
    <div className="App">

      <ModalWindow id={"ParentWindow"}/>
      <div>

        <Button className={"w-10 m-3"} color="primary" type="button"
          onClick={() => OpenModal()}>
            Open Parent window
        </Button>
      </div>

    </div>
  );
}

export default App;
