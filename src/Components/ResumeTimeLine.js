import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Image from './Control/Image';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  dot: {
      width: 45,
      height: 45
  }
}));


const CreateItems = (items) => {
  let list = items.map(item => (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color=""
      >
        {item.years}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot className={useStyles.dot}>
          <Image url={item.image} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '7px', px: 2 }}>
        <Typography variant="h6" component="span">
          {item.title}
        </Typography>
        <Typography variant="h6" component="span">
          {item.company}
        </Typography>
        <Typography>{item.description}</Typography>
      </TimelineContent>
    </TimelineItem>
  ));

  return list;
}

const ResumeTimeLine = (props) => {
  debugger;
  return (

    (props.work != undefined && props.work != null) && (
      <Timeline position="alternate">
        {CreateItems(props.work)}
      </Timeline>

    )
  );
}

export default ResumeTimeLine;
