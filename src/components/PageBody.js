import React from 'react'
import styled from '@emotion/styled'

const Body = styled.div`
  max-width: 650px;
  margin: auto;
  h1,
  h2,
  h3 {
    font-weight: 700;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul {
    li {
      font-size: 1rem;
      list-style: disc;
      list-style-position: outside;
      line-height: 1.6;
      margin-bottom: 0.4em;
      padding-left: 8px;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      font-size: 1rem;
      list-style: decimal;
      list-style-position: outside;
      line-height: 1.6;
      margin-bottom: 0.4em;
      padding-left: 8px;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html,
      }}
    />
  )
}

export default PageBody
