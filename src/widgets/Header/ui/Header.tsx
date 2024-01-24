import React from 'react';
import Logo from "../../../shared/ui/Logo/Logo";
import cls from './Header.module.scss'
import favorite from '../../../shared/assets/icons/favorite.svg'
import notification from '../../../shared/assets/icons/notification.svg'
import avatar from '../../../shared/assets/images/avatar.png'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../shared/lib/redux";

const Header = () => {
    const {isMobile} = useAppSelector(state => state.app)
    return (
        <div className={cls.header}>
            <div className={cls.wrapper}>
                <Logo/>
                <div className={cls.menu}>
                    {!isMobile && <div className={cls.links}>
                        <Link to='#' className={cls.link}>
                            <img src={favorite} alt=""/>
                        </Link>
                        <Link to='#' className={cls.link}>
                            <img src={notification} alt=""/>
                        </Link>
                    </div>}
                    <div className={cls.user}>
                        <img src={avatar} className={cls.avatar} alt=""/>
                        {!isMobile && <span className={cls.name}>Ivan1234</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
