import * as React from 'react';
import { Grid } from '@mui/material';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Image from './Control/Image';
import Tooltip from '@mui/material/Tooltip';

const CreateItems = (items) => {

    let list = items.map(item => (
        <React.Fragment key={item.name}>

            <Grid item xs={2}>
                <CircularProgressbarWithChildren value={item.level}
                    styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${item.level / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
                    })}>
                    <Tooltip title={<h6 style={{ color: "lightblue" }}>{item.name}</h6>}>
                        <div style={{ fontSize: 8, marginTop: -20 }}>
                            <Image width={35} height={35} url={item.image} />
                        </div>
                    </Tooltip>
                    <div style={{ fontSize: 10, marginTop: -10 }}>
                        {/* <strong>{item.level}%</strong> */}
                    </div>
                </CircularProgressbarWithChildren>
            </Grid>

        </React.Fragment >
    ));

    return list;
}

const SkillComponent = (props) => {
    return (

        (props.skills != undefined && props.skills != null) && (
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {CreateItems(props.skills)}
            </Grid>

        )
    );
}

export default SkillComponent;