import React, {useState} from 'react';
import '../scss/Notification.scss';

function Notification(props){

    const [notification, setNotification] = useState(true)

    let display;

    if(props.userInformation.notification){
        if(notification){
            display = <div className="savingContainer"><div className="information">
                <h1>Welcome to My Budget</h1>
                <h2>Version: Beta</h2>
                <hr/>
                <h2>Debts</h2>
                <li className="complete">Add debts with interest or no interest = completed</li>
                <li className="complete">Make a payment = completed</li>
                <li className="complete">Edit debt item = completed</li>
                <li className="partial">Interest calculations = If my interest calculations are inaccurate please contact me at rmcleandev@gmail.com and let me know so I can make proper adjustments</li>
                <li className="complete">Show Payments = completed</li>
                <hr />
                <h2>Budget</h2>
                <li className="notCompleted">Nothing has been completed at this time</li>
                <hr/>
                <h2>Savings</h2>
                <li className="complete">Add saving item = completed</li>
                <li className="notCompleted">Add Money to saving = not complete</li>
                <li className="notCompleted">Edit saving item = not complete</li>
                <li className="notCompleted">Show money added to each item = not complete</li>
                <p>If you have any questions or something is wrong with my calculations please feel free to email me at rmcleandev@gmail.com so I can fix the problems ASAP.</p>
                <h3 className="close" onClick={() => setNotification(false)}>Close</h3>
            </div></div>
        } else {
            display = null;
        }
    }

    return (
        <div>
            {display}
        </div>
    )
}

export default Notification;