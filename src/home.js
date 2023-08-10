import create from "./images/home/desktop/create-and-share.jpg";
import create1 from "./images/home/tablet/create-and-share.jpg";
import beauty from "./images/home/desktop/beautiful-stories.jpg";
import design from "./images/home/desktop/designed-for-everyone.jpg";
import response from "./images/features/desktop/responsive.svg";
import upload from "./images/features/desktop/no-limit.svg";
import embed from "./images/features/desktop/embed.svg";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Create />
      <Beautiful />
      <Design />
      <Story />
      <Feature />
    </div>
  );
}

function Create() {
  return (
    <div className="create createM">
      <div className="sub-create">
        <h1>CREATE AND SHARE YOUR PHOTO STORIES</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers.We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <span>
          <a href="#">GET AN INVITE</a>
          <FaArrowRight id="arrow" />
        </span>
      </div>
      <img src={create} alt="create" id="create-img" />
    </div>
  );
}

function Beautiful() {
  return (
    <div className="create">
      <img src={beauty} alt="beautiful" />
      <div className="sub-beauty">
        <h1>BEAUTIFUL STORIES EVERYTIME</h1>
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos,text,embed maps and media from other networks. Then
          share your story with everyone.
        </p>
        <span>
          <a href="#">VIEW THE STORIES</a>
          <FaArrowRight id="arrow" />
        </span>
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="create createM">
      <div className="sub-beauty">
        <h1>DESIGN FOR EVERYONE</h1>
        <p>
          Photosnap can help you create stories that resonate with your audience
          .Our tool is designed fro phtographers of all levels,brands,businesses
          you name it
        </p>
        <span>
          <a href="#">GET AN INVITE</a>
          <FaArrowRight id="arrow" />
        </span>
      </div>
      <img src={design} alt="beautiful" />
    </div>
  );
}
function Story() {
  return (
    <div className="story">
      <div className="sub-story one">
        <div className="me">
          <h3>The Mountains</h3>
          <p>by John Applessed</p>
          <span className="sub-story-span">
            <p>Read Story</p> <FaArrowRight id="arrow" />
          </span>
        </div>
      </div>
      <div className="sub-story two">
        <div className="me">
          <h3>Sunset Cityscapes</h3>
          <p>by Benjamin Cruz</p>
          <span className="sub-story-span">
            <p>Read Story</p> <FaArrowRight id="arrow" />
          </span>
        </div>
      </div>
      <div className="sub-story three">
        <div className="me">
          <h3>18 Days Voyage</h3>
          <p>by Alexei Borodon</p>
          <span className="sub-story-span">
            <p>Read Story</p> <FaArrowRight id="arrow" />
          </span>
        </div>
      </div>
      <div className="sub-story four">
        <div className="me">
          <h3>Architecturals</h3>
          <p>by Samantha Brooke</p>
          <span className="sub-story-span">
            <p>Read Story</p> <FaArrowRight id="arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="feature">
      <div className="sub-feature">
        <img src={response} alt="response" className="feature-img" />
        <h3>100% Responsive</h3>
        <p>
          No matter which the device you're on, our site is fully responsive and
          stories look beautiful on any screen
        </p>
      </div>
      <div className="sub-feature">
        <img src={upload} alt="response" className="feature-img img2" />
        <h3>No Photo Upload Limit</h3>
        <p>
          Our tool has no limits on upload or bandwidth.Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>
      <div className="sub-feature">
        <img src={embed} alt="response" className="feature-img" />
        <h3>Avaliable to Embed</h3>
        <p>
          Embed Tweets,Facebook posts,instagram media,Vimeo or YouTube
          videos,Google Maps and more.
        </p>
      </div>
    </div>
  );
}

export default Home;
