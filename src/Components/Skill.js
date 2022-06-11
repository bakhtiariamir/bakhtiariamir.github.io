import * as React from 'react';
import { Grid } from '@mui/material';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Image from './Control/Image';
import Tooltip from '@mui/material/Tooltip';

const CreateItems = (items) => {

    let list = items.map(item => (
        <React.Fragment>

            <Grid item xs={2}>
                <CircularProgressbarWithChildren value={item.level}
                    styles={buildStyles({

                        pathColor: "turquoise",
                        trailColor: "gold"
                    })}>
                    <Tooltip title={<h6 style={{ color: "lightblue" }}>{item.name}</h6>}>
                        <div style={{ fontSize: 8, marginTop: -20 }}>
                            <Image width={35} height={35} url={item.image} />
                        </div>
                    </Tooltip>
                    <div style={{ fontSize: 10, marginTop: -10 }}>
                        <strong>{item.level}%</strong>
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