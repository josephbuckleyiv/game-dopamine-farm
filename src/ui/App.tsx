import { useState, useRef, useEffect } from 'react'

// Components
import Scroll  from './components/scroll/Scroll'
import Dopamine from './components/dopamine/Dopamine';
import Message from './components/message/Message';
import ScrollUpgrade from './components/items/ScrollUpgrade/ScrollUpgrade';

function App() {
    const [dopamine, setDopamine] = useState(0);
    const [notification, setNotification] = useState("")
    const scrollValue = useRef(1);

    // This is the pattern -- later need to move to Zustand.
    const ScrollFunction = Scroll(setDopamine, scrollValue.current);

    const firstUpgradeVal = {
        price: 50,
        upgradeAmount: 0.1, 
        notification: () => setNotification("Not enough Dopamine. Get Scrolling")
    };
    const firstUpgrade = ScrollUpgrade(firstUpgradeVal);


    useEffect(() => {
        setTimeout(() => setNotification(""), 500)
    }, [notification])

    return (
        <>
            <div className="">
                <Dopamine dopamine={dopamine} />

                <div className="container">
                    <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-primary w-100'
                                onClick={() => firstUpgrade(setDopamine, scrollValue, dopamine)}>  price: {firstUpgradeVal.price}; upgrade: {firstUpgradeVal.upgradeAmount} </button>
                        </div>
                        <div className="col">
                            <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                        </div>
                        <div className="col">
                            <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                            </div>
                            <div className="col">
                                <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                            </div>
                            <div className="col">
                                <button className='btn btn-primary w-100' onClick={ScrollFunction}>  Scroll </button>
                            </div>
                        </div>
                    </div>
                    <Message notification={notification} /> 
                </div>
            </div>
        </>
    )
}

export default App
