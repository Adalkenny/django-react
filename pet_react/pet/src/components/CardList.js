import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Carde from './Carde';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    grid: {
        paddingLeft: '2rem',
        paddingTop: '2rem',

    }
})



function CardList() {
    const [pets, setstate] = useState([]);
    const classes = useStyle();
    const dominio = window.location.hostname;//http://localhost:3000/api/list-create-pet/

    useEffect(() => { 
        getPets();
    }, []);

    const getPets = async () => {

        const data = await fetch(`http://${dominio}:8000/api/list-create-pet/`);
        const pets = await data.json();
        setstate(pets);
    }

    return (
        <Grid container spacing={4} className={classes.grid}>
            {pets ? (pets.map((pet) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={pet.id}>
                    <Carde pet={pet} />
                </Grid>
            ))) :
                (<div>Loading</div>)}
        </Grid>
    );
}

export default CardList;
