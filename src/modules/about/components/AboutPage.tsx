import React from "react"
import styled from "../../theming/custom"
import { Card } from "../../core/components/Card"
import { ImageRenderer } from "../../../common/dom/components/ImageRenderer"
import { size } from "polished"

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

export function AboutPage() {
  return (
    <>
      <AboutContainer>
        <Avatar alt="Profile picture" src="/img/avatar.jpg" />
        <Content>
          <Title>About me</Title>
          <p>
            My name is Sebastian and I was born in the small town of Kristiansand where I
            grew up for most of my childhood. I have always been interested in computers
            and technology, and got my first computer when I was around 7 years old.
          </p>
          <p>
            Since then I have been doing a variety of activities on my computer ranging
            from 3D modeling using Blender, music production, video games, and most
            notably; programming.
          </p>
          <p>
            In early 2016 I started my journey into the world of web development. It
            started with a project that I later named “WaveDistrict” it was a community
            based audio platform that allowed you to upload music. The project was
            discontinued in September 2019 but it has been the biggest building block for
            my programming knowledge today.
          </p>
          <p>
            Now I am looking to relocate to Oslo to find either the dream job or to study
            and solidify my knowledge.
          </p>
        </Content>
      </AboutContainer>
    </>
  )
}
