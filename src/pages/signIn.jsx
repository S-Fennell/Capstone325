

export default function SignIn(){
//I only left this page because react seems to act up about deleting files. I'm just going with a subscribe page
    return(
        <form action="/register" method="POST">
            <fieldset>
                <legend>Sign In</legend>
                <label for="username" htmlFor=""><small>Username: </small></label>
                <input type="text" name="username" id="username" /> 
                <br />
                <br />
                <label for="password" htmlFor=""><small>Password:   </small></label>
                <input type="password" name="password" id="password" />
                <br />
                <br />
                <button>Sign In</button>
            </fieldset>
            
        </form>
    );
}