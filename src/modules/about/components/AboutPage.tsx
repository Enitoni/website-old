import React from "react"
import styled from "../../theming/custom"
import { Card } from "../../core/components/Card"
import { ImageRenderer } from "../../../common/dom/components/ImageRenderer"
import { size } from "polished"
import { ContactGrid } from "./ContactGrid"
import { useMeta } from "../../core/hooks/useMeta"

const SINGLE_COLUMN_QUERY = "@media (max-width: 700px) "

const AboutContainer = styled(Card)`
  display: flex;
  padding: 64px;

  ${SINGLE_COLUMN_QUERY} {
    flex-direction: column;
    padding: 32px;
  }
`

const Avatar = styled(ImageRenderer)`
  ${size(256)};

  border-radius: 100%;
  flex-shrink: 0;

  ${SINGLE_COLUMN_QUERY} {
    padding-bottom: 100%;
    width: 100%;
    height: 0px;
  }
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
`

const Content = styled.div`
  margin-left: 64px;

  ${SINGLE_COLUMN_QUERY} {
    margin-left: 0px;
    margin-top: 64px;
  }
`

const ContactTitle = styled(Title)`
  margin-bottom: 32px;
`

const ContactContainer = styled.div`
  margin-top: 32px;

  ${SINGLE_COLUMN_QUERY} {
    padding: 32px;
  }
`

export function AboutPage() {
  useMeta({
    title: "About me",
    description: "General information about me and links to my online presence",
  })

  return (
    <>
      <AboutContainer>
        <Avatar alt="Profile picture" src="/img/avatar.png" />
        <Content>
          <Title>About me</Title>
          <p>
            Sebastian here. I was born in the small town of Kristiansand in Norway where I
            grew up. During that time, I have always been interested in computers and
            technology. I got my first computer when I was only 7 years old.
          </p>
          <p>
            Since then I have been doing a variety of activities on my computer ranging
            from 3D modeling using Blender, music production, video games, and most
            notably; programming.
          </p>
          <p>
            In early 2014 I started my journey into the world of web development. It
            started with a project that I later named “WaveDistrict” which is a community
            based audio platform that allows you to upload audio to share with others,
            similar to SoundCloud.
          </p>
          <p>
            I have been working on various projects as well, ranging from tiny projects I
            did for my friends, to commissions. Many years with this has solidified my
            knowledge in programming and made me reach a high skill level.
          </p>
          <p>
            Now I've moved to Oslo and I am currently looking for a job. If this is
            interesting to you, feel free to contact me via my socials below!
          </p>
          <ContactContainer>
            <ContactTitle>Socials</ContactTitle>
            <ContactGrid />
          </ContactContainer>
        </Content>
      </AboutContainer>
    </>
  )
}
