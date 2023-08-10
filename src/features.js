import featu from "./images/features/desktop/hero.jpg";
import response from "./images/features/desktop/responsive.svg";
import upload from "./images/features/desktop/no-limit.svg";
import embed from "./images/features/desktop/embed.svg";
import custom from "./images/features/desktop/custom-domain.svg";
import boost from "./images/features/desktop/boost-exposure.svg";
import drag from "./images/features/desktop/drag-drop.svg";
import { FaArrowRight } from "react-icons/fa";

function Features() {
  return (
    <div className="features">
      <Features1 />
      <Features2 />
      <Features3 />
    </div>
  );
}
function Features1() {
  return (
    <div className="features1">
      <div className="sub-features">
        <h1>FEATURES</h1>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photographers who wanted to share their
          stories
        </p>
      </div>
      <img src={featu} alt="features" />
    </div>
  );
}
function Features2() {
  return (
    <div className="features2">
      <div className="sub-featuress">
        <img src={response} alt="response" className="feature-img" />
        <h3>100% Responsive</h3>
        <p>
          No matter which the device you're on, our site is fully responsive and
          stories look beautiful on any screen
        </p>
      </div>
      <div className="sub-featuress">
        <img src={upload} alt="response" className="feature-img img2" />
        <h3>No Photo Upload Limit</h3>
        <p>
          Our tool has no limits on upload or bandwidth.Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>
      <div className="sub-featuress">
        <img src={embed} alt="response" className="feature-img" />
        <h3>Avaliable to Embed</h3>
        <p>
          Embed Tweets,Facebook posts,instagram media,Vimeo or YouTube
          videos,Google Maps and more.
        </p>
      </div>
      <div className="sub-featuress">
        <img src={custom} alt="response" className="feature-img" />
        <h3>Custom Domain</h3>
        <p>
          WIth Photosnap subscription you can host your stories on your own
          domain.You can also remove our branding!
        </p>
      </div>
      <div className="sub-featuress">
        <img src={boost} alt="response" className="feature-img img2" />
        <h3>Boost Your Exposure</h3>
        <p>
          Users that viewed your story or gallery can easily get notified of new
          and featured stories with our built in mailing list.
        </p>
      </div>
      <div className="sub-featuress">
        <img src={drag} alt="response" className="feature-img" />
        <h3>Drag & Drop Image</h3>
        <p>
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </p>
      </div>
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

export default Features;
