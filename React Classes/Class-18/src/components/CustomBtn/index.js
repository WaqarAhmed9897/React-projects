import { useEffect, useState } from 'react'

/*
1. Initial:
Purpose: Jab component ek bar render hojae, us ke baad koi kaam karwana ho.
For e.g.: Shru me API call karni ho ya koi logic lagani ho
Syntax:
useEffect(() => {

}, [])
[] => dependency list

2. Updation:
Purpose: Jab bhi kisi state ya props me change aae, us waqt koi kaam karna ho. 
For e.g.: Look below in CustomBtn component
Syntax
useEffect(() => {

}, [state_ka_name, props_ka_name])

3. Unmount:
Purpose: Jab bhi koi component khatam hone wala ho, usse pehle koi kaam karwana
For e.g. Koi bhi listener remove karwana ho
Syntax:
useEffect(() => {
    return () => {
        
    }
}, [])

*/

function CustomBtn(props) {
    const [backColor, setBackColor] = useState()
    const { bgColor } = props

    useEffect(() => {
        switch (bgColor) {
            case 0: setBackColor('red'); break;
            case 1: setBackColor('green'); break;
            case 2: setBackColor('blue'); break;
        }
        console.log('bgColor', bgColor)
    }, [bgColor])

    useEffect(() => {
        const onClick = () => {
            console.log('click')
        }
        document.addEventListener('click', onClick)

        return () => {
            console.log('component khatam')

            document.removeEventListener('click', onClick)
        }
    }, [])

    return <button
        style={{ width: 80, height: 50, backgroundColor: backColor }}
        onClick={() => alert('0900-78601')}>

        {props.text}

    </button>
}

export default CustomBtn