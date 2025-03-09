import { useState, useEffect } from 'react';
import Generator from '../../components/Generate/Generator';
import Hero from "../../components/Generate/Hero";
import Workout from "../../components/Generate/Workout";
import generateWorkout from '../../utils/function';

const Generate = () => {
    const [workout, SetWorkout] = useState(null);
    const [poison, setPoison] = useState("individual");
    const [muscles, setMuscle] = useState([]);
    const [goal, setGoal] = useState("strength_power");
    const [showGenerator, setShowGenerator] = useState(false);

    function updateWorkout() {
        if (muscles.length < 1) {
            return;
        }
        let newWorkout = generateWorkout({ poison, muscles, goal });
        console.log(newWorkout);
        SetWorkout(newWorkout);

        // Scroll smoothly to the workout section
        setTimeout(() => {
            document.getElementById('workout')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }

    useEffect(() => {
        if (showGenerator) {
            setTimeout(() => {
                document.getElementById('generate')?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        }
    }, [showGenerator]);

    return (
        <div className='min-h-screen flex flex-col bg-[#171717] text-white text-sm sm:text-base'>
            <Hero onAccept={() => setShowGenerator(true)} />
            
            {showGenerator && (
                <div id="generate">
                    <Generator
                        poison={poison} setPoison={setPoison}
                        muscles={muscles} setMuscle={setMuscle}
                        goal={goal} setGoal={setGoal}
                        updateWorkout={updateWorkout}
                    />
                </div>
            )}
            
            {workout && <Workout workout={workout} id="workout" />}
        </div>
    );
}

export default Generate;
