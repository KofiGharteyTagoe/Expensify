// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1> Info </h1>
        <p> The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperCompnent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please don't share!</p>}
            <WrapperCompnent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrapperCompnent) =>{
return (props) => (
    <div>
        {props.isAuthenticated ? <WrapperCompnent {...props} />: <p> Login to view your informatuon</p>}
    </div>
)
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));