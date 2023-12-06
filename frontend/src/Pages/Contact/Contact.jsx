import React from 'react';
import { BiCarousel } from 'react-icons/bi';

const InfoBlock = ({ title, content }) => (
  <div className="additional-info">
    <BiCarousel className="info-icon" size={25} />
    <div>
      <h1 className="font-bold text-lg mb-1">{title}</h1>
      <p>{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        marginTop: '3rem',
        marginBottom: '3rem',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div
        style={{
          width: "40%",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/images7.jpeg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",  // Adjusted to top left
          height: "100%",
          marginLeft: "10rem",  // Adjusted to marginLeft
        }}
      ></div>
      <div style={{ maxWidth: "60%", padding: "5rem" }}>
        <h1 className="text-3xl font-bold mb-4">Light, Fast & Powerful</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div>
          <div className="flex additional-info-row mt-6 justify-between">
            <InfoBlock
              title="Title 1"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <div style={{ margin: "0 1rem" }}></div>{" "}
            {/* Add some space between InfoBlocks */}
            <InfoBlock
              title="Title 2"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
          <div className="flex additional-info-row mt-6 justify-between">
            <InfoBlock
              title="Title 1"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            />
            <div style={{ margin: "0 1rem" }}></div>{" "}
            {/* Add some space between InfoBlocks */}
            <InfoBlock
              title="Title 2"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
