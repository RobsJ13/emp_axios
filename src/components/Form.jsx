import React from 'react'
import Navbar from './Navbar'

const Form = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <h1 class="p-3">Employee Form</h1>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row p-3" >
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  pb-3">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <br/>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pb-3 ">
                            <input type="password" className="form-control" placeholder="Password"  />
                        </div>
                        <br/>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-3 ">
                            <input type="text" className="form-control" placeholder="Location" />
                        </div>
                        <br/>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  pb-3">
                            <input type="text" className="form-control" placeholder="Salary" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  pb-3">
                        <button type="button" class="btn btn-primary btn-block">Submit</button>
                        </div>
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form