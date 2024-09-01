
import {Button, Card} from "react-bootstrap";
import { ModalWindowController } from "./ModalWindow/ModalWindowController";

const ChildModalWindowContent = () => {

    const onClose = () => {
        ModalWindowController.hideModal("ChildWindow");
    }

    return(
    <>
    <Card>                    
      <Card.Body>
            <div className="h3">Child modal window</div>
            <div>
                <Button className={"w-100"} color="primary" type="button"
                    onClick={() => onClose()}>
                        Close
                </Button>
            </div>    
        </Card.Body>
      </Card>        
    </>)
}

export {ChildModalWindowContent}