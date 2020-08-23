import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = async event => {
        event.preventDefault()
        let result
        console.log(username);
        const res = await axios.get(`https://api.github.com/search/users?q=${username}`)

        if (res.data.total_count > 0) {
            for (let i = 0; i < res.data.items.length; i++) {
                if (res.data.items[i].login === username) {
                    console.log(res.data.items.length);
                    result = res.data.items[i];
                    break
                }
            }
        }
        if (result != undefined) {
            localStorage.setItem("auth", result.avatar_url)
            window.location.href = "/Terminals"
        }
    }
    return (
        <Fragment>
            <div className="container wrapper my-auto">
                <div class="form-content">
                    <form onSubmit={submitHandler}>
                        <input type="text" id="login" value={username} onChange={e => setUsername(e.target.value)} name="login" placeholder="login" />
                        <input type="text" id="password"name="login" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}