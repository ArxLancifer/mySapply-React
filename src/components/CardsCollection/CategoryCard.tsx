import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './CardStyles.css'
function CategoryCard() {
  return (
    <div className="cardStyles">
      <h4>
        Ποτά
      </h4>
      <ul>
        <li>Αλκολούχα</li>
        <li>Αναψυκτικά</li>
        <li>Μπύρες</li>
      </ul>
      
      <div className='PNG'></div> {/*PNG icon*/}
    </div>
  )
}

export default CategoryCard
