import { Contact } from "../types/Contact"
import React from "react"

export const email: Contact = {
  name: "E-mail",
  link: "mailto:enitoni@gmail.com",
  icon: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.10658 5.55395L12 11.7793L20.8934 5.55395C20.728 5.22692 20.388 5 20 5H4C3.61204 5 3.27196 5.22692 3.10658 5.55395ZM21 7.92066L12.5735 13.8192C12.2291 14.0603 11.7709 14.0603 11.4265 13.8192L3 7.92066V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V7.92066ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
      />
    </svg>
  ),
}
