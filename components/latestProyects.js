import { Container } from 'react-bootstrap';
import Image from 'next/image';

export default function LatestProyects() {
  return (
    <div className='latest__proyect__container'>
      <div className="slim__rectangle"><span className='text'>Latest  proyects</span></div>
      <div className="proyects">
        <Image src='/Dashhboard.webp' width={500} height={350} />
        <Image src='/ectasy__lading.webp' width={500} height={350} />
        <Image src='/touch__landing.webp' width={500} height={350} />
      </div >
      <div className="buttons__container">
        <button className="btn__purple__outline">View Themes</button>
        <button className="btn__purple__outline">View Apps</button>
      </div>
    </div>
  )
}