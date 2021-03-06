import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, Table } from 'react-bootstrap'

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

    //   this.onChangeName = this.onChangeName.bind(this);
    //   this.onChangeEmail = this.onChangeEmail.bind(this);
    //   this.onChangePhone = this.onChangePhone.bind(this);
    //   this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        details: [],
          name: '',
          email: '',
          phone: ''
      }
  }

  // Form Events
    onChangeName = (e) => {
      this.setState({ name: e.target.value })
  }

    onChangeEmail = (e) => {
      this.setState({ email: e.target.value })
  }

    onChangePhone = (e) => {
      this.setState({ phone: e.target.value })
  }

    onSubmit = (e) => {
      e.preventDefault()
      let details = this.state.details;
      details.push({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      });
      console.log(details)
      this.setState({
        details,
          name: '',
          email: '',
          phone: ''
      })
  }
  editData = (details) => {
    this.setState({ name: details.name, email: details.email, phone: details.phone });
    console.log(this.editData)
  }
  deleteData = (details) => {
    this.setState({ details, name: '', email: '', phone: '' });
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
  // listDetails() {
  //   let details = this.state.details;
  //   return (
  //     <ul>
  //       {
  //         details.map((val, index) => {
  //           return (
  //             <li key={index}>
  //               { val}
  //             </li>
  //           );
  //         })
  //       }
  //     </ul>
  //   );
  // }

  render() {
    const { details } = this.state
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
            <div>
              {/* <ol>
              {
                  details.map(detail => {
                  return (
                    <>
                      <li >{detail.name} {detail.email} {detail.phone}</li>
                      <br></br>
                    </>
                  );
                })
              }

              </ol> */}
            </div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="view" title="View">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {
                        details.map(detail => {
                          return (
                            <>
                              <th>{detail.name}</th> <th>{detail.email}</th> <th>{detail.phone}</th>


                            </>
                          );
                        })
                      }
                    </tr>
                    <br></br>


                  </tbody>
                </Table>
              </Tab>
              {/* <Tab eventKey="create" title="Create">

              </Tab> */}
              <Tab eventKey="update" title="Update">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {
                        details.map(detail => {
                          return (
                            <>
                              <th>{detail.name}</th> <th>{detail.email}</th> <th>{detail.phone}</th><th><button type="button" className="btn btn-success" onClick={this.editData}>Edit</button> </th>


                            </>
                          );
                        })
                      }
                    </tr>
                    <br></br>


                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="delete" title="Delete">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {
                        details.map(detail => {
                  return (
                    <>
                      <td>{detail.name}</td> <td>{detail.email}</td> <td>{detail.phone}</td><td><button type="button" className="btn btn-success" onClick={this.deleteData}>Delete</button></td>


                    </>
                  );
                })
              }
                    </tr>
                    <br></br>


                  </tbody>
                </Table>
              </Tab>
            </Tabs>
        </div>



          </GridWrapper>
      )
  }
}