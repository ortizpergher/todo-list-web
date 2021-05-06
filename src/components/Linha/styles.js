import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    list: {
      margin: '20px 0',
      animation: '$bottom-to-top 1s ease-in-out',
    },
    "@keyframes bottom-to-top": {
      "0%": {
        opacity: 0,
        transform: 'TranslateY(1300%)'
      },
      "100%": {
        opacity: 1,
        transform: 'TranslateY(0)',
      }
    },
}));