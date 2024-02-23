import React, { useState } from 'react';
import "./Dashboard.css"

export default function Dashboard() {

    const [name] = useState(["Gowtham", "Praveen", "Kishore", "Arun kumar", "Hari", "Kalai", "Kavin"]);
    const [role] = useState(["Manager", "Engineer", "Developer", "UI Desiner", "Product Manager", "CEO", "Salse Person"]);
    const [complet] = useState([5,6,1,2,3,5,4]);
    const [not] = useState([8,5,6,4,8,9,4]);
    const [data] = useState([])


    for (let i = 0; i < not.length; i++) {
        data.push(
            <div className='dashboard-tr'>
                <div>{i+1}</div>
                <div>{name[i]}</div>
                <div>{role[i]}</div>
                <div>{complet[i]}</div>
                <div>{not[i]}</div>
            </div>
        );
    }

    return (
        <div className='dashboard-body'>
            <div className='dashboard-left'>
                <div className='dashboard-left-top'></div>
                <div className='dashboard-left-foot'></div>
            </div>
            <div className='dashboard-right'>
                <div className='dashboard-right-top'></div>
                <div className='dashboard-right-foot'>
                    <div className='right-title'>Welcome Back bro.. :)</div>
                    <div className='dashboard-repoart-box-parent'>
                        <div className='dashboard-repoart-box-1 dashboard-repoart-box'>
                            <div className='dashboard-image'>png</div>
                            <div className='dashboard-image-content'>
                                <div className='dashboard-image-content-top'>Pending Task</div>
                                <div className='dashboard-image-content-foot'>120</div>
                            </div>
                        </div>
                        <div className='dashboard-repoart-box-2 dashboard-repoart-box'>
                            <div className='dashboard-image'>png</div>
                            <div className='dashboard-image-content'>
                                <div className='dashboard-image-content-top'>Pending Task</div>
                                <div className='dashboard-image-content-foot'>150</div>
                            </div>
                        </div>
                        <div className='dashboard-repoart-box-3 dashboard-repoart-box'>
                            <div className='dashboard-image'>png</div>
                            <div className='dashboard-image-content'>
                                <div className='dashboard-image-content-top'>Pending Task</div>
                                <div className='dashboard-image-content-foot'>250</div>
                            </div>
                        </div>
                        <div className='dashboard-repoart-box-4 dashboard-repoart-box'>
                            <div className='dashboard-image'>png</div>
                            <div className='dashboard-image-content'>
                                <div className='dashboard-image-content-top'>Pending Task</div>
                                <div className='dashboard-image-content-foot'>25</div>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-table'>
                        <div className='dashboard-th'>
                            <div>ID</div>
                            <div>NAME</div>
                            <div>ROLE</div>
                            <div>COMPLETED</div>
                            <div>IMCOMPLETE</div>
                        </div>
                        {data}
                    </div>
                </div>
            </div>
        </div>
    );
}