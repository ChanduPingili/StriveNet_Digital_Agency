import { useState } from 'react';
import axios from 'axios';
function Contact(){
    
  const [name,setName] = useState('');
  const [subject,setSubject] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
 
  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(subject.length === 0){
      alert("subject has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }else if(message.length === 0){
        alert("Message has left Blank!");
      }
    else{
      const url = 'http://localhost/strivenet/src/database/form_submit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('subject', subject);
      fData.append('email', email);
      fData.append('message', message);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
 

  return (
    <div className="container-xxl py-5" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
                    <h1 className="text-center mb-5">Contact For Any Query</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" name="name"  value={name} onChange={(e) => setName(e.target.value)}/>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"  name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"  name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 150}} name="message"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" name="submit" id="submit" value="submit" onClick={handleSubmit}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact;