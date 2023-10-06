import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const requestBody = {}
    const options = {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch(url, options)

      if (response.ok) {
        const data = await response.json()
        this.onSubmitSuccess(data.jwt_token)
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Network error:', error)
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.submitForm}>
          <h1 className="heading">Please Login</h1>
          <button type="submit" className="button">
            Login With Sample Creds
          </button>
        </form>
      </div>
    )
  }
}

export default Login
