import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [language, setLanguage] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const formData = {
            firstName,
            lastName,
            email,
            language,
            phone,
            address,
        };

        // Set the submitted data in the state
        setSubmittedData(formData);
        alert('Form submitted!');
    };

    return (
        <div className="wrap">
            <div className="row">
                <div className="col-md-6">
                    <form className="userForm mt-4" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Form</h2>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label htmlFor="fname" className="form-label">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fname"
                                    name="fname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lname" className="form-label">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lname"
                                    name="lname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                Phone:
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="form-label">
                                Address:
                            </label>
                            <input type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    {submittedData && (
                        <div className="user-data">
                            <h2 className="text-center mb-4">Submitted data</h2>
                            <div className="user-data-details">
                                <div className="user-data-image-container">
                                    <img
                                        src="https://source.unsplash.com/200x200/?profile"
                                        alt="User"
                                        className="user-data-image"
                                    />
                                </div>
                                <div className="user-data-info">
                                    <p>
                                        <span className="user-data-label">Name:</span>{' '}
                                        {submittedData.firstName} {submittedData.lastName}
                                    </p>
                                    
                                    <p>
                                        <span className="user-data-label">Email:</span>{' '}
                                        {submittedData.email}
                                    </p>
                                    <p>
                                        <span className="user-data-label">Phone:</span>{' '}
                                        {submittedData.phone}
                                    </p>
                                    <p>
                                        <span className="user-data-label">Address:</span>{' '}
                                        {submittedData.address}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;

