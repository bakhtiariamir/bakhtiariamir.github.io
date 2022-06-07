import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Image from './Control/Image';

export default function ResumeTimeLineItem(props){
return (  <TimelineItem>
  <TimelineOppositeContent
    sx={{ m: 'auto 0' }}
    align="right"
    variant="body2"
    color=""
  >
    {props.work.years}
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
        <Image url={props.work.image} />
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px: 2 }}>
    <Typography variant="h6" component="span">
      {props.work.company}
    </Typography>
    <Typography variant="h6" component="span">
      {props.work.title}
    </Typography>      
    <Typography>{props.work.description}</Typography>
  </TimelineContent>
</TimelineItem>)
};