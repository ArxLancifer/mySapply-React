import {Box} from '@mui/system'
import React, {Fragment} from 'react'

function CardsContainer(props: {heading: string, children: any}) {
    return (
        <Fragment>
            <Box sx={{ mt: 5 }}>
                <h2>{props.heading}</h2>
            </Box>
            <Box>
                {props.children}
            </Box>
        </Fragment>
    )
}

export default CardsContainer
