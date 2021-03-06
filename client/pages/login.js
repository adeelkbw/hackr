import { useEffect, useState } from 'react'
import Layouts from '../components/Layouts'
import { loginUser } from '../components/requests/user'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { authenticate, isAuth } from '../components/helpers/auth'




const Login = () => {

    const [state, setState] = useState({
        email: "adnasirkbw@gmail.com",
        password: "123456hjh",
        error: "",
    })
    const { email, password, error, success, buttonText } = state
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    useEffect(() => {
        isAuth() && router.push('/')
    }, [])


    //change in input
    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value, error: ""
        })


    }

    //submite login
    const handleLoginSubmite = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await loginUser(email, password)
            setLoading(false)

            //store user in localstorage and token in cookis
            authenticate(res, () => {
                if (isAuth()) {
                    if (isAuth().role === "admin") {
                        return router.push('/admin/dashboard')
                    }
                    else {
                        return router.push('/user')
                    }
                }
            })


        } catch (err) {
            setLoading(false)
            console.log(err.response);
            setState({ ...state, error: err.response.data.data })

        }
    }


    const form = () => <form onSubmit={handleLoginSubmite} >
        <div className="form-group mt-3 mb-2">
            <input type="email" className="form-control" value={email} name="email" onChange={handleChange} />
        </div>
        <div className="form-group mt-3 mb-2">
            <input type="password" className="form-control" value={password} name="password" onChange={handleChange} />
        </div>

        {error && <div className='text-danger'>{error}</div>}

        {loading ? <button className="btn btn-outline-warning w-100 mt-2 ">Loging in...</button> : <button className="btn btn-outline-warning w-100 mt-2 ">Login</button>}

        <div className='mt-2 float-right'>

            <Link href='/auth/password/forgot' ><a className='text-danger' >Forgot Password</a></Link>
        </div>

    </form>


    return (
        <Layouts>
            <div className="col-md-6 offset-md-3">
                <h2>Login</h2>
                {form()}
            </div>
        </Layouts>
    )
}

export default Login