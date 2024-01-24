import React from 'react';
import './styles/index.scss';
import {AppRouter} from "./providers/router";
import {Header} from "../widgets/Header";
import {useAppDispatch, useAppSelector} from "../shared/lib/redux";
import {setWindowWidth} from "./model/slice/AppSlice";
import {fetchUsers} from "../entities/Users/model/services/fetchUsersData";

function App() {
    const {isMobile} = useAppSelector(state => state.app)

    const dispatch = useAppDispatch()
    const handleSubscribe = () => {
        dispatch(setWindowWidth(window.innerWidth))
    }

    const onSubscribe = () => {
        window.addEventListener('resize', handleSubscribe)
    }

    const offSubscribe = () =>
        window.removeEventListener('resize', handleSubscribe)

    React.useEffect(() => {
        //Сделал получение пользователей в App, чтобы можно архивированные пользователи не дублировались
        //при переходе на главную страницу
        //Если бы все данные подгружались с сервера запрос выполнялся бы при монтировании главной страницы
        dispatch(fetchUsers())

        onSubscribe()

        return () => offSubscribe()
    }, [])

    return (
        <div className={isMobile ? 'app mobile' : 'app'}>
            <Header/>
            <AppRouter/>
        </div>
    );
}

export default App;
