import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Image from './Control/Image';
import ListComponent from './Control/ListComponent';

const CreateItems = (items) => {
  let list = items.map(item => (
    <TimelineItem key={item.name}>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body1"
        color=""
      >
        <Typography sx={{ fontSize: '12px', fontWeight: 'bolder' }}>
          {item.type}
        </Typography>
        <br />
        {item.years}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <Image url={item.image} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '7px', px: 2 }}>
        <Typography variant="h5" component="span" style={{ marginRight: 5 }}>
          {item.title} at {' '}
        </Typography>
        <Typography variant="h6" component="span">
          <strong>{item.company}</strong>
        </Typography>
        <br />
        {<ListComponent items={item.projects} />}
      </TimelineContent>
    </TimelineItem>
  ));

  return list;
}

const ResumeTimeLine = (props) => {
  return (

    (props.work != undefined && props.work != null) && (
      <Timeline position="alternate">
        {CreateItems(props.work)}
      </Timeline>

    )
  );
}

export default ResumeTimeLine;
