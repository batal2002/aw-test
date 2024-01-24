import React from 'react';
import cls from "./GoBackButton.module.scss";
import {useNavigate} from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <button className={cls.button} onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                <path d="M13.125 11H0.875" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17.125L0.875 11L7 4.875" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            Назад
        </button>
    );
};

export default GoBackButton;
