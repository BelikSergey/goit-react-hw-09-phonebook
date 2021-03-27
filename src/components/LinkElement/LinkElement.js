import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom';
// import routes from '../../routes'
// import ClassNames from 'classnames'
import './LinkElement.css'


function LinkElement ({link, styleName,}) {
    return (
        <div className={styleName}>
            <NavLink
                exact
                // to={link}
                to={{
                    pathname: link,
                    // state: {
                    //     from: location,
                    // },
                }}
                className="NavLink"
                // activeClassName={ActiveLink}
            >{styleName}</NavLink>
        </div>
    )
}                                                                                  

LinkElement.propTypes = {
    link: PropTypes.string.isRequired,
    styleName: PropTypes.string.isRequired,
}

export default withRouter(LinkElement)

