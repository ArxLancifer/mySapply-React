import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { IOrder } from '../../../interfaces/IOrder';

type Props = {
    order: IOrder
}
function OrderCard({order}: Props) {
  return (
        <Card sx={{my:"2%"}}>
            <CardContent>
                <Typography variant='h4' component="div">
                    {order.title}
                </Typography>
                <Typography variant='subtitle1' component="div">
                    <i>{order.date}</i>
                </Typography>
                <span>Amount: {order.totalAmount}</span>
                <Box>
                <ReportProblemIcon />
                </Box>
            </CardContent>
        </Card>
  )
}

export default OrderCard;
