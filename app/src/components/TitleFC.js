import React from 'react';


const TitleFC = (props) => {
    console.log('props in TitleFC >> ', props);
    return (
        <div>
            <h6> <span> FC state passed in as props </span> {props.title}</h6>   
        </div>
    )
}

export default TitleFC;