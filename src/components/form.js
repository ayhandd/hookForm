import React from 'react';

const Form = (props) => {
    const {inputs, setForm} = props
    const {firstName, lastName, email, password, confirmPassword} = props.inputs
    const onChange = (e) =>{
        setForm({...inputs, [e.target.name]: e.target.value});
    }
    return(
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChange}/>
                    {firstName.length < 2 && firstName.length !== 0 ? <p style={{color:'red'}}>First Name must be at least two characters.</p>: null}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName"  onChange={onChange}/>
                    {lastName.length < 2 && lastName.length !== 0 ? <p style={{color:'red'}}>Last Name must be at least two characters.</p>: null}

                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email"  onChange={onChange}/>
                    {email.length < 2 && email.length !== 0 ? <p style={{color:'red'}}>Email must be at least two characters.</p>: null}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChange}/>
                    {password.length < 8 && password.length !== 0 ? <p style={{color:'red'}}>Password must be at least eight characters.</p>: null }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={onChange}/>
                    {password !== confirmPassword ? <p style={{color:'red'}}>Passwords must match.</p>: null }
                </div>
            </form>
           
        </div>   
    )
}

export default Form;