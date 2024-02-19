import React from 'react';
import Container from '../Container/Container';
import inner1 from '../../assets/inner/inner1.jpg'
import inner2 from '../../assets/inner/inner2.jpg'
import inner3 from '../../assets/inner/inner3.jpg'
import inner4 from '../../assets/inner/inner4.jpg'
import inner5 from '../../assets/inner/inner5.jpg'
import inner6 from '../../assets/inner/inner6.jpg'
import inner7 from '../../assets/inner/inner7.jpg'
import inner8 from '../../assets/inner/inner8.jpg'
import inner9 from '../../assets/inner/inner9.jpg'
import inner10 from '../../assets/inner/inner10.jpg'
import inner11 from '../../assets/inner/inner11.jpg'
import inner16 from '../../assets/inner/inner16.jpg'
import inner14 from '../../assets/inner/inner14.jpg'
import inner13 from '../../assets/inner/inner13.jpg'
import inner12 from '../../assets/inner/inner12.jpg'

import './InnerPage.css'




const InnerPage = () => {
  return (
    <div className="bg-base-200 py-8">
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold">
          Programs Of (Northern University)
        </h2>
        <p className="text-lg font-semibold text-gray-500 mt-5">
          Bangladesh has a prominent educational institution known as Northern
          University Bangladesh (NUB)
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  mx-28">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="container"
          >
            <div className="image-container"></div>
            <div className="text-content">
              <h2 className="text-2xl font-bold font-serif">Admission</h2>
              <p className="font-semibold mt-8 text-lg">
                Apply for admission is a great way to get a job in the field of
                web development. You can apply for admission by filling out the
                application form. If you're accepted.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="container"
          >
            <div className="image-container"></div>
            <div className="text-content">
              <h2 className="text-2xl font-bold font-serif">Academic</h2>
              <p className="font-semibold mt-8 text-lg">
                Academic is a great way to get a job in the field of web
                development. You can apply for admission by filling out the
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className="container"
          >
            <div className="image-container"></div>
            <div className="text-content">
              <h2 className="text-2xl font-bold font-serif">Ceremony</h2>
              <p className="font-semibold mt-8 text-lg">
                Ceremony is a great way to get a job in the field of web
                development. You can apply for admission by filling out the
                apply for admission by filling
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="text-center mt-20">
        <button className="py-2 px-6 bg-green-600 font-semibold text-xl text-white text-center">
          Admission Now
        </button>
      </div>
    </div>
  );
};

export default InnerPage;