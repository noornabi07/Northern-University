import React from "react";
import Container from "../Container/Container";
import featur1 from "../../assets/featur1.jpg";
import featur2 from "../../assets/featur2.jpg";
import featur3 from "../../assets/featur3.jpg";

const Featured = () => {
  return (
    <Container>
      <h2 className="text-center font-bold text-4xl my-20">LMS Features</h2>

      <div>
        {/* featured1 */}
        <div className="md:flex justify-center items-center gap-20 md:mx-40">
          <div className="md:w-1/2 md:text-center">
            <h2 className="text-4xl font-bold">Campuses & Vision</h2>
            <p className="text-xl mt-7  text-gray-500">
              The university aspires to be a leading educational institution in
              Bangladesh, contributing significantly to the development of
              society and the nation.
              <p className="text-gray-700 font-semibold">
                Please note that the details provided here are based on
                information available up to my last update in January 2022
              </p>
              . For the most current information, it's advisable to visit the
              official website of Northern University Bangladesh or contact them
              directly.
            </p>
          </div>
          <div className="md:w-1/2 mx-auto">
            <img src={featur1} className="w-full" alt="" />
          </div>
        </div>

        {/* featured2 */}
        <div className="md:flex justify-center items-center gap-20 md:mx-40">
          <div className="md:w-1/2 md:text-center">
            <img src={featur2} className="w-full" alt="" />
          </div>

          <div className="md:w-1/2 mx-auto text-center">
            <h2 className="text-4xl font-bold">Quizzes and Questions</h2>
            <p className="text-xl mt-7  text-gray-500">
              Easily evaluate students via Quizzed and Questions. Kingster comes
              with various kinds of question settings such as True Or False,
              Multiple Choices, Single Choice, and Fill In Blank.
            </p>
          </div>
        </div>

        {/* featured3 */}
        <div className="md:flex justify-center items-center gap-20 md:mx-40">
          <div className="md:w-1/2 mx-auto text-center">
            <h2 className="text-4xl font-bold">Perfect Design</h2>
            <p className="text-xl mt-7  text-gray-500">
              LMS backend comes with sleek, modern and minimal design. The
              layout is clean, and intuitive. You can find essential features in
              the backend such as course list, quizzes score, wish list, past
              orders, and profile setting.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto">
            <img src={featur3} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
