import React from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkIcon from '@material-ui/icons/Link'
import Tooltip from '@material-ui/core/Tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Typography from '@material-ui/core/Typography'

const Wrapper = styled.div`
  margin: auto auto 24px auto;
`
const PostInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`

const PostedDate = styled(Typography)`
  font-weight: 700;
`

const ShareLinks = styled.div`
  display: flex;
`

class PostDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
      copyTooltipTitle: 'Copy to clipboard',
    }
  }

  handleCopyToClipboard = () => {
    this.setState({ copied: true, copyTooltipTitle: 'Copied!' })
    setTimeout(() => {
      this.setState({ copied: false, copyTooltipTitle: 'Copy to clipboard' })
    }, 1000)
  }

  render() {
    return (
      <Wrapper>
        <PostInformation>
          <PostedDate variant="body1" color="textSecondary">
            Posted {this.props.date}
          </PostedDate>
          <ShareLinks>
            <Tooltip title="Twitter" aria-label="twitter">
              <IconButton
                aria-label="twitter"
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20darn%20recipe!&url=https://justthedarnrecipe.com/${this.props.url}`}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook" aria-label="facebook">
              <IconButton
                aria-label="facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://justthedarnrecipe.com/${this.props.url}`}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
            <CopyToClipboard
              text={`https://justthedarnrecipe.com/${this.props.url}`}
              onCopy={this.handleCopyToClipboard}
            >
              <Tooltip
                title={this.state.copyTooltipTitle}
                aria-label={this.state.copyTooltipTitle}
              >
                <IconButton aria-label="link">
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </ShareLinks>
        </PostInformation>
        <Divider />
      </Wrapper>
    )
  }
}

export default PostDetails
