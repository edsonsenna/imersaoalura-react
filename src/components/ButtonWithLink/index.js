import React from 'react';

function ButtonWithLink(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonWithLink;