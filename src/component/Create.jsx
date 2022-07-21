import { Component } from "react";
import "../Style/Create.scss"
import user from "../Images/user.jpg"
import arrowleft from "../Images/arrow-left.jpg"
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super()
    this.state = {
      myfirst: '',
      mylast: '',
      myname: '',
      mypass: ''
    }
  }

  myFirstchange = (event) => {
    this.setState({ myfirst: event.target.value })
  }

  myLastchange = (event) => {
    this.setState({ mylast: event.target.value })
  }

  myNamechange = (event) => {
    this.setState({ myname: event.target.value })
  }
  myPasschange = (event) => {
    this.setState({ mypass: event.target.value })
  }

  mySubmitfunction = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="create">
        <div className='container'>
          <form onSubmit={this.mySubmitfunction}>
            <div className="create">
              <ul>
                <li>
                  <Link to="/"><img src={arrowleft} /></Link>
                </li>
                <li>
                  <img src={user} />
                </li>
                <li>
                  <h5>Account</h5>
                </li>
              </ul>

            </div>
            <p>Create an Account</p>
            <div className="mb-3">
              <label for="exampleInputFirst" className="form-label">First Name</label>
              <input type="text" onChange={this.myFirstchange} className="form-control" id="exampleInputFirst" aria-describedby="emailHelp" />
            </div>
            {/* 
            <div className="mb-3">
              <label for="exampleInputLast" className="form-label">Last Name</label>
              <input type="text" onChange={this.myLastchange} className="form-control" id="exampleInputLast" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
              <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" onChange={this.myNamechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" onChange={this.myPasschange} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Send me news and updates</label>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div> */}

            {/* <div className="cancle">
              <a href="" className="">
                <Link to="/signout">Cancle</Link>
              </a>
            </div> */}

            <div class="form-group">
              <input type="text" class="form-control" id="name" placeholder="Name" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="confirm-password" placeholder="confirm-password" />
            </div>
            <div class="d-flex flex-row align-items-center justify-content-between">
              <div className="acc-btn">
                <Link to="/signin"><button class="btn btn-primary">Login</button></Link>
              </div>
              <div className="acc-btn1">
                <button class="btn btn-primary">Create Account</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    )
  }
}
export default Create