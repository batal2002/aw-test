
import cls from './NotFoundPage.module.scss';
import {GoBackButton} from "../../../features/GoBackButton";

export const NotFoundPage = () => {
    return (
        <div className={cls.wrapper}>
            <GoBackButton />
            <p className={cls.error}>Страница не найдена</p>
        </div>
    );
};
