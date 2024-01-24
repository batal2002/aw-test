import React, {useEffect, useState} from 'react';
import cls from './ProfileForm.module.scss'
import Input from "../../../shared/ui/Input/Input";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../../shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/redux";
import {Loader} from "../../../shared/ui/Loader/Loader";
import Modal from "../../../shared/ui/Modal/Modal";
import {updateUser} from "../../../entities/User/model/services/updateUser";

interface FormInputs {
    name: string
    username: string
    email: string
    city: string
    phone: string
    company: string
}

const ProfileForm = () => {
    const {user, isUpdating, updateStatus, updatingError, isLoading} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const methods = useForm<FormInputs>({
        defaultValues: {
            name: user?.name || '',
            username: user?.username || '',
            email: user?.email || '',
            city: user?.address.city || '',
            phone: user?.phone || '',
            company: user?.company.name || '',
        },
    })
    const {handleSubmit} = methods
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        if (user) {
            dispatch(updateUser({
                id: user.id,
                username: data.username,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: {city: data.city},
                company: {name: data.company}
            }))
        }
    }

    useEffect(() => {
        if (updateStatus && !isUpdating && 200 <= updateStatus && updateStatus <= 299) {
            setOpenModal(true)
            document.body.style.overflow = 'hidden';
        }
        return () => {
            setOpenModal(false)
        }
    }, [updateStatus, isUpdating])

    return (
        <div className={cls.wrapper}>
            <h3 className={cls.title}>Данные профиля</h3>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                    <Input type={'text'} title={'Имя'} name='name'/>
                    <Input type={'text'} title={'Никнейм'} name='username'/>
                    <Input type={'text'} title={'Почта'} name='email'/>
                    <Input type={'text'} title={'Город'} name='city'/>
                    <Input type={'text'} title={'Телефон'} name='phone'/>
                    <Input type={'text'} title={'Название компании'} name='company'/>
                    {isUpdating ?
                        <div className={cls.loader}>
                            <Loader size={46}/>
                        </div> :
                        <div className={cls.buttonWrapper}>
                            <Button type={'submit'}>Сохранить</Button>
                            {updatingError && <p className={cls.error}>{updatingError}</p>}
                        </div>
                    }
                </form>
            </FormProvider>
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
    );
};

export default ProfileForm;
