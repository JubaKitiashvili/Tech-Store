import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact Us" />
          <form
            className="mt-5"
            action="https://formspree.io/juba.kitiashvili@gmail.com"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Juba Kitiashvili"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="important!!!"
              />
            </div>
            {/* nessage */}
            <div className="form-group">
              <textarea name="message" className="form-control" rows="10">
                hello there body
              </textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="form-control
              bg-primary
              text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
