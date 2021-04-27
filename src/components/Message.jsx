import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Joi from 'joi-browser'
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const schema = {
    name: Joi.string().required(),
    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    message: Joi.string().required(),
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        alignButton: {
            justify: 'center',
        },
    },

    texwidth: {
        [theme.breakpoints.down('lg')]: {
            maxWidth: 290,
            minWidth: 290,
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 585,
            maxWidth: 585,
        },
    },
}))

const Message = () => {
    const classes = useStyles()

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [Error, setError] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [open, setOpen] = React.useState(false)
    const [erropen, setErrOpen] = React.useState(false)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        setError({ ...Error, [e.target.name]: res })
    }
    const { name, email, message } = data

    const setDisabled = () => {
        if (
            Error.name === null &&
            Error.email === null &&
            Error.message === null
        ) {
            return false
        } else {
            return true
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_5bb09ms',
                'template_mnsgkww',
                e.target,
                'user_VVqy8bL6FEZvoBWXRfOma'
            )
            .then(
                (result) => {
                    handleAlert()
                },
                (error) => {
                    handleErrAlert()
                }
            )
        handleAlert()
    }

    const handleAlert = () => {
        setOpen(true)
    }
    const handleErrAlert = () => {
        setErrOpen(true)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
        setErrOpen(false)
    }

    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h6">
                    <u style={{ color: 'red' }}>
                        <span style={{ color: 'black' }}>
                            <b>Message Me</b>
                        </span>
                    </u>
                </Typography>

                <form className="contact-form" onSubmit={handleClick}>
                    <Textfield
                        variant="outlined"
                        label="Name"
                        name="name"
                        placeholder="Enter Your Name"
                        style={{ minWidth: 300, maxWidth: 300 }}
                        className={classes.root}
                        onChange={handleChange}
                        helperText={Error.name}
                        error={Error.name ? true : false}
                        value={name}
                    />

                    <Textfield
                        variant="outlined"
                        label="Email"
                        name="email"
                        placeholder="Enter Your Email"
                        style={{ minWidth: 300, maxWidth: 300 }}
                        className={classes.root}
                        onChange={handleChange}
                        helperText={Error.email}
                        error={Error.email ? true : false}
                        value={email}
                    />
                    <br></br>

                    <Textfield
                        variant="outlined"
                        label="Message"
                        name="message"
                        placeholder="Your Message"
                        multiline
                        rows={4}
                        className={classes.texwidth}
                        onChange={handleChange}
                        helperText={Error.message}
                        error={Error.message ? true : false}
                        value={message}
                    />
                    <br></br>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{
                            padding: '12px 12px 12px 12px',
                            marginTop: '20px',
                        }}
                        disabled={setDisabled()}
                    >
                        Send Message
                    </Button>
                </form>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success">
                        Email Sent
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={erropen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="error">
                        Error in sending Email
                    </Alert>
                </Snackbar>
            </div>
        </React.Fragment>
    )
}

export default Message
