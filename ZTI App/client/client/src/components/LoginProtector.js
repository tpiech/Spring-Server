import React from 'react';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

function ProtectedRoute({isAuth: isAuth, component: Component, ... rest}){
    return(
        <Route
        {... rest}
        render = {(props) => {
            if(isAuth){
                return <Component/>
            }
            else{
                alert("Not authorised to enter");
                <Redirect to={{ pathname: "/", state:{from: props.location}}} />
            }
        }
    }
        />
    );
}

export default ProtectedRoute