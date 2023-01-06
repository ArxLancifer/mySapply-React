import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { IOrder } from '../../../interfaces/IOrder';

function OrderCard(props:any) {
  return (
        <Card>
            <CardContent>
                <Typography variant='h4' component="div">
                    {props.cardData.title}
                </Typography>
                <Typography variant='subtitle1' component="span">
                    <i>{props.cardData.createdAt}</i>
                    <span>{props.cardData.totalAmount}</span>
                </Typography>
                <Box>
                <ReportProblemIcon />
                </Box>
            </CardContent>
        </Card>
  )
}

export default OrderCard;
