import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Button, Typography, TextField, Grid, Box } from '@material-ui/core';
import { useStyles } from './styles';
import Linha from '../../components/Linha';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/modules/tasks/actions';

import api from '../../services/api';

export default function Home() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [task, setTask] = useState([]);
    const [count, setCount] = useState(null)
    const dispacth = useDispatch();
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [remain, setRemain] = useState(0)
    


        async function reqTasks() {
            try {
                const response = await api.get('/tasks');
                setTask(response.data.rows);
                setCount(response.data.count)

                response.data.rows.forEach(item => {
                    if (!item.done) {
                        setRemain(current => current + 1)
                    }
                });

            } catch (error) {
                console.log(error)
            }
        }


        useEffect(() => {
            reqTasks();
            
        }, [])

        async function onSave(event) {
            event.preventDefault();
            setInvalidCredentials(false);

            if (!title) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Insira todos os dados.',
                });
                return;
            }

            try {
                const response = await api.post('/tasks', {
                    text: title,
                    done: false,
                });
                if (response.status === 201) reqTasks()
                if (response) {
                    dispacth(add({
                        title,
                        checked: false
                    }));
    
                    setTitle('');
                } 
            } catch (error) {
                setInvalidCredentials(true);
            }
        }


  return (
    <Grid container justify="center" alignContent="center" className={classes.bg}>
        <Grid item sm={5} className={classes.panel}>
            <Box className={classes.top}>
                <Typography variant="h5">{count} Tasks</Typography>
                <Typography>{remain} Remain</Typography> {/*to do */}
            </Box>
            <Box className={classes.listContainer}>
                {task.map((task) => <Linha task={task.text} index={task.id} checked={task.done} key={task.id} reqTasks={reqTasks}/>) }
            </Box>
            <Box className={classes.bottom}>
                <TextField variant="standard" 
                           label="Add todo" 
                           className={classes.input}
                           value={title}
                           helperText={invalidCredentials ? 'Erro ao mandar todo' : ''}
                           onChange={e => setTitle(e.target.value)}></TextField>
                <Button variant="outlined" className={classes.btn} onClick={onSave}>Add</Button>
            </Box>
        </Grid>
    </Grid>
  )
}
