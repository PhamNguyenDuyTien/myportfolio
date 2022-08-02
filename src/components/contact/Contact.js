import {React, useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lno0gyt', 'template_fuaud4i', form.current, 'xm_pABPUkZSV78KA_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>duytien9639.2012016@gmail.com</h5>
            <a href="mailto:pndtien8121" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option_icon'/>
            <h4>Messenger</h4>
            <h5>Pham Nguyen Duy Tien</h5>
            <a href="mailto:pndtien8121" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option_icon'/>
            <h4>Phone</h4>
            <h5>+84 393 6151 88</h5>
            <a href="https://api.whatsapp.com/send?phone=84393615188" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact