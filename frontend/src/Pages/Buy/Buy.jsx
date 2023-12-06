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

const Buy = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          backgroundPosition: "top left",
          height: "80%",
          marginLeft: "10rem",
        }}
      ></div>
      <div style={{ maxWidth: "60%", padding: "5rem", marginTop: '-3rem' }}>
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

export default Buy;
