import React, { useState } from "react";

function Input(props) {
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleTerm(term);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input type='text' id="search" value={term} onChange={(e) => handleChange(e)} placeholder='Enter your city' style={{ width: '44%', height: 18, borderRadius: '5%' }} />
            </form>
        </>
    )
}

export default Input;