import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyles from './styles';
import memories from './images/memories.png';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'> 
                <Typography variant='h2' align='center'>
                    Memories    
                </Typography>

                <img className={classes.image} src={memories} alt='memories' height='60' /> 
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3} className={classes.layout} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App

