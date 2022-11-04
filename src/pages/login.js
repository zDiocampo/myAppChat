import {useState, useEffect, useContext} from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import {Navigate, Link} from 'react-router-dom';

export default function Login() {


	// State hooks to store the values of the input fields
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

      	function authenticate(e) {

	        // Prevents page redirection via form submission
	        e.preventDefault();

            fetch('https://guarded-woodland-31326.herokuapp.com/users/signin', {
                method: 'POST', 
                headers: {
                        'Content-type' : 'application/json'
                    },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(typeof data.accessToken !== "undefined"){
                    localStorage.setItem('token', data.accessToken)
                    retrieveUserDetails(data.accessToken);

                    Swal.fire({
                        title: "Login Successful",
                        text: "Happy Shopping!"
                    });
                } else {
                    Swal.fire({
                        title: "Authentication Failed",
                        text: "Check your credentials"
                    });
                }
            });

	        setEmail('');
	        setPassword('');

	    };

        const retrieveUserDetails = (token) => {

            fetch('https://guarded-woodland-31326.herokuapp.com/users/details/:userId', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                });
            })
        }

    useEffect(() => {
	    // Validation to enable submit button when all fields are populated and both passwords match
	    if(email !== '' && password !== ''){
	        setIsActive(true);
	    }else{
	        setIsActive(false);
	    }

	}, [email, password]);

    return (
        (user.id !==null) ?
            <Navigate to="/courses"/>
        :

    	<>
    	<h1>Login Here:</h1>
        <Card className="p-3">
        <Form onSubmit={e => authenticate(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    required
                    value={email}
	          		onChange={(e) => setEmail(e.target.value)}

                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    required
             		value={password}
	          		onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <p>Not yet registered? <Link to="/register">Register here</Link></p>

            { isActive ? 
                <Button variant="success" type="submit" id="submitBtn" className="mt-3 mb-5">
                    Login
                </Button>
                : 
                <Button variant="danger" type="submit" id="submitBtn" disabled className="mt-3 mb-5">
                    Login
                </Button>
            }

        </Form>
        </Card>
        </>
    )
}
