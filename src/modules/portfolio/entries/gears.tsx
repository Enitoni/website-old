import { Project } from "../types/Project"
import React from "react"

export const gears: Project = {
  name: "Gears",
  links: [
    {
      type: "canonical",
      href: "https://gears.enitoni.dev/",
    },
    {
      type: "code",
      href: "https://gitlab.com/enitoni-gears/gears/tree/master/gears",
    },
  ],
  shortDescription: "JavaScript library for building bots",
  theme: {
    accent: "#f5c721",
    primary: "#1a213c",
  },
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12V10H12C11 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13 14 12Z"
        fill="#F5C721"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 7.03613 6.94105 3 12 3H21V12C21 17.0589 16.9639 21 12 21C7.02944 21 3 16.9706 3 12ZM19 12V11H15V12C15 13.5185 13.69 15 12 15C10.3431 15 9 13.6569 9 12C9 10.31 10.4815 9 12 9H19V5H12C8.05895 5 5 8.12732 5 12C5 15.866 8.13401 19 12 19C15.8727 19 19 15.9411 19 12ZM12.9999 11H12C11.5185 11 11 11.4809 11 12C11 12.5523 11.4477 13 12 13C12.5191 13 13 12.4815 13 12L12.9999 11Z"
        fill="#F5C721"
      />
    </svg>
  ),
  longDescription: (
    <>
      <p>
        Gears is a library aims to simplify the creation of text based bots. It is a fully
        generic library that works with anything that can be boiled down to sending and
        receiving messages.
      </p>
      <p>
        Currently it is compatible with Node.js libraries such as Discord.js, ws, and
        readline.
      </p>
      <p>
        I started working on this project because there weren't any similar tools that I
        were satisfied with. Currently the project is very mature and well tested.
      </p>
    </>
  ),
}
