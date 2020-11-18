import styled, { css } from 'styled-components'
import SearchResult from './search-result'

const Popover = css`
  max-height: 80vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 1em;
  border-radius: 2px;
  background: ${({ theme }) => theme.background};
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    margin-bottom: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.foreground};
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }

    li.ais-Hits-item {
      div.hitContainer {
        display: flex;
      }
      margin-bottom: 1em;

      a {
        color: ${({ theme }) => theme.foreground};

        h4 {
          margin-bottom: 0.2em;
          font-weight: 700;
          line-height: 1.2em;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.foreground};
    align-items: center;
    font-size: 12px;
    svg {
      width: 70px;
      margin: 2px 0px 0px 4px;
    }
  }
`
