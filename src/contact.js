import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
 
`; 
// export const Contact = () => (
//     <GridWrapper>
//     <form>
//   <label>
//     First Name:
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Last Name:
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Email Id:
//     <input type="text" email="email" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
//   </GridWrapper>
//     {/* <form>
//   <label>
//     First Name:
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Last Name:
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Email Id:
//     <input type="text" email="email" />
//   </label>
//   <input type="submit" value="Submit" />
// </form> */}
// {/* <h1>Hello</h1>
//   </Wrapper> */}
//)
export default class Contact extends React.Component {

  userData;
  // data = sessionStorage.getItem('user');

  constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          email: '',
          phone: ''
      }
  }

  // Form Events
  onChangeName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeEmail(e) {
      this.setState({ email: e.target.value })
  }

  onChangePhone(e) {
      this.setState({ phone: e.target.value })
  }

  onSubmit(e) {
      e.preventDefault()

      this.setState({
          name: '',
          email: '',
          phone: ''
      })
  }

  
  componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));
      // this.data=JSON.parse(sessionStorage.getItem('user'));
      // if(sessionStorage.getItem('user')){
      //   this.setState({
      //     phone:this.data.phone
      //   })
      // }
      // else{
      //   this.setState({
      //     phone:'',
      //   })
      // }
      if (localStorage.getItem('user')) {
          this.setState({
              name: this.userData.name,
              email: this.userData.email,
              phone: this.userData.phone
          })
      } else {
          this.setState({
              name: '',
              email: '',
              phone: ''
          })
      }
  }

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
      // sessionStorage.setItem('user',JSON.stringify(nextState))
  }


  render() {
      return (
        <GridWrapper>
          <div className="container">
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                  </div>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                  </div>
                  <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
              
          </div>
          </GridWrapper>
      )
  }
}