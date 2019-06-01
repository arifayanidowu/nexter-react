import React from "react";
import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";

export default function Homes() {
  return (
    <section className="homes">
      <div className="home">
        <img src={house1} alt="House 1" className="home__img" />
        <i className="far fa-heart home__like" />

        <h5 className="home__name">Beautiful Family House</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />
          <p>$1,200,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house2} alt="House 2" className="home__img" />
        <i className="far fa-heart home__like" />

        <h5 className="home__name">Modern Glass Villa</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />

          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />

          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />

          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />

          <p>$2,750,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house3} alt="House 3" className="home__img" />
        <i className="far fa-heart home__like" />

        <h5 className="home__name">Cozy Country House</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />

          <p>UK</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />

          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />

          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />

          <p>$850,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>
      <div className="home">
        <img src={house4} alt="House 4" className="home__img" />

        <i className="far fa-heart home__like" />

        <h5 className="home__name">Large Rustical Villa</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />

          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />

          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />

          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />

          <p>$1,950,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>
      <div className="home">
        <img src={house5} alt="House 5" className="home__img" />

        <i className="far fa-heart home__like" />

        <h5 className="home__name">Majestic Palace House</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />

          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />

          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />

          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />

          <p>$9,500,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>
      <div className="home">
        <img src={house6} alt="House 6" className="home__img" />

        <i className="far fa-heart home__like" />

        <h5 className="home__name">Modern Family Apartment</h5>

        <div className="home__location">
          <i className="fas fa-map-marker-alt mr-2" />

          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <i className="far fa-user mr-2" />

          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <i className="fas fa-expand mr-2" />

          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="fas fa-key mr-2" />

          <p>$600,000</p>
        </div>

        <button className="cta home__btn">Contact Realtor</button>
      </div>
    </section>
  );
}
