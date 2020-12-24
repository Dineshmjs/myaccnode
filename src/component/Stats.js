import React from 'react'
import './index.css'

function Stats({stats}) {
    return (
        <div className="w3-container w3-light-gray" id="sroot">
            <div className="w3-card-4 m-3 w3-green">
                <p className="w3-center pt-2 m-0">${stats.credit}</p>
                <p className="p-2 m-0 small">Total Credits</p>
            </div>
            <div className="w3-card-4 m-3 w3-pink">
                <p className="w3-center pt-2 m-0">${stats.debit}</p>
                <p className="p-2 m-0 small">Total Debits</p>
            </div>
            <div className="w3-card-4 m-3 w3-indigo">
                <p className="w3-center pt-2 m-0">${stats.available}</p>
                <p className="p-2 m-0 small">Available</p>
            </div>
        </div>
    )
}

export default Stats
