

import axios from "axios"
import { useState } from "react"



export const Login = () => {
    const [error, setError] = useState(null)
    const login = async () => {
        // collect the information from the form
        const formEmail = (document.getElementById("email") as HTMLInputElement)?.value
        const formPassword = (document.getElementById("password") as HTMLInputElement)?.value
        console.log(formEmail, formPassword)


        // hit server with post request
        const response = await fetch('http://localhost:5001/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                email: formEmail,
                password: formPassword
            })
        })

        if (!response.ok) {
            setError(await response.json())
        }

        // check this
        if (response.status === "302") {
        }



    }

    return (
        <div>
            {error && <span>{JSON.stringify(error)}</span>}
            <h2>
                Email
            </h2>
            <input type="text" id="email" name="email" />
            <h2>
                Password
            </h2>
            <input type="text" id="password" name="password" />
            <button onClick={login} type="submit">Submit</button>
        </div >

    )
}




