import React, { useContext } from 'react';
import useInput from '../../../hooks/use-input';
import AppContext from '../../../store/app-context';
import './checkout.scss'

const Checkout = () => {

    const { cartItems } = useContext(AppContext);
    let userOrder = {};

    //name
    const {
        value: name,
        valueChangehandler: nameChange,
        valueIsValid: isNameValid,
        hasError: nameError,
        inputBlurHandler: nameBlurHandler,
        reset:resetName
    } = useInput(value => value.trim() !== '');

    //phone
    const {
        value: phone,
        valueChangehandler: phoneChange,
        valueIsValid: isPhoneValid,
        hasError: phoneError,
        inputBlurHandler: phoneBlurHandler,
        reset:resetPhone
    } = useInput(value => value.trim() !== '');

    //address
    const {
        value: address,
        valueChangehandler: addressChange,
        valueIsValid: isAddressValid,
        hasError: addressError,
        inputBlurHandler: addressBlurHandler,
        reset:resetAddress
    } = useInput(value => value.trim() !== '');

    //check the validity of the form
    let isFormValid = false;
    if (isNameValid && isPhoneValid && isAddressValid) {
        isFormValid = true;
    }

    const resetForm=()=>{
        resetName();resetPhone();resetAddress();
    }

    const submitHandler = (e) => {
        e.preventDefault()
        userOrder = {
            name,
            phone,
            address,
            order: cartItems
        }
        resetForm();
        console.log(userOrder);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                name='name'
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={nameChange}
                                onBlur={nameBlurHandler}
                            />
                            <small id="name" className="form-text error">{nameError && 'name cannot be empty'}</small>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text"
                                className="form-control"
                                id="phone"
                                placeholder='07XXXXXXXX'
                                value={phone}
                                onChange={phoneChange}
                                onBlur={phoneBlurHandler}
                            />
                            <small id="name" className="form-text error">{phoneError && 'phone cannot be empty'}</small>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                                className="form-control"
                                id="address"
                                placeholder='Delivery Address'
                                value={address}
                                onChange={addressChange}
                                onBlur={addressBlurHandler}
                            />
                            <small id="name" className="form-text error">{addressError && 'address cannot be empty'}</small>
                        </div>
                    </div>

                </div>
                <div className="btn-container">
                    <button type="submit" id='place-order' className="btn btn-primary" disabled={!isFormValid}>Place Order</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;