import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
const Home = () => {
    var[data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setData(response.data)
        })
        .catch(err=>console.log(err)); 
    },[])

    return (
        <div class="table-responsive-sm">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>{
                        return <tr>
                            <td>{value.name}</td>
                            <td>{value.username}</td>
                            <td>{value.address.city}</td>
                            <td>{value.address.zipcode}</td>
                            <td>{value.phone}</td>
                            <td>{value.company.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <table class="table">
            </table>
        </div>
    )
}

export default Home