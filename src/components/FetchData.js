import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/FetchData.css';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
        .then(res => setData (res.data.users))
        .catch(err => console.log(err));
    },[])
  return (
    <div className='fetchdata'>
        <h3 className='my-4 mx-auto'>Fetch data from API using Axios</h3>
        <table className='table' width="100%">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>UserName</th>
                    <th>DOB</th>
                    <th>Image</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>City</th>
                    <th>Lat</th>
                    <th>Lng</th>
                    <th>Card Expire</th>
                    <th>CompanyName</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((user)=>{
                        return <tr className='table-info'>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.birthDate}</td>
                            <td><img src = {user.image} alt=''/></td>
                            <td>{user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.coordinates.lat}</td>
                            <td>{user.address.coordinates.lng}</td>
                            <td>{user.bank.cardExpire}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default FetchData