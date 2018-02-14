import React from 'react';
import { ShowDiv } from './ShowDiv'

class UserForm extends React.Component {
    constructor(props) {
        super();
        
        this.instruction = {
            char: 'Please enter only character',
            num: 'Please enter only number',
            bio: 'Please tell us about your self'
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.props.onSubmitUserForm(e)}}>
                    <fieldset>
                        <legend>{this.props.children}</legend>
                        
                        First Name: <input name="firstname" type="text" 
                        onFocus={()=>{ this.props.showIntruction(this.instruction.char)}} 
                        onBlur={()=>{ this.props.blankIntruction()}} 
                        onChange={(e)=> {this.props.firstNameValid(e)}} 
                        /><br /><br />
                        
                        Last Name: <input name="lastname" type="text" 
                        onChange={(e)=>{this.props.lastNameValid(e)}}  
                        onFocus={() =>{ this.props.showIntruction(this.instruction.char)}} 
                        onBlur={()=>{ this.props.blankIntruction()}} 
                        /><br /><br />
                        
                        Age: <input name="age" type="text" 
                        onChange={(e) => {this.props.userAgeValid(e)}}  
                        onFocus={() =>{ this.props.showIntruction(this.instruction.num)}} 
                        onBlur={()=>{ this.props.blankIntruction()}} 
                        /><br /><br />
                        
                        Gender:
                        <select name="gender" 
                        onChange={(e)=>{this.props.getGender(e)}}>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br /><br />

                        PAN card: <input type="checkbox" name="yes" value="yes" 
                        onChange={(e)=>{this.props.getflagpan(e)}}
                         /><br /><br />
                        
                        About Your Self: <textarea name="message" row="10" cols="30" 
                        onChange={(e) => {this.props.getUserBio(e)}}
                        onFocus={() =>{ this.props.showIntruction(this.instruction.bio)}} 
                        onBlur={()=>{ this.props.blankIntruction()}} 
                        /><br /><br />
                        
                        <input name="submit" type="submit" value="Submit Form" 
                        disabled={(this.props.userInfoForm)}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
};

export default UserForm;