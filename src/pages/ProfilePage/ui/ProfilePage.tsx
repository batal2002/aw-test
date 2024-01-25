import React, {useEffect} from 'react';
import {GoBackButton} from "../../../features/GoBackButton";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/redux";
import {fetchUser} from "../../../entities/User/model/services/fetchUserData";
import {ProfileCard} from "../../../widgets/ProfileCard";
import cls from './ProfilePage.module.scss'
import {ProfileForm} from "../../../widgets/ProfileForm";
import {Loader} from "../../../shared/ui/Loader/Loader";
import {resetUserError} from "../../../entities/User/model/slice/UserSlice";
import {resetProfileFormState} from "../../../widgets/ProfileForm/model/slice/ProfileFormSlice";



const ProfilePage = () => {
    const id = useParams().id
    const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.user)


    useEffect(() => {
        if (id) {
            dispatch(fetchUser(id))
        }
    }, [id])

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(resetUserError())
            }
            dispatch(resetProfileFormState())
        }
    }, [])

    return (
        <>
            <GoBackButton/>
            {isLoading ?
                <div className={cls.loader}>
                    <Loader size={70}/>
                </div> :
                error ?
                    <span>{error}</span> :
                    <div className={cls.wrapper}>
                        <ProfileCard/>
                        <ProfileForm/>
                    </div>
            }

        </>
    );
};

export default ProfilePage;
