import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    bg: {
        height: '100vh',
        backgroundColor: '#fff',
    },
    panel: {
        backgroundColor: '#fff',
        borderRadius: '25px',
        padding: '30px',
        boxShadow: '0 0 8px rgb(191 191 191)',
        minHeight: '80%',
        position: 'relative'
    },
    listContainer: {
        height: '90%',
        padding: '10px 0px',
    },
    top: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottom: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '1%',
        position: 'absolute',
        bottom: 10,
        marginTop: '20px'
    },
    input: {
        width: '100%',
    },
    btn: {
        marginLeft: '3%',
        borderRadius: '35px',
    },
}));