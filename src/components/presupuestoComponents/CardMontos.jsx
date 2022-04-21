import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CardMontos({ totalGastos, totalPresupuesto }) {
  const classes = useStyles();

  {
    totalGastos ? totalGastos : null;
  }
  {
    totalPresupuesto ? totalPresupuesto : null;
  }

  const montoDisponible = (p, g) => p - g;
  const nivelDeEjecucion = (p, g) =>
    Number(g / p).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.typography} >
          Presupuesto total:
        </Typography>
        <Typography variant="h5">
          <b>$ {totalPresupuesto}</b>
        </Typography>
        <Typography className={classes.typography}>
          Monto disponible:
        </Typography>
        <Typography variant="h5">
          <b>$ {montoDisponible(totalPresupuesto, totalGastos)}</b>
        </Typography>
        <Typography className={classes.typography}>
         Total gastado:
        </Typography>
        <Typography variant="h5">
          <b>$ {totalGastos}</b>
        </Typography>
        <Typography className={classes.typography}>
          Nivel de ejecución: 
        </Typography>
        <Typography variant="h5">
          <b>{nivelDeEjecucion(totalPresupuesto, totalGastos)}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: '22rem',
    height: '100%',
    background: '#DEFAAE',
    border: '4px solid rgba(96, 150, 0, 0.94)',
    boxSizing: 'border-box',
    borderRadius: '19px',
  },
  cardContent: {
    width: '20rem',
    height: '6.5rem',
    display: 'grid'
  },
  typography: {
    fontSize: '30px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
