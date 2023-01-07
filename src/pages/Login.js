import * as React from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import background from "../img/photos/bg2.jpg";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    let navigate = useNavigate();
    const handleLogin = ()=>{
        AuthService.login(email,password).then(
            () => {
              navigate("/");
              window.location.reload();
            },).catch((err) => { 
                Store.addNotification({
                    title: "Error!",
                    message: "Bad credentials",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__zoomIn"],
                    animationOut: ["animate__animated", "animate__zoomOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                  });
            });
    }
    return(
        <>
        <main class="d-flex w-100"  style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-6 col-md-6 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">
                        <div class="card">
							<div class="card-body">
                                <div class="text-center mt-4">
                                    <h1 class="h2">Welcome back!</h1>
                                    <p class="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>
								<div class="m-sm-4">
									<form>
										<div class="mb-3">
											<label class="form-label">Email</label>
											<input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value);}} />
										</div>
										<div class="mb-3">
											<label class="form-label">Password</label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value);}} />
											
										</div>
										<div>
											<label class="form-check">
            <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked/>
            <span class="form-check-label">
              Remember me next time
            </span>
          </label>
										</div>
										<div class="text-center mt-3">
											<a class="btn btn-lg btn-primary" type='button' onClick={(e)=>{handleLogin()}}>Sign in</a>
										</div>
                                        <div class="text-center mt-3">
                                            <strong>
                                                <a href="/Register">Create an Account!</a>
                                            </strong>
                                        </div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>
        </>
    );
}