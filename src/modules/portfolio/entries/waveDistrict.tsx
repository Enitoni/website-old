import { Project } from "../types/Project"
import React from "react"
import { typescript, node, react, webpack, postgres, mobx } from "../technologies"

export const waveDistrict: Project = {
  key: "wavedistrict",
  period: ["11.2015", "09.2019"],
  screenshots: ["Landing page", "User profile", "Track", "Collection"],
  name: "WaveDistrict",
  links: [
    {
      type: "canonical",
      href: "https://wavedistrict.com",
    },
    {
      type: "code",
      href: "https://gitlab.com/wavedistrict/web-client",
    },
  ],
  stack: [typescript, node, react, webpack, postgres, mobx],
  shortDescription: "A community based audio platform",
  theme: {
    accent: "#00ba8c",
    primary: "#0d2c4c",
  },
  icon: (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
      <path
        d="M0 0.000183105V12.0002C0 15.3142 2.68594 18.0002 6 18.0002V6.00018C6 2.68612 3.31406 0.000183105 0 0.000183105Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M22.2469 1.75331C21.15 0.675183 19.65 0.000183105 18 0.000183105V16.5002C18 17.3299 17.3297 18.0002 16.5 18.0002C15.6703 18.0002 15 17.3299 15 16.5002V9.00018C15 7.35018 14.325 5.85018 13.2469 4.75331C12.15 3.67518 10.65 3.00018 8.99998 3.00018V16.5002C8.99998 20.6439 12.3562 24.0002 16.5 24.0002C20.6437 24.0002 24 20.6439 24 16.5002V6.00018C24 4.35018 23.325 2.85018 22.2469 1.75331Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="21.0358"
          y1="-3.73602"
          x2="13.0194"
          y2="22.4229"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1865" stopColor="#00D17E" />
          <stop offset="0.3283" stopColor="#00CA86" />
          <stop offset="0.5422" stopColor="#00B89A" />
          <stop offset="0.8003" stopColor="#009BBC" />
          <stop offset="0.9135" stopColor="#008CCD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="21.0358"
          y1="-3.73602"
          x2="13.0194"
          y2="22.4229"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1865" stopColor="#00D17E" />
          <stop offset="0.3283" stopColor="#00CA86" />
          <stop offset="0.5422" stopColor="#00B89A" />
          <stop offset="0.8003" stopColor="#009BBC" />
          <stop offset="0.9135" stopColor="#008CCD" />
        </linearGradient>
      </defs>
    </svg>
  ),
  longDescription: (
    <>
      <p>
        WaveDistrict is a community based audio platform that was discontinued in
        September 28, 2019. The logo was designed by a friend of mine.
      </p>
      <p>
        The project allows you to upload audio and use social features such as ones found
        on sites like SoundCloud. As audio quality is very important to me, it uses the
        Opus codec at 96kbps for free users and offers lossless FLAC streaming for what
        would be the upcoming premium plan.
      </p>
      <p>
        It is quite ambitious and thus has a very big scope with many features. The most
        notable ones would be realtime functionality meaning any action done on site is
        broadcasted to keep the UI in sync for all users. The second biggest feature is
        the realtime visualizer which used the Web Audio API.
      </p>
      <p>
        I discontinued it due to cost and lack of engagement. I am extremely grateful for
        the time spent working on this project and it has been the foundation for my
        knowledge in programming.
      </p>
    </>
  ),
}
