import {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import cls from './Button.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button className={cls.button } {...props} >
            {children}
        </button>
    );
};

