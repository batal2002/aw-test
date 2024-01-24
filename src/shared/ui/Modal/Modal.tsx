import React, {Dispatch, SetStateAction, useEffect} from 'react';
import cls from './Modal.module.scss'

interface ModalProps {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal = ({openModal, setOpenModal}: ModalProps) => {

    const closeModal = () => {
        setOpenModal(false)
        document.body.style.overflow = 'auto';
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            closeModal()
        }, 4000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div className={cls.overlay} onClick={closeModal}>
            <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
                <button className={cls.button} onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M18.7433 10.494C19.085 10.1523 19.085 9.59823 18.7433 9.25653C18.4016 8.91482 17.8476 8.91482 17.5059 9.25653L13.9998 12.7626L10.4937 9.25653C10.152 8.91482 9.598 8.91482 9.25629 9.25653C8.91458 9.59823 8.91458 10.1523 9.25629 10.494L12.7624 14L9.25628 17.5061C8.91457 17.8478 8.91457 18.4018 9.25628 18.7435C9.59799 19.0852 10.152 19.0852 10.4937 18.7435L13.9998 15.2375L17.5059 18.7435C17.8476 19.0853 18.4016 19.0853 18.7433 18.7435C19.085 18.4018 19.085 17.8478 18.7433 17.5061L15.2372 14L18.7433 10.494Z"
                            fill="#595959"/>
                    </svg>
                </button>
                <svg className={cls.image} xmlns="http://www.w3.org/2000/svg" width="85" height="84" viewBox="0 0 85 84"
                     fill="none">
                    <path
                        d="M26.1087 13.1907C36.9151 11.983 48.085 11.983 58.8914 13.1907C62.9487 13.6442 66.5103 15.8383 68.7633 19.0246L40.7501 47.0378L32.1063 38.394C31.0812 37.3688 29.4191 37.3688 28.394 38.394C27.3688 39.4191 27.3688 41.0811 28.394 42.1063L38.894 52.6063C39.9191 53.6314 41.5812 53.6314 42.6063 52.6063L71.0103 24.2023C71.089 24.5857 71.1517 24.9751 71.1979 25.3698C72.4902 36.419 72.4902 47.5812 71.1979 58.6304C70.4459 65.0598 65.2838 70.095 58.8914 70.8095C48.085 72.0173 36.9151 72.0173 26.1087 70.8095C19.7164 70.095 14.5542 65.0598 13.8022 58.6304C12.5099 47.5812 12.5099 36.419 13.8022 25.3698C14.5542 18.9404 19.7164 13.9052 26.1087 13.1907Z"
                        fill="#C6F4C6"/>
                </svg>

                <span className={cls.text}>Изменения сохранены!</span>
            </div>
        </div>
    );
};

export default Modal;
