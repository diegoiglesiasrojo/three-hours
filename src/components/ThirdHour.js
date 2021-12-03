import React, {useState, useEffect} from "react"

const ThirdHour = () => {
    const [updateHour, setUpdateHour] = useState(false)
    const [hour, setHour] = useState("")
    useEffect(() => {
        const date = new Date()
        setHour(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }, [updateHour])

    return (
        <section>
            <button onClick={() => {setUpdateHour(!updateHour)}}>Update this hour</button>
            <p className="hour">{hour}</p>
        </section>
    )
}

export default ThirdHour