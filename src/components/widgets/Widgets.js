import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return (
        <div className="widgets__article">
           <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
           </div>
           <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div> 
        </div>
        )
    }
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkdin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("Another Struggling day", "Top news - 9099 readers")}
      {newsArticle("Weather Updates", "Weather - 888 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 1009 readers")}
      {newsArticle("Bitcoin Breaks $23k", "Crypto- 776 readers")}
      {newsArticle("Is Redux too good", "Code - 888 readers")}
      
    </div>

  )
}

export default Widgets
