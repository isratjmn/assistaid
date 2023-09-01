import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Gallery from "@/components/Gallery/Gallery";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Misson from "@/components/Mission/Misson";
import Partner from "@/components/Partner/Partner";
import Causes from "@/components/PopularCauses/Causes";
import Testimonial from "@/components/Testimonial/Testimonial";
import Volunteers from "@/components/Volunteers/Volunteers";

export default function Home() {
	return (
		<div>
			<HomeSlider />
			<Misson />
			<BecomeVolunteer />
			<Volunteers />
			<Causes />
			<Gallery />
			<Testimonial />
			<Partner />
		</div>
	);
}
