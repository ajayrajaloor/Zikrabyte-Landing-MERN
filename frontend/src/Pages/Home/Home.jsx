import React from "react";
import { BiCarousel } from "react-icons/bi";


const InfoBlock = ({ title, content }) => (
  <div className="additional-info">
    <BiCarousel className="info-icon" size={25} />
    <div>
      <h1 className="font-bold text-lg mb-1">{title}</h1>
      <p>{content}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* First Section */}
      <div
        className="flex items-center justify-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div style={{ maxWidth: "50%", padding: "5rem" }}>
          <h1 className="text-3xl font-bold mb-4">
            Introduce your product Quickly & Effectively
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div
          style={{
            width: "50%",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/images.jpeg)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            height: "100%",
          }}
        ></div>
      </div>

      {/* Second Section */}
      <div
        className="flex items-center justify-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div style={{ maxWidth: "50%", padding: "5rem" }}>
          <h1 className="text-3xl font-bold mb-4">Light, Fast & Powerful</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex additional-info-row mt-4 justify-between">
            <InfoBlock
              title="Title 1"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
            <div style={{ margin: "0 1rem" }}></div>{" "}
            {/* Add some space between InfoBlocks */}
            <InfoBlock
              title="Title 2"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
          </div>
        </div>
        <div
          style={{
            width: "40%",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/images2.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            height: "70%",
            marginRight: "0",
          }}
        ></div>
      </div>

      {/* Third Section */}
      <div
        className="flex items-center justify-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div
          style={{
            width: "40%",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/images3.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left", // Adjusted position to 'top left'
            height: "70%",
            marginLeft: "0", // Adjusted marginLeft to '0'
          }}
        ></div>
        <div style={{ maxWidth: "50%", padding: "5rem" }}>
          <h1 className="text-3xl font-bold mb-4">Light, Fast & Powerful</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* fourth section */}

      <div
        className="flex items-center justify-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div
          style={{
            width: "40%",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/images4.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top-left",
            height: "70%",
            marginLeft: "0",
          }}
        ></div>

        <div style={{ maxWidth: "50%", padding: "5rem" }}>
          <h1 className="text-3xl font-bold mb-4">Light, Fast & Powerful</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* fifth section */}

      <div
        className="flex items-center justify-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div
          style={{
            width: "40%",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/images5.jpeg)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "70%",
            marginLeft: "0",
          }}
        ></div>
        <div style={{ maxWidth: "50%", padding: "5rem" }}>
          <h1 className="text-3xl font-bold mb-4">Light, Fast & Powerful</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-blue-950 mt-10 text-white p-2 px-8 rounded-md">
            Purchase Now
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 h-auto p-10 bg-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">A Price To Suit Everyone</h1>
          <p className="max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="flex flex-col items-center pt-5">
          <h1 className="text-5xl font-bold mb-4">$40</h1>
          <p>UI Design Kit</p>
        </div>

        <div className="flex flex-col items-center pt-5">
          <p>See One Price Simple</p>
          <button className="bg-blue-950 mt-4 text-white p-2 px-8 rounded-md">
            Purchase Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
