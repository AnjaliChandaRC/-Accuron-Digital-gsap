import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import AboutUsImg from "../images/about-us.png";
import AboutUsImgGradient from "../images/about-us-position.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutUs = () => {
  gsap.registerEffect(ScrollTrigger);

  let aboutus = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about_us_parent",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scrub: true,
      },
    })
    .fromTo(
      ".about_us_img",
      {
        xPercent: -50,
        duration: 3,
      },
      {
        xPercent: 0,
      }
    );

  return (
    <>
      <section className="py-5 mt-5 position-relative about_us_parent">
        <div className="pt-5">
          <img
            className="position-absolute z_index_1 about_us_img"
            src={AboutUsImg}
            alt=""
          />
          <img
            className="position-absolute about_us_gradient_img about_us_gradient_img"
            src={AboutUsImgGradient}
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <p>
                Iaculis nullam vulputate tellus volutpat. Turpis pellentesque
                vitae pharetra vitae leo. Amet ut proin proin massa turpis nisl.
                Sapien egestas pellentesque id condimentum adipiscing malesuada.
                Quisque blandit at lacus elit mi. Vitae pharetra elementum
                cursus dui. Imperdiet morbi vulputate imperdiet ultrices ornare
                eget integer viverra aliquet. Aliquam cursus fringilla convallis
                vitae non sed iaculis. Odio cursus ut nunc nec pellentesque
                vitae sapien nibh. Risus pharetra pretium rhoncus facilisi at
                cras nunc commodo scelerisque. Felis q
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
