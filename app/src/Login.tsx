export const Login = () => {
    return (
        <div>


            <form action="/login" method="POST">
                <h2>
                    Email
                </h2>
                <input type="text" id="email" name="email" />
                <h2>
                    Password
                </h2>
                <input type="text" id="password" name="password" />
                <button type="submit">Submit</button>

            </form>
        </div>

    )
}




