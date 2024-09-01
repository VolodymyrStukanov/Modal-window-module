import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ModalWindow } from "./modules/ModalWindow/ModalWindow";
import { ModalWindowController } from "./modules/ModalWindow/ModalWindowController";
import { ParentModalWindowContent } from "./modules/ParentModalWindowContent";
import { HugeFormContent } from "./modules/HugeFormContent";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [isOpenParent, setIsOpenParent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpenParent) {
      ModalWindowController.showRenderableModal({
        styles: {
          width: "20vw"
        },
        onClose: OnCloseParent,
        page: <ParentModalWindowContent />,
        modalId: "ParentWindow"
      });
    } else {
      ModalWindowController.hideModal("ParentWindow");
    }
    
    if (isOpen) {
      ModalWindowController.showRenderableModal({
        styles: {
          width: "40vw"
        },
        onClose: OnClose,
        page: <HugeFormContent/>,
      });
    } else {
      ModalWindowController.hideModal();
    }

  }, [isOpen, isOpenParent]);

  const OpenParentModal = () => {
    setIsOpenParent(true);        
  }
  
  const OpenModal = () => {
    setIsOpen(true);        
  }

  const OnCloseParent = () => {
    setIsOpenParent(false);        
  }
  
  const OnClose = () => {
    setIsOpen(false);        
  }

  return (
    <div className="App">

      <ModalWindow id={"ParentWindow"}/>
      <ModalWindow/>
      <div>

        <Button className={"w-10 m-3"} color="primary" type="button"
          onClick={() => OpenParentModal()}>
            Open window with "ParentWindow" id
        </Button>
        
        <Button className={"w-10 m-3"} color="primary" type="button"
          onClick={() => OpenModal()}>
            Open window without id
        </Button>

      </div>

    </div>
  );
}

export default App;
