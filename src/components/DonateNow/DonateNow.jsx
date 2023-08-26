import Image from "next/image";
import Link from "next/link";
import img from "../../../public/Gallery/gallery-7.jpg";

const DonateNow = () => {
	return (
		<div className="mt-40 mb-10">
			<div className="flex justify-center items-center gap-32">
				<div>
					<h2 className="text-4xl">They Need Your Help</h2>
					<p className="max-w-sm my-7">
						We collect your contribution to their aid. From Raised
						money, We Provide them, Food, Education etc.
					</p>
					<Link href={"payment"}>
						<button className="rounded-lg text-white bg-emerald-500 px-6 py-3">
							Donate Now
						</button>
					</Link>
				</div>

				{/* Image Section */}
				<div className="hidden md:block">
					<Image
						className="rounded-xl w-[630px] relative border-2"
						width={630}
						height={630}
						src="https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg?w=1060&t=st=1692942576~exp=1692943176~hmac=972921c0b78dc668fc194c0c1da55a68023e342d1e5f4cf262a9f19c93c5919b"
						alt="no image"
					/>
					<Image
						className="w-[620px] rounded-xl absolute transform -translate-y-[465px] -translate-x-10"
						width={630}
						height={630}
						src={img}
						alt="no image"
					/>
				</div>
			</div>
		</div>
	);
};

export default DonateNow;
