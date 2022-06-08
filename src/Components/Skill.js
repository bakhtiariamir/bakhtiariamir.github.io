import * as React from 'react';
//import ReactjsPercentageCircle from 'reactjs-percentage-circle';
import { Grid } from '@mui/material';


const CreateItems = (items) => {
    let list = items.map(item => (
        <Grid item xs={6}>
            <div >{item.name}</div>
            <div>{item.level}</div>
        </Grid>
    ));

    return list;
}

const SkillComponent = (props) => {
    return (

        (props.work != undefined && props.work != null) && (
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {CreateItems(props.work)}
            </Grid>

        )
    );
}

export default SkillComponent;