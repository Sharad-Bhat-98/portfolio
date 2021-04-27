import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Node from '../images/Node.svg'
import SQL from '../images/SQL.svg'
import MongoDB from '../images/mongodb.svg'
import GIT from '../images/GIT.svg'
import Zoom from 'react-reveal/Zoom'

const BackendDB = (props) => {
    const classes = props.style
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Typography variant="h6">
                    <u style={{ color: 'red' }}>
                        <span style={{ color: 'black', paddingLeft: '3%' }}>
                            <b>Backend Skills</b>
                        </span>
                    </u>
                </Typography>
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={Node}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>Node JS</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={12}>
                <Typography variant="h6">
                    <u style={{ color: 'red' }}>
                        <span style={{ color: 'black', paddingLeft: '3%' }}>
                            <b>Database Skills</b>
                        </span>
                    </u>
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={SQL}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>My SQL</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>

            <Grid item xs={6}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={MongoDB}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>MongoDB</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h6">
                    <u style={{ color: 'red' }}>
                        <span style={{ color: 'black', paddingLeft: '3%' }}>
                            <b>Version Control</b>
                        </span>
                    </u>
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Zoom>
                    <Card className={classes.CardSize}>
                        <CardMedia>
                            <img
                                src={GIT}
                                width="100px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }}>
                                <b>GIT</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Zoom>
            </Grid>
        </React.Fragment>
    )
}

export default BackendDB
