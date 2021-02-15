import React from 'react'
import { graphql } from "gatsby";
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Feat1 from '../components/Feat1'

const IndexPage = ({data}) => {
  console.log(data)
  return (
  <div>
    <h1>{data.contentfulPage.title}</h1>
    {data.contentfulPage.sections?.map((content, i) => {
      if(content.__typename === 'ContentfulHero1') {
        return <Hero1 key={i} content={content}/>
      } else if(content.__typename === 'ContentfulHero2') {
        return <Hero2 key={i} content={content}/>
      } else if(content.__typename === 'ContentfulFeat1') {
        return <Feat1 key={i} content={content}/>
      } else {
        return null
      }
    })}
  </div>
)}

export default IndexPage

export const query = graphql`
  query Page($slug: String) {
    contentfulPage(slug: {eq: $slug}) {
      title
      slug
      sections {
        ... on Node {
          ... on ContentfulHero1 {
            header
          }
          ... on ContentfulHero2 {
            header
          }
          ... on ContentfulFeat1 {
            header
            cta
          }
        }
      }
    }
  }
`
