import React from 'react'
import ColumnState from './ColumnState'
const Earning = () => {
  return (
    <div className='dflex fcol ear-es'>
        <div className='ear-cont'>
        <div className='dflex djspacebetween'>
            <div className='dflex fcol '>
            <span className='t-earning'>
                Total Earning
            </span>
            <span className='t-cash'>
            $20,000
            </span>
            </div>
            <div className='state-icon dflex fcenter'>
                <img src='/bar_chart.png' alt='chart bar'/>
            </div>
        </div>
        <div className='seprated dflex falcenter'>
        <div className="dashed"/>
        <span className='dashed-num'>173</span>
        </div>
        </div>
        <div className='dflex candle-p'>
        <ColumnState choosen={''} percentage={'100'} day="jan" pos={'frst'}/>
        <ColumnState choosen={''} percentage={'50'} day="jan"/>
        <ColumnState choosen={'candle-act'} percentage={'100'} day="jan"/>
        <ColumnState choosen={''} percentage={'90'} day="jan"/>
        <ColumnState choosen={''} percentage={'20'} day="jan"/>
        <ColumnState choosen={''} percentage={'100'} day="jan"/>
        <ColumnState choosen={''} percentage={'10'} day="jan"/>
        <ColumnState choosen={''} percentage={'80'} day="jan"/>
        <ColumnState choosen={''} percentage={'70'} day="jan"/>
        </div>
    </div>
  )
}

export default Earning