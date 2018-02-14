import React, { Component } from 'react';
import { UserForm } from './UserForm';
import JSONPretty from 'react-json-pretty';

class ShowDiv extends React.Component{
    constructor(props){
        super();
    };
    
 //{JSON.stringify(this.props. showUserInfo)} 
    render(){

        return(
            <div>{this.props.errorMsg ?  this.props.errorMsg : this.props.showDivValue}<br /><br />
                 <JSONPretty id="json-pretty" json={this.props.showUserInfo}></JSONPretty>
          </div>

        );
    };
}

export default ShowDiv;