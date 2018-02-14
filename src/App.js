import React, { Component } from 'react';
import './App.css';
import ShowDiv from './ShowDiv';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitFormDisable: true,
      ShowDivValue: '',
      firstname: '',
      lastname: '',
      userage: 0,
      gender: '',
      pan: '',
      userbio: '',
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
    console.log(e.target.value);
    let wrkName = e.target.value;
    //Validation
    let letters = /^[A-Za-z]+$/;
    if (wrkName.match(letters)) {
      this.setState({
        errorMsg: '',
        firstname: e.target.value
      });
    } else {
      this.setState({
        errorMsg: "Numbers are not allow, Please enter Character only"
      });
    }
    console.log(this.state.firstname);
    console.log(this.state.errorMsg);
  }


  getLastName = (e) => {
    console.log(e.target.value);
    let wrkName = e.target.value;
    //Validation
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

    console.log(this.state.lastname);
  }

  getAge = (e) => {
    console.log(e.target.value);
    let num = e.target.value;
    let charCode = e.target.charCode;
    //Validation
    if (charCode >= 48 && charCode <= 57) {
      this.setState({
        errorMsg: '',
        userage: num
      });
    }
    else {
      this.setState({
        errorMsg: 'Character are not allow, Please Enter only number'
      });
    }
    console.log(this.state.userage);
  }

  getGender = (e) => {
    console.log(e.target.value);
    this.setState({
      gender: e.target.value
    });
    console.log(this.state.gender);
  }

  getflagpan = (e) => {
    console.log(e.target.value);
    this.setState({
      pan: e.target.value
    });
    console.log(this.state.pan);
  }

  getUserBio = (e) => {
    console.log(e.target.value);
    this.setState({
      userbio: e.target.value
    });
    console.log(this.state.userbio);
    if (this.state.firstname.length  && this.state.lastname.length && this.state.gender.length  && this.state.userbio.length)
      {
        this.setState({ submitFormDisable: false });
      }
}     

  submitUserInfo = (e) => {
    e.preventDefault();
      this.state.userInfo.push(
        {
          "firstname": this.firstname,
          "lastname": this.lastname,
          "userage": this.userage,
          "gender":   this.gender,
          "flagpan": this.flagpan,
          "userBio": this.userBio
        }
      );
console.log(this.state.userInfo);
}

  render() {
    return (
      <div className="App">
        <h1>Example Mania</h1>
        <div id="column">
          <div id="row1">
            <UserForm
              userInfoForm   ={this.state.submitFormDisable}
              showIntruction={this.setIntruction}
              blankIntruction={this.setIntructiontoBlank}
              firstNameValid ={this.getFirstName}
              lastNameValid ={this.getLastName}
              userAgeValid ={this.getAge}
              getGender     ={this.getGender}
              getflagpan  ={this.getflagpan}
              getUserBio   ={this.getUserBio}
              validFlag       ={this.state.validFlag}
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
