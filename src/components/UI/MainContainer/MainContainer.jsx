
import s from './MainContainer.module.css';

function MainContainer({children}) {
    return (
        <div className={s.MainContainer}>
            {children}
        </div>
    )
}
export default MainContainer
