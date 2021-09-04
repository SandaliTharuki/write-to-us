import React, {useState} from "react";


const SignUpForm = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    }); 

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    };
    return(
        <div className="container">
            <div className="app-wrapper">
            <h2 className="title">SignUp</h2>
            <form>
                <div className="name">
                <label className="label">Full Name</label>
                <input className="input" type="text"name="fullname" value={values.fullname} onChange={handleChange}/>
                </div>
                <div className="email">
                <label className="label">Email</label>
                <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                </div>
                <div className="password">
                <label className="label">Password</label>
                <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                </div>
                <div>
                    <button className="btn-large" onClick={handleFormSubmit}>Create your account</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default SignUpForm;