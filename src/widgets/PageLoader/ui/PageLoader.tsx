
import cls from './PageLoader.module.scss';
import React from "react";
import {Loader} from "../../../shared/ui/Loader/Loader";



export const PageLoader = () => (
    <div className={cls.PageLoader}>
        <Loader />
    </div>
);
