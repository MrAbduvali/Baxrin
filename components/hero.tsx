"use client";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";
// import a from "/img/img1.jpg";

export default function Hero() {
  return (
    <div className="w-screen">
      <Carousel>
        <Carousel.Item
          interval={1000}
          className="flex flex-col items-center overflow-hidden bg-[url('/img/img1.jpg')] bg-no-repeat bg-center bg-cover h-[80vh] cmd:h-[50vh]"
        ></Carousel.Item>
        <Carousel.Item
          interval={500}
          className="flex flex-col items-center overflow-hidden bg-[url('/img/img2.jpeg')] bg-no-repeat bg-center bg-cover h-[80vh] cmd:h-[50vh]"
        ></Carousel.Item>
        <Carousel.Item className="flex flex-col items-center overflow-hidden bg-[url('/img/img3.jpeg')] bg-no-repeat bg-center bg-cover h-[80vh] cmd:h-[50vh]"></Carousel.Item>
        <Carousel.Item className="flex flex-col items-center overflow-hidden bg-[url('/img/img4.jpg')] bg-no-repeat bg-center bg-cover h-[80vh] cmd:h-[50vh]"></Carousel.Item>
        <Carousel.Item className="flex flex-col items-center overflow-hidden bg-[url('/img/immg5.jpg')] bg-no-repeat bg-center bg-cover h-[80vh] cmd:h-[50vh]">
          {/* <Carousel.Caption>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
