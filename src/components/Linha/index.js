import { Grid, Checkbox, Typography, Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove, update } from '../../store/modules/tasks/actions';
import { useStyles } from './styles';
import api from '../../services/api'

export default function Linha(props) {
    const [checked, setChecked] = useState(props.checked);
    const dispatch = useDispatch();
    const classes = useStyles();

    
    async function onChange(event) {
        setChecked(current => !current);
                
        const response = await api.put(`tasks/${props.index}`, {
            text: props.task,
            done: !checked,
        })

        console.log(response);

        dispatch(update({
            index: props.index
        })); 
    }

    async function onDelete(index, event) {
        event.preventDefault();
        const response = await api.delete(`tasks/${index}`)
        if (response.status === 204) props.reqTasks()
    }

    return(
        <Grid id="list-item" container direction='row' justify='space-between' alignItems="center" className={classes.list}> 
            <Checkbox onChange={onChange} checked={checked} />
            <Typography variant='body2'> {props.task} </Typography>
            <Button variant="contained" color="primary" onClick={event => onDelete(props.index, event)}>Delete</Button>
        </Grid>
    );
}