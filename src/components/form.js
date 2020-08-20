import React from 'react';

const Form = (props) => {
    const {inputs, setForm} = props
    const onChange = (e) =>{
        setForm({...inputs, [e.target.name]: e.target.value});
    }
    return(
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName"  onChange={onChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email"  onChange={onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChange}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={onChange}/>
                </div>
            </form>
           
        </div>   
    )
}

export default Form;