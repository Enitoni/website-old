import React from "react"
import { Project } from "../types/Project"
import { typescript, node, react, postgres, mobx, webpack } from "../technologies"

export const skins: Project = {
  key: "skins",
  period: ["11.2017", "01.2018"],
  name: "skins! website",
  links: [],
  stack: [typescript, node, react, webpack, postgres, mobx],
  screenshots: ["Home", "List of available skins", "Detailed skin page"],
  shortDescription: "A commissioned website for the now gone skins! community",
  theme: {
    accent: "#44ce87",
    primary: "#191e21",
  },
  icon: (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M216.512 36.4224C218.619 37.1696 220.573 38.4224 222.175 40.1807C235.369 54.489 245.292 71.9402 250.89 90.6222C253.151 98.1829 248.87 106.139 241.318 108.403C233.766 110.667 225.82 106.381 223.558 98.8203C219.212 84.2703 211.484 70.6874 201.211 59.5661C195.854 53.7637 196.227 44.7304 202.023 39.3675C206.062 35.6531 211.682 34.708 216.512 36.4224Z"
        fill="#44CE87"
      />
      <path
        d="M246.543 122.338C252.426 124.448 256.444 130.294 255.961 136.844C255.104 148.339 252.69 159.724 248.782 170.669C240.747 193.175 226.676 212.934 208.104 227.77C190.058 242.188 168.435 251.507 145.604 254.716C137.789 255.815 130.588 250.364 129.491 242.54C128.393 234.715 133.837 227.506 141.653 226.407C178.599 221.242 209.355 196.186 221.912 161.042C224.963 152.515 226.829 143.657 227.488 134.712C228.059 126.843 234.908 120.931 242.767 121.524C244.106 121.634 245.357 121.92 246.543 122.338Z"
        fill="#44CE87"
      />
      <path
        d="M22.9982 145.218C27.1911 146.712 30.6158 150.141 31.9329 154.757C36.2137 169.812 44.0728 183.813 54.654 195.285C60.0105 201.088 59.6373 210.121 53.8418 215.484C48.0463 220.847 39.0237 220.473 33.6672 214.671C20.0785 199.923 9.98019 181.922 4.47005 162.581C2.31868 154.998 6.70923 147.086 14.2829 144.932C17.2685 144.075 20.298 144.251 22.9982 145.218Z"
        fill="#44CE87"
      />
      <path
        d="M117.022 0.8389C121.873 2.57523 125.605 6.8611 126.352 12.3118C127.449 20.1363 122.005 27.3454 114.19 28.4443C77.2434 33.6093 46.4876 58.6652 33.9306 93.8093C31.0328 101.92 29.1888 110.337 28.4424 118.799C27.7619 126.668 20.8248 132.47 12.9877 131.789C5.17248 131.107 -0.644994 124.184 0.0574943 116.316C1.00146 105.414 3.37236 94.6006 7.08237 84.1826C15.1171 61.6763 29.1888 41.9393 47.7608 27.0816C65.806 12.6635 87.4294 3.34449 110.26 0.135578C112.631 -0.194105 114.936 0.09162 117.022 0.8389Z"
        fill="#44CE87"
      />
      <path
        d="M73.4455 162.449C83.5877 153.152 92.1054 139.086 97.1545 129.613C100.206 123.92 106.967 121.305 113.048 123.481L141.96 133.833C148.041 136.009 151.619 142.317 150.368 148.669C148.282 159.196 145.977 175.461 147.931 189.11C148.524 193.198 147.119 197.308 144.199 200.209L98.3399 245.683C96.5618 247.441 93.9274 248.035 91.5565 247.2C90.7443 246.914 90.3052 245.991 90.5906 245.178L109.777 191.395C110.304 189.945 111.402 188.758 112.851 188.186C115.331 187.219 117.373 185.241 118.339 182.538C120.227 177.263 117.153 171.417 111.555 170.098C107.253 169.065 102.73 171.263 100.843 175.285C99.4595 178.208 99.701 181.417 101.128 183.967C101.874 185.307 102.05 186.912 101.523 188.362L82.2925 242.232C82.0071 243.046 81.0851 243.485 80.2728 243.199C77.9239 242.364 76.2555 240.232 75.992 237.727L69.2964 173.417C68.8793 169.307 70.3941 165.241 73.4455 162.449Z"
        fill="#EEEEEE"
      />
      <path
        d="M141.872 17.8285L109.338 97.0841C106.902 103.04 109.909 109.854 115.968 112.008L146.944 123.085C153.002 125.261 159.654 121.92 161.52 115.744L186.546 33.7851C189.62 23.7188 184.241 13.0371 174.363 9.49852L166.679 6.75117C156.778 3.23455 145.846 8.09188 141.872 17.8285Z"
        fill="#EEEEEE"
      />
    </svg>
  ),
  longDescription: (
    <>
      <p>
        skins! was a small subcommunity within the osu! community. osu! is a freeware
        rhythm game where the aim of the game is to click circles to the beat. skins!
        reviewed skins that can change the look of the game and aid in gameplay, and
        uploaded the reviews to YouTube.
      </p>
      <p>
        At some point they wanted to streamline their process and needed a dedicated
        website for handling reviews and submissions, so they commissioned me who were
        already a big part of the community to make a website for them and their designer
        to design it.
      </p>
      <p>
        The website allowed one to upload a skin for review. You could upload the skin
        file itself, along with screenshots. Submissions had a title and description, and
        when that submission had been reviewed it was reflected on site who reviewed it
        and what rating it got.
      </p>
      <p>
        At some point in February the staff team broke up and shortly after the community
        shut down, along with the website. As it was commissioned and closed source, there
        is no available code.
      </p>
    </>
  ),
}
