import React from 'react'
import {
    createMuiTheme,
    ThemeProvider,
    makeStyles,
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { red } from '@material-ui/core/colors'
import NavBar from './components/NavBar'
import About from './components/About'
import Typography from '@material-ui/core/Typography'
import Profile from './images/profile.jpg'
import ProjectCard from './components/ProjectCards'
import Background from './images/background.jpg'
import Message from './components/Message'
import FrontEndSkills from './components/FrontEndSkills'
import BackendDB from './components/BackendandDBskills'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    mydetails: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: '30%',
            textAlign: 'center',
            color: 'white',
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: '18%',
            textAlign: 'center',
            color: 'white',
        },

        [theme.breakpoints.up('lg')]: {
            paddingTop: '15%',
            textAlign: 'center',
            color: 'white',
        },
    },

    center: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        height: '300px',
    },
    centerCard: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '12%',
    },
    CardSize: {
        maxWidth: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#CAD5E2',
    },
    Background: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        width: `${window.innerWidth}`,
        height: '300px',

        [theme.breakpoints.up('xs')]: {
            height: '360px',
        },
        [theme.breakpoints.up('sm')]: {
            height: '450px',
        },
        [theme.breakpoints.up('md')]: {
            height: '550px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '670px',
        },
    },
    font1: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '38px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '45px',
        },
    },
    padd: {
        [theme.breakpoints.up('xs')]: {
            padding: '0px 10px 0px 10px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px 60px 0px 60px',
        },

        [theme.breakpoints.up('lg')]: {
            padding: '0px 100px 0px 100px',
        },
    },
    ProjCard: {
        [theme.breakpoints.down('sm')]: {
            minWidth: 300,
            maxWidth: 300,
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 500,
            maxWidth: 500,
        },
        [theme.breakpoints.up('md')]: {
            minWidth: 700,
            maxWidth: 700,
        },
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ProjCardMedia: {
        height: 140,
    },
}))

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    palette: {
        primary: {
            main: red[900],
        },
        secondary: {
            main: '#1B98F5',
        },
    },
})

function App() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={4}>
                <Grid item lg={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12} className={classes.Background} id="home">
                    <Bounce top>
                        <div className={classes.mydetails}>
                            <Typography variant="h6" className={classes.font1}>
                                <b>Hello, my name is</b>
                            </Typography>
                            <Typography variant="h5" className={classes.font1}>
                                <b>Sharad Chandra Bhat</b>
                            </Typography>
                            <Typography variant="h6" className={classes.font1}>
                                <b>
                                    and I am a{' '}
                                    <span style={{ color: 'red' }}>
                                        Web Developer{' '}
                                    </span>{' '}
                                </b>
                            </Typography>
                        </div>
                    </Bounce>
                </Grid>

                <Grid item xs={12} id="about">
                    <Typography variant="h6" style={{ textAlign: 'center' }}>
                        <u style={{ color: 'red' }}>
                            <span style={{ color: 'black' }}>
                                <b>About Me</b>
                            </span>
                        </u>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Fade left>
                        <img
                            src={Profile}
                            className={classes.center}
                            alt="error not loaded"
                        />
                    </Fade>
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <Fade right>
                        <Typography style={{ textAlign: 'justify' }}>
                            Hi my name is Sharad i am from Mangalore and I am a
                            software devleoper I completed my BE from Srinivas
                            School Of Engineering in the year 2020 My skills
                            include HTML, CSS, Javascript and React in frontend
                            My backend skills include Node JS
                        </Typography>
                        <br></br>

                        <a
                            href="https://drive.google.com/file/d/1J24BhiQ37r3-1qKPI3jIrl6av6AQ4-Mk/view?usp=sharing"
                            style={{
                                textAlign: 'center',
                                textDecoration: 'none',
                                color: 'white',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                style={{
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Download CV
                            </Button>
                        </a>
                    </Fade>
                </Grid>

                <Grid item xs={12} id="skills">
                    <Typography variant="h6" style={{ textAlign: 'center' }}>
                        <u style={{ color: 'red' }}>
                            <span style={{ color: 'black' }}>
                                <b>My Skills</b>
                            </span>
                        </u>
                    </Typography>
                </Grid>

                <FrontEndSkills style={classes} />

                <BackendDB style={classes} />

                <Grid item xs={12} id="projects">
                    <Typography variant="h6" style={{ textAlign: 'center' }}>
                        <u style={{ color: 'red' }}>
                            <span style={{ color: 'black' }}>
                                <b>Projects</b>
                            </span>
                        </u>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <ProjectCard style={classes} />
                </Grid>
                <Grid item xs={12} sm={6} id="contact">
                    <About />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Message />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
