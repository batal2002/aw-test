import React from 'react';
import icon from '../../assets/icons/logo.svg'
import cls from './Logo.module.scss'
import {Link} from "react-router-dom";
const Logo = () => {
    return (
        <Link to={'/'} className={cls.wrapper}>
            <img src={icon} alt=""/>
            <div className={cls.title}>
                <span>at-</span>
                <span className={cls.bold}>work</span>
            </div>
        </Link>
    );
};

export default Logo;
