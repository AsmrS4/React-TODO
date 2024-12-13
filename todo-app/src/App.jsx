import { useState, useContext, createContext } from 'react';

import Task from './components/Task/Task';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider';

import plus from './assets/plus.png';

export const AppContext = createContext({});

function App() {
    const [sliderIsOpen, setIsOpen] = useState(true);

    return (
        <AppContext.Provider value={{ setIsOpen }}>
            <main className='todo'>
                {sliderIsOpen && <Slider />}
                <div className='todo__todo-container'>
                    <div className='todo-container__inner'>
                        <div className='todo-container__tittle'>Фронтенд</div>
                        <div className='tasks-holder'>
                            <Task text={'Сдать все долги'} />
                        </div>
                        <Button text={'Добавить задачу'} iconSrc={plus} />
                    </div>
                </div>
            </main>
        </AppContext.Provider>
    );
}

export default App;
