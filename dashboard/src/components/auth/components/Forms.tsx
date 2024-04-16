import CheckBox from '../../controllers/CheckBox'

interface FormProps {
    onSubmit: (data: object) => void
}

function FormLogin(props: FormProps) {
    const { onSubmit } = props
    return (
        <form 
        action="registration" 
        id="login" 
        className="auth-form"
        onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            onSubmit(data)      
        }}
        >
            <h5 className="h5">Login</h5>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
            <input type="password" name="password" className="form-control" placeholder="Password" required/>
            <CheckBox id="remember" name="remember" text="Remember me" labelClassName="label" />
            <button type="submit" className='btn btn-primary'>Login</button>
        </form>
    )
}

function FormRegistration(props: FormProps) {
    const { onSubmit } = props
    return (
        <form 
        action="registration" 
        id="registration" 
        className="auth-form"
        onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            onSubmit(data)        
        }}
        >
            <h5 className="h5">Registration</h5>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
            <input type="password" name="password_2" className="form-control" placeholder="Password"  required/>
            <input type="password" name="password_2" className="form-control" placeholder="Repeat password"  required/>
            <button type="submit" className='btn btn-primary'>Registration</button>
        </form>
    )   
}

function FormRestore(props: FormProps) {
    const { onSubmit } = props
    return (
        <form 
        action="restore" 
        id="restore" 
        className="auth-form"
        onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            onSubmit(data)  
        }}
        >
            <h5 className="h5">Restore Access</h5>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
            <button type="submit" className='btn btn-primary'>Restore</button>
        </form>
    )   
}

export { FormLogin, FormRegistration, FormRestore }