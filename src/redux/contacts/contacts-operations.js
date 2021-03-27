import axios from 'axios';
import actions from './contacts-actions';
import { BASE_URL } from "../auth/BASE__URL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = BASE_URL;


const getItemsList = () => async dispatch =>{
    dispatch(actions.itemGetRequest());
    try {
        const response = await axios.get('/contacts')
        dispatch(actions.itemGetSuccess(response.data))
    } catch (error) {
        dispatch(actions.itemGetError(error.maessage));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })
    }
    // axios
    // .get('/contacts')
    // .then(({data})=>dispatch(actions.itemGetSuccess(data)))
    // .catch(error=>dispatch(actions.itemGetError(error.maessage)));
}

const addItem = ({name, number}) => async dispatch=> {
    const item = {name, number};
    dispatch(actions.itemAddRequest());
    try {
        const response = await axios.post('/contacts', item)
        dispatch(actions.itemAddSuccess(response.data))
    } catch (error) {
        dispatch(actions.itemAddError(error.maessage));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })
    }
}

const removeItem = id => async dispatch=> {
    dispatch(actions.itemRemoveRequest());
    try {
         await axios.delete(`/contacts/${id}`)
        dispatch(actions.itemRemoveSuccess(id))
    } catch (error) {
        dispatch(actions.itemRemoveError(error.maessage));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })
    }

}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addItem,
    removeItem,
    getItemsList
}