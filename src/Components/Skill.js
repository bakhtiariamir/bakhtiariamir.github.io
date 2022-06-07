import * as React from 'react';
import ReactjsPercentageCircle from 'reactjs-percentage-circle';
import { Grid } from '@mui/material';


const CreateItems = (items) => {
    let list = items.map(item => (
        <Grid item xs={6}>

                <ReactjsPercentageCircle radius={80} borderWidth={5} percent={item.level} color={"#34495e"}>
                    <img width="32" className="resume-image" src={require('/public/images/' + item.image)} />
                    <p>{item.name}</p>
                </ReactjsPercentageCircle>
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