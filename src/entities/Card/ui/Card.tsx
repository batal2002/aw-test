import React from 'react';
import cls from './Card.module.scss'
import avatar from '../../../shared/assets/images/avatar.png'
import Dropdown from "../../../shared/ui/Dropdown/Dropdown";
import {addUser, hideUser} from "../../Users/model/slice/UsersSlice";
import {useAppDispatch} from "../../../shared/lib/redux";
import {activateUser, archiveUser} from "../../ArchiveUsers/model/slice/ArchiveUsersSlice";
import {User} from "../../../shared/model/type/User";
import {Link} from "react-router-dom";

interface CardProps {
    user: User
    disabled?: boolean
}

const Card = ({user, disabled}: CardProps) => {
    const dispatch = useAppDispatch()
    const {id, username, company, address} = user

    const ActivateUserClick = () => {
        dispatch(activateUser(id))
        dispatch(addUser(user))
    }
    const ArchiveUserClick = () => {
        dispatch(archiveUser(user))
        dispatch(hideUser(id))
    }

    const hideUserClick = () => {
        dispatch(hideUser(id))
    }

    return (
        <div className={disabled ? cls.wrapper + ' ' + cls.disabled : cls.wrapper}>
            <div className={cls.avatar}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cls.info}>
                <div className={cls.header}>
                    <span className={cls.name}>{username}</span>
                    <Dropdown>
                        {disabled ?
                            <button className={cls.dropdownItem} onClick={ActivateUserClick}>Активировать</button> :
                            <>
                                <Link to={`/profile/${id}`} className={cls.dropdownItem}>Редактировать</Link>
                                <button className={cls.dropdownItem} onClick={ArchiveUserClick}>Архивировать
                                </button>
                                <button className={cls.dropdownItem} onClick={hideUserClick}>Скрыть</button>
                            </>
                        }
                    </Dropdown>
                </div>
                <span className={cls.company}>{company.name}</span>
                <p className={cls.city}>{address.city}</p>
            </div>
        </div>
    );
};

export default Card;
