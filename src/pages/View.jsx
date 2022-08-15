import {React, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../http';

function Create() {
  const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    useEffect(()=>{
      fetchUser()
  },[]);

    const fetchUser= () =>{
      http.get('/users/'+id+'/edit_users').then((res)=>{
        setInputs({
              name:res.data.name,
              email:res.data.email,
          });
      });
  }
    const Back = () =>{
        // http.post('/add_users',inputs).then((res)=>{
            navigate('/'); 
        // })
    }
  return (
    <div>
      <h2>Add New User</h2>
      <div className="row">
                <div className="col-sm-6">
                <div className="card p-4">
                        <h4>Name</h4>
                        <p>{ inputs.name }</p>
                        <h4>Email</h4>
                        <p>{ inputs.email }</p>
                        <button type="button" onClick={Back} className="btn btn-info mt-2">Back</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Create