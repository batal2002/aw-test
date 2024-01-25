import React from 'react';
import cls from './MainPage.module.scss'
import UserList from "../../../widgets/UserList/ui/UserList";
import {useAppSelector} from "../../../shared/lib/redux";
import {Loader} from "../../../shared/ui/Loader/Loader";

const MainPage = () => {
    const {users, isLoading, error} = useAppSelector(state => state.users)
    const {users: archiveUsers} = useAppSelector(state => state.archiveUser)

    return (
        <>
            <h3 className={cls.title}>Активные</h3>
            {error && <span className={cls.error}>{error}</span>}
            {users.length === 0 && !error && !isLoading && <span className={cls.error}>Нет активных пользователей</span>}
            {isLoading ?
                <div className={cls.loader}>
                    <Loader size={70}/>
                </div> :
                <UserList userList={users}/>}
            {archiveUsers.length > 0 &&
                <>
                    <h3 className={cls.title}>Архив</h3>
                    <UserList userList={archiveUsers} disabled={true}/>
                </>
            }
        </>
    );
};

export default MainPage;
