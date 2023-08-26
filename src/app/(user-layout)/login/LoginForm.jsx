"use client";
import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/util/createJWT";
import { useSearchParams, useRouter } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link";
import "./loginform.css";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { signIn } = useAuth();
	const search = useSearchParams();
	const from = search.get("redirectUrl") || "/";
	const { replace, refresh } = useRouter();

	const onSubmit = async (data) => {
		const { email, password } = data;
		const toastId = toast.loading("Loading...");
		try {
			await signIn(email, password);
			await createJWT({ email });
			startTransition(() => {
				refresh();
				replace(from);
				toast.dismiss(toastId);
				toast.success("User signed in successfully");
			});
		} catch (error) {
			toast.dismiss(toastId);
			toast.error(error.message || "User not signed in");
		}
	};
	return (
		<section>
			<h1 className="text-5xl font-bold pt-4">Login Now!</h1>
			<p className="pt-4 pb-6">Login now to connect with us.</p>
			<form onSubmit={handleSubmit(onSubmit)} className="card-body">
				<div className="form-control">
					<label htmlFor="email" className="label label-text">
						Email
					</label>
					<input
						type="email"
						placeholder="email"
						id="email"
						name="email"
						className="input input-bordered"
						autoComplete="email"
						{...register("email", {
							required: true,
							pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-base mt-1">
							Please enter a valid email address.
						</span>
					)}
				</div>
				<div className="form-control">
					<label htmlFor="password" className="label label-text">
						Password
					</label>
					<input
						type="password"
						placeholder="password"
						id="password"
						name="password"
						className="input input-bordered"
						autoComplete="new-password"
						{...register("password", {
							required: true,
							minLength: 6,
						})}
					/>
					{errors.password && (
						<span className="text-red-500 text-base mt-1">
							Please enter a password.
						</span>
					)}
					<label className="label">
						<a href="#" className="label-text-alt link link-hover">
							Forgot Password?
						</a>
					</label>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-[#059669]" type="submit">
						Login
					</button>
				</div>
				<p className="mt-3">
					Don&apos;t have an account?
					<Link
						className="text-emerald-600 font-bold ml-1"
						href="/signup"
					>
						Signup
					</Link>
				</p>
				<div className="divider mt-5">OR</div>
				<div className="text-center">
					<GoogleLogin
						className="justify-center text-center mx-auto items-center"
						from={from}
					/>
				</div>
			</form>
		</section>
	);
};

export default LoginForm;
