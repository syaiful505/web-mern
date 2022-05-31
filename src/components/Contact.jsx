import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
              <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                      <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                      <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b></h1>
                      <hr className="w-25 mx-auto" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/img/contact.webp" alt="Contact" className="w-100" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                              <label for="name" class="form-label">Your Name</label>
                              <input type="text" placeholder="Syaiful Style" class="form-control" id="name" />
                            </div> 
                            <div class="mb-3">
                              <label for="email" class="form-label">Email address</label>
                              <input type="email" placeholder="syaifulstyle505@gmail.com" class="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                              <label for="isi" class="form-label">Your Message</label>
                              <textarea class="form-control" id="isi" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Send Message<i className="fa fa-paper-plane ms-2"></i></button>
                        </form>
                    </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Contact;
