import { Container } from "react-bootstrap";
import Image from 'next/image';

export default function MeetTheTeem() {
  return (
    <section className="meet__the__team">
      <Container>
        <div className="profiles__wrapper">
          <div className="up">
            <div className='pink__border'>
              <Image src='/p1.png' width={80} height={80} />
            </div>
            <div className='green__border'>
              <Image src='/p2.png' width={135} height={135} />
            </div>
            <div className='dark__yellow__border'>
              <Image src='/p3.png' width={80} height={80} />
            </div>
            <div className='purple__border' >
              <Image src='/p4.png' width={132} height={132} />
            </div>
          </div>
          <h2>Meet the team</h2>
          <div className="down">
            <div className='blue__border'>
              <Image src='/p5.png' width={185} height={185} />
            </div>
            <div className='yellow__border'>
              <Image src='/p6.png' width={80} height={80} />
            </div>
            <div className='orange__border'>
              <Image src='/p7.png' width={80} height={80} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}