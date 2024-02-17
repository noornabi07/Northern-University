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

const InnerPage = () => {
  return (
    <div className="bg-base-200 py-8">
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold">
          Pre built inner pages (Northern University)
        </h2>
        <p className="text-lg font-semibold text-gray-500 mt-5">
          Bangladesh has a prominent educational institution known as Northern
          University Bangladesh (NUB)
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-28">
          <div>
            <img
              src={inner1}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">About Us</h3>
          </div>
          <div>
            <img
              src={inner2}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              Applying Page
            </h3>
          </div>
          <div>
            <img
              src={inner3}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Alumni</h3>
          </div>
          <div>
            <img
              src={inner4}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Athletics</h3>
          </div>
          <div>
            <img
              src={inner10}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Campus Tour</h3>
          </div>
          <div>
            <img
              src={inner11}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Curriculum</h3>
          </div>
          <div>
            <img
              src={inner16}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Faculty</h3>
          </div>
          <div>
            <img
              src={inner5}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              Single Instructor
            </h3>
          </div>
          <div>
            <img
              src={inner6}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              Donation Page
            </h3>
          </div>
          <div>
            <img
              src={inner7}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Department</h3>
          </div>
          <div>
            <img
              src={inner13}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Major</h3>
          </div>
          <div>
            <img
              src={inner12}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              University Life
            </h3>
          </div>
          <div>
            <img
              src={inner14}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">Scholarships</h3>
          </div>
          <div>
            <img
              src={inner8}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              Course Search
            </h3>
          </div>
          <div>
            <img
              src={inner9}
              className="w-full hover:scale-105 hover:duration-300 rounded-lg"
              alt=""
            />
            <h3 className="text-xl text-center font-bold mt-8">
              Single Course
            </h3>
          </div>
        </div>
      </Container>

      <div className='text-center mt-20'>
        <button className='py-2 px-6 bg-green-600 font-semibold text-xl text-white text-center'>Admission Now</button>
      </div>
    </div>
  );
};

export default InnerPage;