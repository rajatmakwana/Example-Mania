import React, { Component } from 'react';
import './App.css';
import ShowDiv from './ShowDiv';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: ' ',
      lastname: ' ',
      userage: 0,
      gender: ' ',
      pan: '',
      userbio: '',
      submitFormDisable: true,
      ShowDivValue: '',
      userInfo: []
    };
  }

  setIntruction = (value) => {
    this.setState({
      ShowDivValue: value
    });
  }
  setIntructiontoBlank = () => {
    this.setState({
      ShowDivValue: ''
    });
  }

  getFirstName = (e) => {
    let wrkName = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if (wrkName.match(letters)) {
      this.setState({ errorMsg: '', firstname: wrkName });
    }
    else{
      this.setState({
        errorMsg: "Numbers are not allow, Please enter Character only"
      });
    }
  }


  getLastName = (e) => {
    let wrkName = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if (wrkName.match(letters)) {
      this.setState({
        errorMsg: '',
        lastname: wrkName
      });
    } else {
      this.setState({
        errorMsg: "Numbers are not allow, Please enter Character only"
      });
    }
}

  getAge = (e) => {
    let num = e.target.value;
  
    if (isNaN(num)) {
      this.setState({ errorMsg: 'Character are not allow, Please Enter only number' });
    }
    else {
      this.setState({ errorMsg: '', userage: num });    
    }
  }

  getGender = (e) => { this.setState({ gender: e.target.value }); }

  getflagpan = (e) => { 
    if(this.state.pan == 'yes'){
      this.setState({ pan: 'no'});
    }else{
    this.setState({ pan: e.target.value });  
  }
}

  getUserBio = (e) => { this.setState({ userbio: e.target.value });
   if (this.state.firstname.length && this.state.lastname.length && this.state.gender.length && this.state.userbio.length) 
   { this.setState({ submitFormDisable: false }); }
  }

  submitUserInfo = (e) => {
    e.preventDefault();
    this.setState(
      prev => ({
        userInfo: prev.userInfo.concat({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          userage: this.state.userage,
          gender: this.state.gender,
          pan: this.state.pan,
          userbio: this.state.userbio
        })
      }))
  }

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <h1>Example Mania</h1>
        <div id="column">
          <div id="row1">
            <UserForm
              userInfoForm={this.state.submitFormDisable}
              showIntruction={this.setIntruction}
              blankIntruction={this.setIntructiontoBlank}
              firstNameValid={this.getFirstName}
              lastNameValid={this.getLastName}
              userAgeValid={this.getAge}
              getGender={this.getGender}
              getflagpan={this.getflagpan}
              getUserBio={this.getUserBio}
              validFlag={this.state.validFlag}
              onSubmitUserForm={this.submitUserInfo}
            >Please Fill the below form</UserForm>
          </div>
          <div id="row2">
            <ShowDiv
              showDivValue={this.state.ShowDivValue}
              errorMsg={this.state.errorMsg}
              showUserInfo={this.state.userInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;