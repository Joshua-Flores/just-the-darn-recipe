import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: green[500],
    },
  },
})

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
`

const SuccessImage = styled.img`
  max-width: 24px;
  display: inline-block;
  margin: 0px 0px -4px 12px;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event, token) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot"
          method="POST"
          overlay={this.state.showModal}
          onClick={this.closeModal}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="filled"
                color="secondary"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="filled"
                color="secondary"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="filled"
                color="secondary"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
                multiline
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            name="submit"
            type="submit"
            value="Send"
            color="primary"
            size="large"
          >
            Submit
          </Button>

          <Dialog
            open={this.state.showModal}
            onClose={this.closeModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
          >
            <DialogTitle id="alert-dialog-title">Form Submitted 👍</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thanks for reaching out to us! We'll get back to you as soon as
                we get a chance.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.closeModal}
                fullWidth
                color="primary"
                size="large"
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      </ThemeProvider>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
