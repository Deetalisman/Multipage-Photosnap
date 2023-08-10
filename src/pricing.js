import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import price from "./images/pricing/desktop/hero.jpg";

function Pricing() {
  return (
    <div>
      <Pricing1 />
      <Pricing2 />
      <Pricing3 />
      <Features3 />
    </div>
  );
}

function Pricing1() {
  return (
    <div className="pricing1">
      <div className="sub-pricing1">
        <h1>PRICING</h1>
        <p>
          Create your stories,Photosnap is a platform for photographers and
          visual storyteller.It's the simple way to create and share your
          photos.
        </p>
        <FaArrowRight id="arrow" />
      </div>
      <img src={price} />
    </div>
  );
}

function Pricing2() {
  return (
    <div className="pricing2">
      <div className="sub-pricing2">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" />
          <small className="slider"></small>
        </label>
        <p>Yearly</p>
      </div>
      <div className="sub-pricing21">
        <div className="pricer">
          <h3>Basic</h3>
          <p>
            Includes basic usage of our platform.Recommend for new and aspiring
            photographers
          </p>
          <h1>$19</h1>
          <p>per month</p>
          <button>PICK PLAN</button>
        </div>
        <div className="pricer">
          <h3>Pro</h3>
          <p>
            More advanced feature avaliable. Recommended for photography
            veterans and professional.
          </p>
          <h1>$39</h1>
          <p>per month</p>
          <button>PICK PLAN</button>
        </div>
        <div className="pricer">
          <h3>Business</h3>
          <p>
            Additional features avaliable such as more detailed metric.
            Recommend for business owners
          </p>
          <h1>$99</h1>
          <p>per month</p>
          <button>PICK PLAN</button>
        </div>
      </div>
    </div>
  );
}

function Pricing3() {
  return (
    <div className="pricing3">
      <h1>COMPARE</h1>
      <table>
        <thead>
          <tr className="row">
            <th></th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>UNLIMITED STORY POSTING</th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>UNLIMITED STORY UPLOAD</th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>EMBEDDING CUSTOM CONTENT</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>CUSTOMIZE METADATA</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>ADVANCED METRICS</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>PHOTO DOWNLOADS</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>SEARCH ENGINE INDEXING</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
          <tr>
            <th>CUSTOMIZE ANALYTICS</th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaMinus />
            </th>
            <th>
              <FaCheck />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Features3() {
  return (
    <div className="features3">
      <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
      <span>
        <p className="invite">GET AN INVITE </p>
        <FaArrowRight id="arrow" />
      </span>
    </div>
  );
}
export default Pricing;
