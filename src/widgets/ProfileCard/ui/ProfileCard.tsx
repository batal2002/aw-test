import React from 'react';
import cls from './ProfileCard.module.scss'
import avatar from '../../../shared/assets/images/avatar.png'
import {Link} from "react-router-dom";

const ProfileCard = () => {

    return (
        <div className={cls.wrapper}>
            <img src={avatar} alt="avatar" className={cls.avatar}/>
            <div className={cls.list}>
                <Link to={'./'} className={cls.item + ' ' + cls.active}>Данные профиля</Link>
                <Link to={'./'} className={cls.item}>Рабочее пространство</Link>
                <Link to={'./'} className={cls.item}>Приватность</Link>
                <Link to={'./'} className={cls.item}>Безопасность</Link>
            </div>
        </div>
    );
};

export default ProfileCard;
