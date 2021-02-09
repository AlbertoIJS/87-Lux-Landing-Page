import { Container } from "react-bootstrap";
import Image from 'next/image';

export default function CustomSolutions() {
  return (
    <div className="footer__wrapper">
      <Container className='footer__cta text-center'>
        <div className="options__panel">
          <h3 className='mb-5'>Need a custom solution?</h3>
          <div className="columns__wrapper d-flex ">
            <ol className='mr-3'>
              <li>Install Theme</li>
              <li>Landing Page</li>
              <li>Build Online Store</li>
              <li>Custom Theme</li>
              <li>Custom Web Site</li>
              <li>Custom App</li>
              <li>Marketing Assets</li>
            </ol>
            {/* 3 columns */}
            <div className='showcase__container d-flex flex-column'>
              <strong className='align-self-start p-1 bg-white text-dark'>Install Theme</strong>
              <div className="columns__wrapper bg-white row no-gutters d-flex">
                <div className="install__theme col">
                  <p className='text-left px-2'>Having trouble with installing any of our themes? Well we can help you by installing the theme for you!</p>
                </div>
                <Image src='/ectasy__lading__square.png' width={300} height={300} className='col' />
                <Image src='/girl-and-laptop.png' width={300} height={300} className='col' />
              </div>
            </div>
          </div>
        </div>
        <p className='text-white'>We work with any budget!</p>
        <button className='btn__purple'>Lets get started</button>
      </Container>
    </div>
  )
}