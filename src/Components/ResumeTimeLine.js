import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import ResumeTimeLineItem from './ResumeTimeLineItem';
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

{/* <TimelineItem>
<TimelineOppositeContent
  sx={{ m: 'auto 0' }}
  align="right"
  variant="body2"
  color="text.secondary"
>
  9:30 am
</TimelineOppositeContent>
<TimelineSeparator>
  <TimelineConnector />
  <TimelineDot>
    <FastfoodIcon />
  </TimelineDot>
  <TimelineConnector />
</TimelineSeparator>
<TimelineContent sx={{ py: '12px', px: 2 }}>
  <Typography variant="h6" component="span">
    Eat
  </Typography>
  <Typography>Because you need strength</Typography>
</TimelineContent>
</TimelineItem>
<TimelineItem>
<TimelineOppositeContent
  sx={{ m: 'auto 0' }}
  variant="body2"
  color="text.secondary"
>
  10:00 am
</TimelineOppositeContent>
<TimelineSeparator>
  <TimelineConnector />
  <TimelineDot color="primary">
    <LaptopMacIcon />
  </TimelineDot>
  <TimelineConnector />
</TimelineSeparator>
<TimelineContent sx={{ py: '12px', px: 2 }}>
  <Typography variant="h6" component="span">
    Code
  </Typography>
  <Typography>Because it&apos;s awesome!</Typography>
</TimelineContent>
</TimelineItem>
<TimelineItem>
<TimelineSeparator>
  <TimelineConnector />
  <TimelineDot color="primary" variant="outlined">
    <HotelIcon />
  </TimelineDot>
  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
</TimelineSeparator>
<TimelineContent sx={{ py: '12px', px: 2 }}>
  <Typography variant="h6" component="span">
    Sleep
  </Typography>
  <Typography>Because you need rest</Typography>
</TimelineContent>
</TimelineItem>
<TimelineItem>
<TimelineSeparator>
  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
  <TimelineDot color="secondary">
    <RepeatIcon />
  </TimelineDot>
  <TimelineConnector />
</TimelineSeparator>
<TimelineContent sx={{ py: '12px', px: 2 }}>
  <Typography variant="h6" component="span">
    Repeat
  </Typography>
  <Typography>Because this is the life you love!</Typography>
</TimelineContent>
</TimelineItem> */}