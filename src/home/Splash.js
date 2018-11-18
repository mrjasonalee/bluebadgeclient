import React, { Component } from 'react';
import TurntableIndex from '../turntables/turntableindex';

const Splash = (props) => {
    return (
        <div>
            <TurntableIndex token={props.sessionToken} />
            <Component />
        </div>
    )
}

export default Splash;
