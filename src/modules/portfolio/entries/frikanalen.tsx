import { Project } from "../types/Project"
import React from "react"
import { mobx, next, node, postgres, react, typescript, webpack } from "../technologies"

export const frikanalen: Project = {
  key: "frikanalen",
  period: ["09.2021", "present"],
  name: "Frikanalen",
  links: [
    {
      href: "https://frikanalen.no",
      type: "canonical",
    },
    {
      href: "https://github.com/Frikanalen",
      type: "code",
    },
  ],
  stack: [next, typescript, node, react, webpack, mobx, postgres],
  screenshots: ["Live", "Schedule"],
  shortDescription: "A public-access TV channel",
  theme: {
    accent: "rgb(232, 136, 64)",
    primary: "whitesmoke",
  },
  icon: (
    <svg
      width="45"
      height="52"
      viewBox="0 0 45 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.5803 0.0343096C43.7515 -0.0197369 43.9366 -0.00966542 44.101 0.062647C44.2654 0.13496 44.3978 0.264578 44.4737 0.427341C44.5496 0.590104 44.5637 0.774904 44.5134 0.947293C44.4631 1.11968 44.3518 1.2679 44.2003 1.36431L27.6903 15.4443C27.0509 16.0137 26.2824 16.4187 25.4512 16.6243C24.6201 16.8299 23.7514 16.8299 22.9203 16.6243L0.780288 12.1043C-0.219712 11.8743 -0.299712 10.8543 0.780288 10.6043L43.5803 0.0343096Z"
        fill="url(#paint0_linear_504_195)"
      />
      <path
        d="M43.9703 20.8643C44.9703 20.9543 45.0503 21.9443 44.1903 22.3543L29.3703 29.8443C27.8403 30.6343 26.6103 30.2743 24.8503 29.4443L2.71028 18.9143C1.61028 18.4143 2.00028 17.3443 3.10028 17.4443L43.9703 20.8643Z"
        fill="url(#paint1_linear_504_195)"
      />
      <path
        d="M7.07027 27.1743C6.52027 26.3743 6.96027 25.5043 8.07027 25.8843L24.2103 31.7243C24.8914 31.9911 25.461 32.4825 25.8247 33.1172C26.1884 33.7519 26.3245 34.4918 26.2103 35.2143L24.1303 50.7243C23.8903 52.0643 23.2303 52.1143 22.4803 51.1043L7.07027 27.1743Z"
        fill="url(#paint2_linear_504_195)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_504_195"
          x1="7.80029"
          y1="-2.32569"
          x2="36.7503"
          y2="14.3943"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.09" stop-color="#F15645" />
          <stop offset="0.26" stop-color="#ED5545" />
          <stop offset="0.42" stop-color="#E15046" />
          <stop offset="0.58" stop-color="#CE4948" />
          <stop offset="0.74" stop-color="#B23F4A" />
          <stop offset="0.9" stop-color="#8E324C" />
          <stop offset="1" stop-color="#73284E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_504_195"
          x1="11.6303"
          y1="29.7743"
          x2="35.2303"
          y2="9.9643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CE5542" />
          <stop offset="0.04" stop-color="#D25C42" />
          <stop offset="0.3" stop-color="#E78640" />
          <stop offset="0.5" stop-color="#F5A03F" />
          <stop offset="0.62" stop-color="#FAAA3F" />
          <stop offset="0.74" stop-color="#FBB132" />
          <stop offset="0.96" stop-color="#FEC40F" />
          <stop offset="1" stop-color="#FFC709" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_504_195"
          x1="11.7403"
          y1="45.1443"
          x2="20.6903"
          y2="29.6343"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stop-color="#64BC50" />
          <stop offset="0.3" stop-color="#61B850" />
          <stop offset="0.48" stop-color="#56AD4F" />
          <stop offset="0.66" stop-color="#449A4F" />
          <stop offset="0.84" stop-color="#2C7F4D" />
          <stop offset="1" stop-color="#0E5F4C" />
        </linearGradient>
      </defs>
    </svg>
  ),
  longDescription: (
    <>
      <p>
        Frikanalen is an open source public-access TV channel. The goal with it is to
        strengthen the Norwegian democracy and allow citizens to have a stronger voice in
        the media.
      </p>
      <p>
        I've been volunteering at Frikanalen, working on implementing new features and
        maintaining the old ones. I've rewritten the frontend and backend, and soon we
        will be ready to push those changes to production.
      </p>
    </>
  ),
}
