
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Please fill in all fields");
    } else {
      const url = 'http://localhost/test/login.php';
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      axios.post(url, formData)
        .then(response => {
          // Handle successful login, e.g., redirect to dashboard
          alert(response.data);
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    }
  };

  return (
    <div className="vh-40 gradient-custom">
      <div className="mask d-flex align-items-center h-40 gradient-custom-3">
        <div className="container h-20vh">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center mb-5">Login</h3>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input type="text" className="form-control form-control-lg" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" onClick={handleSubmit}>Login</button>
                    </div>
                    <p className="text-center text-muted mt-3 mb-0">Don't have an account? <Link to="/" className="fw-bold text-body">Sign up here</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
