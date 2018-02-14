import React, { Component } from 'react';
import { UserForm } from './UserForm'

class ShowDiv extends React.Component{
    constructor(props){
        super();
    };
    

    render(){
        return(
            <div>{this.props.errorMsg ?  this.props.errorMsg : this.props.showDivValue}
                {this.props. showUserInfo}
          </div>

        );
    };
}

export default ShowDiv;