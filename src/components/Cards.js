import React from 'react'
import {useSelector} from 'react-redux'

function Cards() {

    const detail = useSelector(state=>state.covid.detail)

    return (
        <>
            {detail&&(
                
        <div className='cards'>
            <div className="card" style={{ background: '#B0D6FC', borderColor: '#576AFF' }}>
                <h5>Infected</h5>
                <p className='count'>{detail.confirmed.value}</p>
                <p className='date'>Last Updated at : <span>Sat Jun 25 2022 18:20:58</span></p>
                <p>Number of infect cases of COVID-19</p>
            </div>
            <div className="card" style={{ background: '#DCF7E2', borderColor: '#6FFA71' }}>
                <h5>Recovered</h5>
                <p className='count'>0</p>
                <p className='date'>Last Updated at : <span>Sat Jun 25 2022 18:20:58</span></p>
                <p>Number of recoveries from COVID-19</p>
            </div>
            <div className="card" style={{ background: '#F4D7D7', borderColor: '#F86B6A' }}>
                <h5>Deaths</h5>
                <p className='count'>{detail.deaths.value}</p>
                <p className='date'>Last Updated at : <span>Sat Jun 25 2022 18:20:58</span></p>
                <p>Number of deaths caused by COVID-19</p>
            </div>
            <div className="card" style={{ background: '#F4E0C8', borderColor: '#F2E465' }}>
                <h5>Active</h5>
                <p className='count'>{detail.confirmed.value-detail.deaths.value}</p>
                <p className='date'>Last Updated at : <span>Sat Jun 25 2022 18:20:58</span></p>
                <p>Number of active cases of COVID-19</p>
            </div>
        </div>
            )}
        </>
    )
}

export default Cards