import React from 'react'
import ProfileForm from './ProfileForm'

import {connect} from 'react-redux'
import { startAddCompany } from "../../actions/companyAction";

function CreateProfile(props){  

        const  handleEditSubmit = (company) => {
        
        //const redirect = () => props.history.push('/customer')
        props.dispatch(startAddCompany(company))
    }
        return (
            <div>
                {/* <h2>Add Customer</h2> */}
                <ProfileForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(CreateProfile)



