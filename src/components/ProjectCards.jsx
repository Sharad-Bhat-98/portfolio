import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import MongoDB from '../images/mongodb.svg'
import Express from '../images/expressjs.svg'
import ReactLogo from '../images/React.svg'
import Node from '../images/Node.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const projectss = [
    {
        name: 'BLOG Website',
        description:
            'Simple Blog website with authentication and CRUD operations',
        link: 'https://cocky-brown-3dd75c.netlify.app/',
    },
    {
        name: 'TODO App using redux',
        description: 'a simple website using Redux ',
        link: 'https://kind-bardeen-289464.netlify.app/',
    },
]

const ProjectCard = (props) => {
    const classes = props.style
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        Arrows: true,
    }

    return (
        <Slider {...settings} className={classes.ProjCard}>
            {projectss.map((e) => {
                return (
                    <Card className={classes.ProjCard} key={e.name}>
                        <CardActionArea>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {e.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {e.description} <br></br>
                                </Typography>
                                <a> Link-{e.link}</a>
                            </CardContent>
                            <CardContent>
                                <Typography>
                                    <b>Tech Stack Used </b>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <img
                                src={MongoDB}
                                width="80px"
                                height="100px"
                                className={classes.centerCard}
                                alt="error not loaded"
                            />
                            &nbsp;&nbsp;
                            <img
                                src={Express}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                            &nbsp;&nbsp;
                            <img
                                src={ReactLogo}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                            &nbsp;&nbsp;
                            <img
                                src={Node}
                                width="50px"
                                height="50px"
                                className={classes.centerCard}
                                alt="error  not loaded"
                            />
                        </CardActions>
                    </Card>
                )
            })}
        </Slider>
    )
}

export default ProjectCard
