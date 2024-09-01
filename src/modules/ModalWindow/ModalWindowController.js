
class ModalWindowController{

    static modalsRefsIds = [];
    static #timerList = [];
    
    static setModalRef = (props) => {

        let modalIndex = this.modalsRefsIds.findIndex(x => x.id === props.id);
        if(modalIndex > -1){
            this.modalsRefsIds[modalIndex] = props;
        }
        else{
            if(!props.id){
                props.id = "";
            }
            this.modalsRefsIds.push(props);
        }
    }

    //for modal window content with hooks
    static showRenderableModal = ({styles, onClose, page, modalId}) => {
        
        let modal;
        if(modalId){
            modal = this.modalsRefsIds.find(x => x.id === modalId);
        }
        else{
            modal = this.modalsRefsIds.find(x => x.id === "");
        }
        if(modal){
            modal.ref.current?.show({styles, newOnClose: onClose, page});
        }
    }

    //for modal window content without hooks
    static showModal = ({styles, onClose, timer = 0, page, modalId}) => {

        console.log(this.modalsRefsIds);
        if(modalId){
            let modal = this.modalsRefsIds.find(x => x.id === modalId);
            if(modal)
            {
                this.#Wait(timer, modal, modalId);
                modal.ref.current?.show({styles, newOnClose: onClose, page});
            }
            else{
                console.error(`There is no a ModalWindow with id ${modalId}`)
            }
        }
        else{
            let modal = this.modalsRefsIds.find(x => x.id === "");
            if(modal){
                modal.ref.current?.show({styles, newOnClose: onClose, page});
            }
        }
    }

    static #Wait(timer, modal, modalId){
        
        if(timer !== 0){
            this.#timerList.push({id: modalId, timer: timer})
            setTimeout(() => {
                if(modal.ref.current?.isOpen() && this.#timerList.filter(x => x.id === modalId).length < 2){
                    modal.ref.current?.hide();
                }
                let timerIndex = this.#timerList.findIndex(x => x.id === modalId && x.timer === timer);
                this.#timerList.splice(timerIndex, 1);
            }, timer);
        }
    }

    static hideModal = (modalId) => {

        if(modalId){
            let modal = this.modalsRefsIds.find(x => x.id === modalId);
            if(modal && modal.ref.current?.isOpen()){
                modal.ref.current?.hide();
            }
        }
        else{
            this.modalsRefsIds.each(modal => {
                if(modal.ref.current?.isOpen()){
                    modal.ref.current?.hide();
                }
            })
        }
    }
}

export {ModalWindowController}