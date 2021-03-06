import { Container, FormGroup, FormControl } from 'react-bootstrap'

export default function JumboContainer() {
  return (
    <section className="jumbo__container">
      <Container>
        <main className="row no-gutters jumbo__container">
          <FormGroup id='formSendEmail' className='col-xs-12 col-md-6'>
            <h1 className='title'>We give your business an edge over your competitors!</h1>
            <p className='description'>Everything you need for your business: Themes, Apps, Assets and More...</p>
            <FormControl className='custom__input' type="email" placeholder='Enter your email address' />
            <button type='submit' className='btn__purple'>Get Started</button>
          </FormGroup>
          <div className="figures__container col-xs-12 col-md-6">
            <div className="rectangle"></div>
            <div className="triangle"></div>
            <div className="yellow__circle"></div>
            <div className="aqua__circle"></div>
          </div>
        </main>
      </Container>
    </section>
  )
}