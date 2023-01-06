import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { IOrder } from '../../../interfaces/IOrder';

function OrderCard(props:any) {
  return (
        <Card sx={{my:"2%"}}>
            <CardContent>
                <Typography variant='h4' component="div">
                    {props.order.title}
                </Typography>
                <Typography variant='subtitle1' component="div">
                    <i>{props.order.date}</i>
                </Typography>
                <span>Amount: {props.order.totalAmount}</span>
                <Box>
                <ReportProblemIcon />
                </Box>
            </CardContent>
        </Card>
  )
}

export default OrderCard;
