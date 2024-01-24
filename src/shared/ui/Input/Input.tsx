import React, {ChangeEvent, useRef, useState} from 'react';
import cls from './Input.module.scss'
import {useFormContext} from "react-hook-form";
import {useOutsideClick} from "../../lib/useOutsideClick";

interface InputProps {
    title: string
    type: string
    name: string
}

const Input = ({title, type, name}: InputProps) => {
    const [active, setActive] = useState<boolean>(false)
    const {register, reset, setFocus, formState: {errors}} = useFormContext()
    const wrapper = useRef<HTMLDivElement | null>(null)

    useOutsideClick(wrapper, () => setActive(false))

    const clearInput = () => {
        setFocus(name)
        reset({[name]: ''})
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value.length === 0 ? setActive(false) : setActive(true)
    }

    return (
        <div>
            <label htmlFor={title} className={cls.title}>{title}</label>
            <div className={cls.wrapper} ref={wrapper}>
                <input id={title} type={type}  {...register(name, {required: true})} className={cls.input}
                       onFocus={() => setActive(true)}
                       onChange={(e) => onChange(e)}
                />
                {active && <button
                    type={'button'}
                    onClick={clearInput}
                    className={cls.button}></button>}
            </div>
            {errors?.[name] && <span className={cls.error}>Поле не должно быть пустым</span>}
        </div>
    );
}

export default Input;
