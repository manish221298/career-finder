import axios from '../config/axios'

export const AddResume = (resume) => {
    return {type: 'ADD_RESUME', payload:resume }
}

export const startAddResume = (formData) => {
    return (dispatch) => {
        //console.log("resume form", formData)
        axios.post('/resume/create', formData, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
               //console.log(response.data.message)
               alert(response.data.message)
            }
        })
    }
}

export const SetResume = (resume) => {
    return {type: "SET_RESUME", payload: resume}
}

export const startSetResume = () => {
    return (dispatch) => {
        axios.get('/resume/create', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const resume = response.data
            console.log(resume)
            dispatch(SetResume(resume))
        })
    }
}