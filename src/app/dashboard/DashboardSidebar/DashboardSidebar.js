"use client";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	FaUserShield,
	FaIdCardAlt,
	FaShoppingCart,
	FaSignOutAlt,
} from "react-icons/fa";
import { RiAccountCircleLine, RiAddBoxFill } from "react-icons/ri";

import { HiHome } from "react-icons/hi";
import { MdEventAvailable, MdEventNote } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";
import useAdmin from "@/hooks/useAdmin";
import useDonor from "@/hooks/useDonor";

const DashboardSidebar = () => {
	const { user } = useAuth();
	const { email, photoURL, displayName } = user || {};
	const cartData = useCart();
	const isAdmin = user?.role === "isAdmin";
	const isDonor = user?.role === "isDonor";
	/* const [isAdmin] = useAdmin();
	const [isDonor] = useDonor(); */

	return (
		<div>
			<button
				data-drawer-target="logo-sidebar"
				data-drawer-toggle="logo-sidebar"
				aria-controls="logo-sidebar"
				type="button"
				className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-green-200 dark:bg-gray-800">
					<a href="/" className="flex items-center pl-2.5 mb-5">
						<Image
							src="/heart.png"
							alt="My Image"
							width={35}
							height={35}
							className="w-[25px] md:w-[35px]"
						/>
						<h1 className="text-emerald-600 font-extrabold text-sm md:text-xl dark:text-white">
							aid
							<span className="text-xl md:text-3xl">N</span>
							assist
						</h1>
					</a>

					<div className="mb-5">
						<div className="flex justify-center mt-5 mb-2">
							<Image
								className="rounded-full"
								src={
									photoURL ||
									"https://img.freepik.com/free-icon/user_318-159711.jpg"
								}
								alt="No one Here"
								width={100}
								height={100}
							></Image>
						</div>
						<div>
							<h2 className="text-center text-lg font-bold">
								{displayName || "Profile Name"}
							</h2>
							<p className="text-center text-sm italic">
								{email}
							</p>
						</div>
					</div>
					<div className=" bg-teal-500 rounded-2xl h-[5px] mb-10"></div>

					{/* Role-specific menu items */}
					{isAdmin ? (
						<>
							<ul>
								<h2 className="flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
									<FaUserShield className="text-xl" /> Admin
									Dashboard
								</h2>
								<li className="mb-3 dark:text-white pt-6 lg:text-black text-semibold text-base flex gap-3 items-center">
									<Link href="/dashboard/manageclasses">
										<FaIdCardAlt className="text-xl text-lime-700" />
										Manage Users
									</Link>
								</li>
							</ul>
						</>
					) : isDonor ? (
						<>
							<ul>
								<h2 className="flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
									<BiSolidDonateHeart className="text-2xl" />
									Donor Dashboard
								</h2>
								<li className="mb-4">
									<Link
										href="/dashboard/donorhistory"
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
									>
										<RiAddBoxFill className="text-2xl text-lime-700" />
										Add Donation
									</Link>
								</li>
								<li className="mb-4">
									<Link
										href="/dashboard/addaclass"
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
									>
										<RiAddBoxFill className="text-2xl text-lime-700" />
										Add Classes
									</Link>
								</li>
							</ul>
						</>
					) : (
						<>
							<ul>
								<h2 className=" flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
									<RiAccountCircleLine className="text-2xl" />
									User Dashboard
								</h2>

								<li>
									<Link
										href="/dashboard/userCart"
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<FaShoppingCart className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaShoppingCart>
										<span className="flex-1 ml-3 whitespace-nowrap gap-4">
											Cart
											<span className="rounded-lg p-1 bg-blue-400">
												+{cartData.length || 0}
											</span>
										</span>
									</Link>
								</li>
								{/* <li>
									<Link
										href="/dashboard"
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<RiDashboard3Line className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></RiDashboard3Line>
										<span className="ml-3">Home board</span>
									</Link>
								</li> */}
								<li>
									<Link
										href="/dashboard/allroles"
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<MdEventNote className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></MdEventNote>
										<span className="flex-1 ml-3 whitespace-nowrap">
											Manage Users
										</span>
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/selectedEvents"
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<MdEventAvailable className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></MdEventAvailable>
										<span className="flex-1 ml-3 whitespace-nowrap">
											Selected Events
										</span>
									</Link>
								</li>
							</ul>
						</>
					)}
					<div className=" bg-teal-500 rounded-2xl mt-10 h-[5px] mb-2"></div>

					<ul>
						<li>
							<Link
								href="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<HiHome className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
								<span className="flex-1 ml-3 whitespace-nowrap">
									Home
								</span>
							</Link>

							<Link
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<FaSignOutAlt className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
								<span className="flex-1 ml-3 whitespace-nowrap">
									Logout
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default DashboardSidebar;
