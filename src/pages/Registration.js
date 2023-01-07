import * as React from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import background from "../img/photos/bg2.jpg";
export default function Registration() {
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    let navigate = useNavigate();
    const handleRegister = ()=>{
        AuthService.register(nom,prenom,email,password).then(
            () => {
                Store.addNotification({
                    title: "Success!",
                    message: "Account created successfully!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__zoomIn"],
                    animationOut: ["animate__animated", "animate__zoomOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                  });
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
        <main class="d-flex w-100"  style={{backgroundImage:`url(${background})`,backgroundSize:'cover',height:"100vh"}}>
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">
                        <div class="card">
							<div class="card-body">
                            <div class="text-center mt-4">
							<h1 class="h2">Register</h1>
							
						</div>
								<div class="m-sm-4">
									<form>
										<div class="mb-3">
											<label class="form-label">First name</label>
											<input class="form-control form-control-lg" type="text" name="nom" placeholder="Enter your first name" onChange={(e)=>{setPrenom(e.target.value);}}/>
										</div>
										<div class="mb-3">
											<label class="form-label">Last name</label>
											<input class="form-control form-control-lg" type="text" name="prenom" placeholder="Enter your last name" onChange={(e)=>{setNom(e.target.value);}}/>
										</div>
										<div class="mb-3">
											<label class="form-label">Email</label>
											<input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value);}}/>
										</div>
										<div class="mb-3">
											<label class="form-label">Password</label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value);}}/>
										</div>
										<div class="text-center mt-3">
											<a type='button' class="btn btn-lg btn-primary" onClick={(e)=>{handleRegister()}}>Sign up</a>
										</div>
                                        <div class="text-center mt-3">
                                            <strong>
                                                <a href="/">Already have an account?</a>
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