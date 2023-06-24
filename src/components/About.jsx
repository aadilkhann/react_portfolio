import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I'm Adil Khan, a passionate and enthusiastic fresher with a strong foundation in web development and Android application development. I have a solid understanding of various technologies such as React.js, Node.js, Express.js, MySQL, NoSQL, and Android development.
          <br />

          As a lifelong learner, I constantly seek out new challenges to enhance my skills and stay up to date with the latest industry trends. I believe in the power of technology to transform businesses and improve people's lives, and I'm excited to contribute to this ever-evolving field.
          <br />

          {/* During my academic journey and personal projects, I have gained hands-on experience in developing responsive and user-friendly web applications using React.js, along with server-side development using Node.js and Express.js. I have also worked with databases, including MySQL and NoSQL.
          <br /> */}
        </p>
      </div>
    </div>
  );
};

export default About;
