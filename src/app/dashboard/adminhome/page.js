"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	PieChart,
	Pie,
	ResponsiveContainer,
	Legend,
} from "recharts";

const AdminHomepage = () => {
	const { user } = useAuth();
	const { displayName } = user || {};

	return (
		<section className="w-[65%] mx-auto">
			<h2 className="text-3xl font-bold text-center mt-0 md:mt-10 pt-10 pb-5">
				Hi, {displayName}
			</h2>
			<div className=" text-black justify-center items-center">
				<div className="stats flex  gap-6 shadow-md">
					<div className="stat flex-1 bg-blue-200">
						<div className="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-8 h-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<div className="stat-title">Total Donation</div>
						<div className="stat-value">$50</div>
						<div className="stat-desc">Jan 1st - Feb 1st</div>
					</div>

					<div className="stat flex-1 bg-green-200">
						<div className="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-8 h-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								></path>
							</svg>
						</div>
						<div className="stat-title">Total Donor</div>
						<div className="stat-value">1014</div>
						<div className="stat-desc">-1.8 Than last Month</div>
					</div>

					<div className="stat flex-1 bg-yellow-100">
						<div className="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-8 h-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 1100 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								></path>
							</svg>
						</div>
						<div className="stat-title">Menu Items</div>
						<div className="stat-value"></div>
						<div className="stat-desc">↗︎ 400 (22%)</div>
					</div>

					
				</div>
				<div className="flex">
					<div className="w-1/2"></div>
					<div className="w-1/2"></div>
				</div>
			</div>
		</section>
	);
};

export default AdminHomepage;
