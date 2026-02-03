import React from "react";

const child = (props) => {
 console.log(props);
 const handleChange = (e) => {
    props.setName(e.target.value);
    };
    return (
        <input type="text" value={props.name} onChange={handleChange} />
    );
};

export default child;