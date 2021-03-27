import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './LogoPhoneBook.module.css'

export default function LogoPhoneBook({text}) {
    return (
        <CSSTransition classNames={s}
        in={true} 
        appear={true}
        timeout={500}>
        <div className={s.Maintitle}>
        <h1
        className={s.Logo}>{text}</h1>
        </div>
        </CSSTransition>
    )
}
