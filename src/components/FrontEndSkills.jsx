import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import HTML from '../images/HTML.png'
import CSS from '../images/css-3.svg'
import Javascript from '../images/javascript.svg'
import Jquery from '../images/jquery.svg'
import ReactLogo from '../images/React.svg'
import Zoom from 'react-reveal/Zoom'

const FrontEndSkills = (props) => {
    const classes = props.style
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Typography variant="h6">
                    <u style={{ color: 'red' }}>
                        <span style={{ color: 'black', paddingLeft: '3%' }}>
                            <b>Frontend Skills</b>
                        </span>
                    </u>
                </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={HTML}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>HTML</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={CSS}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>CSS</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={3}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={Javascript}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>Javascript</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={3}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={Jquery}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>Jquery</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>

            <Grid item xs={12} sm={4} md={12} lg={12}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={ReactLogo}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>React JS</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>
        </React.Fragment>
    )
}

export default FrontEndSkills
