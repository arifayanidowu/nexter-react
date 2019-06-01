import React from "react";

export default function Features() {
  return (
    <section className="features">
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-global" />
        </svg> */}
        <i className="fas fa-globe feature__icon fa-3x" />
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-trophy" />
        </svg> */}
        <i className="fas fa-trophy feature__icon fa-3x" />
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-map-pin" />
        </svg> */}
        <i className="fas fa-map-marker-alt feature__icon fa-3x" />
        <h4 className="heading-4 heading-4--dark">
          All homes in top locations
        </h4>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-key" />
        </svg> */}
        <i className="fas fa-key feature__icon fa-3x" />

        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-presentation" />
        </svg> */}
        <i className="fas fa-chart-line feature__icon fa-3x" />

        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        {/* <svg className="feature__icon">
          <use xlink:href="img/sprite.svg#icon-lock" />
        </svg> */}
        <i className="fas fa-lock feature__icon fa-3x" />

        <h4 className="heading-4 heading-4--dark">Secure payment on Nexter</h4>
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
}
