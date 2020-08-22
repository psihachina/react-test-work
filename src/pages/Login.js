import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = async event => {
        event.preventDefault()
        let result
        const res = await axios.get(`https://api.github.com/search/users?q=${username}`)

        if (res.data.total_count > 0){
            for (let i = 0; i < res.data.items.length; i++){
                if (res.data.items[i].login === username){
                    console.log(res.data.items.length);
                    result = res.data.items[i];
                    break
                }
            }
        }
        if(result != undefined) {
            localStorage.setItem("auth", result.avatar_url)
            window.location.href = "/Terminals"
        }
    }
    return (
        <Fragment>
            <h1>Login page</h1>
            <form onSubmit={submitHandler}>
                <div class="form-group">
                    <label>Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}