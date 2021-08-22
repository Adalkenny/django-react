import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    root: {
        //maxWidth: 345,
    },

}));


const Carde = (props) => {
    //estado para adicionar ao favorito
    const [fav, setfav] = useState(false);

    const setFav = () => {
        if (!fav) {
            setfav(true)
        } else {
            setfav(false)
        }

    }

    const [imag, setimag] = useState('');

    useEffect(() => {
        getImage().catch(error => (
            console.error(error)
        ))
    }, []);


    const getImage = async () => {
        const response = await fetch(`http://localhost:8000${props.pet.foto}`);
        const img = await response.blob();
        const foto = URL.createObjectURL(img);
        setimag(foto);

    }
    const classes = useStyle();
    return (
        <>
            <Card className={classes.root} raised variant='elevation'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="30%"
                        width="30%"
                        image={imag}
                        title={props.pet.raca}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.pet.nome}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.pet.data_last_modify}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="Adicionar ao favoritos" onClick={setFav}>
                        {fav ?
                            <FavoriteIcon style={{ fontSize: 40, color: '#ef5350' }} /> :
                            <FavoriteIcon style={{ fontSize: 40, color: '#78909c' }} />}
                    </IconButton>
                    <Link to="/teste">
                        <IconButton aria-label="Adicionar ao favoritos">
                            <AddIcon style={{ fontSize: 40, color: '#78909c' }} />
                        </IconButton>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default Carde;
