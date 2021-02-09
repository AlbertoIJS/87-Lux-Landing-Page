import { Container } from "react-bootstrap";
import Image from 'next/image';

export default function PlatformsContainer() {
	return (
		<Container className='platforms'>
			<div className="brands">
				<span>Platforms</span>
				<Image src='/shopify_logo_whitebg.svg' alt='shopify logo' width={250} height={50} />
				<Image src='/WordPress_logo.svg' alt='word press logo' width={250} height={50} />
				<Image src='/BigCommerce-logo-dark.svg' alt='bigcommerce logo' width={250} height={150} />
				<Image src='/Wix.com_website_logo.svg' alt='wix logo' width={150} height={50} />
			</div>
		</Container>
	)
}