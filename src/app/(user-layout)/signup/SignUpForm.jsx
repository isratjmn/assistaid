"use client";
import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/util/createJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./signup.css";

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setValue,
	} = useForm();

	const { createUser, profileUpdate } = useAuth();
	const search = useSearchParams();
	const from = search.get("redirectUrl") || "/";
	const { replace, refresh } = useRouter();

	const uploadImage = async (event) => {
		const formData = new FormData();
		if (!event.target.files[0]) return;
		formData.append("image", event.target.files[0]);
		const toastId = toast.loading("Image uploading...");
		try {
			const res = await fetch(
				`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
				{
					method: "POST",
					body: formData,
				}
			);
			if (!res.ok) throw new Error("Failed to upload image");

			const data = await res.json();
			toast.dismiss(toastId);
			toast.success("Image uploaded successfully!");
			setValue("photo", data.data.url);
		} catch (error) {
			toast.error("Image not uploaded!");
			toast.dismiss(toastId);
		}
	};

	const onSubmit = async (data, event) => {
		const { name, email, password, photo } = data;
		const toastId = toast.loading("Loading...");
		try {
			await createUser(email, password);
			await createJWT({ email });
			await profileUpdate({
				displayName: name,
				photoURL: photo,
			});
			let result = await fetch("/api/users", {
				method: "POST",
				body: JSON.stringify(data),
			});
			result = await result.json();
			if (result.success) {
				toast.success("Successfully Added!");
			}
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
			<h1 className="text-4xl font-bold pt-16">Register now!</h1>
			<p className="pt-4 pb-3">Register now to connect with us.</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="signup-form border-2"
			>
				<div className="form-control">
					<label htmlFor="name" className="label label-text">
						Name
					</label>
					<input
						type="text"
						placeholder="name"
						id="name"
						name="name"
						className="input input-bordered"
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className="text-red-500 text-base mt-1">
							Please enter your name.
						</span>
					)}
				</div>
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
				</div>
				<div className="form-control">
					<label
						htmlFor="confirmPassword"
						className="label label-text"
					>
						Confirm Password
					</label>
					<input
						type="password"
						placeholder="Confirm Password"
						id="confirmPassword"
						name="confirmPassword"
						className="input input-bordered"
						autoComplete="new-password"
						{...register("confirmPassword", {
							required: true,
							minLength: 6,
							validate: (value) =>
								value === getValues("password") ||
								"The passwords do not match.",
						})}
					/>
					{errors.confirmPassword && (
						<span className="text-red-500 text-base mt-1">
							{errors.confirmPassword.message ||
								"Please confirm your password."}
						</span>
					)}
				</div>
				<div className="form-control">
					<label htmlFor="photo" className="label label-text">
						Photo
					</label>
					<input
						type="file"
						id="photo"
						onChange={uploadImage}
						className="file-input file-input-bordered file-input-primary w-full"
					/>
				</div>
				<div className="form-control mt-2">
					<button className="btn btn-primary" type="submit">
						Sign Up
					</button>
				</div>
				<p className="mt-3">
					Already have an account?{" "}
					<Link
						className="text-emerald-600 font-bold ml-1"
						href="/login"
					>
						Login
					</Link>
				</p>
				<div className="divider my-2">OR</div>
				<GoogleLogin
					className="justify-center mx-auto items-center"
					from={from}
				/>
			</form>
		</section>
	);
};

export default SignupForm;
