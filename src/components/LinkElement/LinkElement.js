import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom';
import './LinkElement.css'


function LinkElement ({link, styleName,}) {
    return (
        <div className={styleName}>
            <NavLink
                exact
                to={{
                    pathname: link,
                }}
                className="NavLink"
            >{styleName}</NavLink>
        </div>
    )
}                                                                                  

LinkElement.propTypes = {
    link: PropTypes.string.isRequired,
    styleName: PropTypes.string.isRequired,
}

export default withRouter(LinkElement)

