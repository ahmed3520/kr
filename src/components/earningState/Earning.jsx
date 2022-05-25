import React from 'react'
import ColumnState from './ColumnState'
import style from './earning.module.css'
const Earning = () => {
  return (
    <div className={style.ear_es}>
        <div className={style.ear_cont}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
            <span className={style.t_earning}>
                Total Earning
            </span>
            <span className={style.t_cash}>
            $20,000
            </span>
            </div>
            <div className={style.state_icon}>
                <img src='/bar_chart.png' alt='chart bar'/>
            </div>
        </div>
        <div className={style.seprated}>
        <div className={style.dashed}/>
        <span className={style.dashed_num}>173</span>
        </div>
        </div>
        <div className= {style.candle_p}>
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