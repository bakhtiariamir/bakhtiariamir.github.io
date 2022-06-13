import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Message, TurnedIn, SettingsApplications } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

const CreateItems = (items) => {

    let list = items.map(project => (
        <React.Fragment key={project.name}>

            <Grid item xs={12}>
                <List >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <TurnedIn color="primary" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '12px', fontWeight: 'bolder' }}
                            primary={project.name}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <SettingsApplications color="success" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={project.technologies} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Message color="action" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={project.description} />
                    </ListItem>
                </List>
            </Grid>
            <Divider style={{ width:'100%' }} variant="middle" />
        </React.Fragment >
    ));

    return list;
}

const ListComponent = (props) => {
    return (

        (props.items != undefined && props.items != null) && (
            <Grid container >
                {CreateItems(props.items)}
            </Grid>

        )
    );
}




export default ListComponent;