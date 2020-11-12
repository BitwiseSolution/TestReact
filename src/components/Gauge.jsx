import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GaugeChart from 'react-gauge-chart'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Gauge() {
  const classes = useStyles();
  return (
   <div>
       <GaugeChart id="gauge-chart2" 
  nrOfLevels={20} 
  percent={0.86} 
/>
   </div>
  );
}