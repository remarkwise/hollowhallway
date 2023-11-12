import { useState } from "react";
import "../css/Welcome.css";

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h1>Unlock from within.</h1>
      <p className="tagline">Some doors open from the other side.</p>
      <p>
        Our goal is to find your key and get you pathed where you want to be.
      </p>
      <hr />
      <h2>Why bother wandering the Hollow Hallway?</h2>
      <p>Maybe this isn't for you, but see if any of these resonate:</p>
      <ul>
        <li>
          Are you "feeling off" lately and want to recalibrate in your career,
          vocation, purpose, and or passions?
        </li>
        <li>Still "growing up" and unsure what you want to do?</li>
        <li>
          Have a sense of "torschlusspanik" where the gates of time are closing
          and you want to stop falling behind?
        </li>
        <li>Is life too serious too often?</li>
        <li>
          Need to navigate through some craziness or heal from corporate trauma?
        </li>
      </ul>
      <p>If so, might be worth playing around in the Hollow Hallway</p>
      <hr />
      <h3>How do we start?</h3>
      <p>
        You can mess around yourself here, but isn't always better to play with
        a friend?
      </p>
      <p>
        Let's switch it up together and have fun. Take 15 to 45 minutes and
        let's play some games that I've spent over a decade of research,
        prototyping, and practicing.
      </p>
      <p>
        <a href="https://forms.gle/hwb2HGzAqtvDq7Va6" target="_blank">
          Schedule a faciliatated session
        </a>
      </p>
      <hr />
      <h4>What's the catch?</h4>
      <p>
        Well, nothing other than scheduling and honoring your time to be open to
        something fun exploring philosophical topics that could benefit your
        life. If you put them into practice, then the great hope is it will
        proliferate into others lives making the World a better place. Worst
        case, we get a laugh and you walk away with only 15 minutes gone.
      </p>
      <p>
        <a href="https://forms.gle/hwb2HGzAqtvDq7Va6" target="_blank">
          Schedule a faciliatated session
        </a>
      </p>
    </div>
  );
};
export default Welcome;
