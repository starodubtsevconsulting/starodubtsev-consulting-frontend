import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Software Development
            <br />
          </h2>
          <p>
            Things that wok and last.&nbsp;
            <br />
            Design & architecture. &nbsp;
            <br />
            Make it right.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            To work
            <br />
          </h2>
          <p>
            Making things clear, right and on time
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            To relax
            <br />
            to get new ideas
          </h2>
          <p>
            Making it natural, no stress, to reflect
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            To see the patterns
          </h2>
          <p>
            There is always something more to see.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>We provide services for those who dare to ask</h2>
          <p>
            Get yourself some of professional expertise to see the picture from different perspective.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Looking ahead</h3>
            <p>
              Know where you are, to know how to look ahead.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Tech as it is</h3>
            <p>
              Use right technology for the right moment. Don't let it be your bottleneck.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Coding</h3>
            <p>
              When it comes to codding, make sure it reflects you domain, your business and your goals. Not to be a thing in itself.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Safe and sound</h3>
            <p>
              Sometimes you have to do nothing. To be safe an sound. But sometimes you have to act.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Put your heart</h3>
            <p>
              Enjoy what you are doing. Otherwise do not call it "good job".
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Reach the goal</h3>
            <p>
              Get you what you aiming for. In reasonable time.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Sometimes</h2>
          <p>
            All you need is look back and reiterate.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Reiterate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
