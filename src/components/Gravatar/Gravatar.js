import React from 'react';
import md5 from 'md5';

const Gravatar = (props) => {
    const hash = md5(props.email);

    return (
        <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?s=32&d=identicon&r=PG`} alt={props.alt} />
    );
}

export default Gravatar;
