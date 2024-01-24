import React from 'react';
import {User} from "../../../shared/model/type/User";
import {Card} from "../../../entities/Card";
import cls from './UserList.module.scss'

interface UserListProps {
    userList: User[]
    disabled?:  boolean
}

const UserList = ({userList, disabled}: UserListProps) => {
    return (
        <div className={cls.wrapper}>
            {userList.map((user) => <Card
                key={user.id}
                user={user}
                disabled={disabled}/>)}
        </div>
    );
};

export default UserList;
