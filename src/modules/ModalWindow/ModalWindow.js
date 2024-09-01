
import { Modal } from "react-bootstrap";
import React, {useRef, useState, useImperativeHandle, useEffect} from 'react';
import {ModalWindowController} from "./ModalWindowController"
import "../../scss/scss.scss"

const ModalWindow = ({id = ""}) => {

    const modalRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [styles, setStyles] = useState({});
    const [onClose, setOnClose] = useState(() => {});
    const [page, setPage] = useState(() => {});

    useEffect(() => {
        ModalWindowController.setModalRef({ref: modalRef, id: id});
    });

    useImperativeHandle(
        modalRef,
        () => ({
            isOpen: () => {
                return isOpen;
            },
            show: ({styles, newOnClose, page}) => {
                setStyles(styles);
                if(newOnClose){
                    setOnClose(() => () => {                        
                        newOnClose();
                    });
                }
                setPage(page);
                setIsOpen(true);
            },
            hide: () => {
                setIsOpen(false);
                if(onClose)
                    onClose();
            },
        }),
        [isOpen]
    );

    return (
        <>
        <Modal ref={modalRef} style={styles} show={isOpen} onHide={() => {
                setIsOpen(false);
                if(onClose)
                    onClose();
            }}
            className="modalWindow">
                {page}
        </Modal>
        </>
    );

}
export {ModalWindow};