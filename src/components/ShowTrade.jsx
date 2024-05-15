import React from 'react'

import { createChart } from 'lightweight-charts';

export default function ShowTrade() {

    
    const chart = createChart(document.getElementById('container'));
   


  return (
    <div>
        <h1>Showing data</h1>


        <div id='container'>

        </div>
    </div>
  )
}
