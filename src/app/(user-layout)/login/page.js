"use client";
import LoginForm from "@/app/(user-layout)/login/LoginForm";
import LoginSvg from "@/components/LoginSvg";
import React from "react";

const Login = () => {
	return (
		<div className="hero bg-base-200 my-10">
			<div className="hero-content flex flex-col lg:flex-row justify-center">
				<div className="text-center p-10 lg:text-left lg:w-1/2">
					
					<LoginSvg />
				</div>
				<div className="card px-8 pt-36 flex-shrink-0 w-full max-w-lg lg:w-1/2">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
