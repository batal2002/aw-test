import React, {ReactNode, useEffect, useRef, useState} from 'react';
import cls from './Dropdown.module.scss'

interface DropdownProps {
    children: ReactNode
}

const Dropdown = ({children}: DropdownProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open) {
            const onClick = (e: Event) => {
                const target = e.target as Document
                rootRef.current && rootRef.current.contains(target) || setOpen(false);
            }
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }
    }, [open]);
    const toggleClick = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div className={cls.wrapper} ref={rootRef}>
            <button className={cls.button} onClick={toggleClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_10_6608)">
                        <path
                            d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
                            fill={open ? '#595959' : "#161616"}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_10_6608">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            {open && <div className={cls.dropdown}>
                {children}
            </div>}
        </div>
    );
};

export default Dropdown;
