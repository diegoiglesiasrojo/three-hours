import React, {useState, useEffect} from "react"

const SecondHour = () => {
    const [hour, setHour] = useState("")
    useEffect(() => {
        const date = new Date()
        setHour(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }, [])

    return (
        <section>
            <p className="textHour">Hour when the webpage started</p>
            <p className="hour">{hour}</p>
        </section>
    )
}

export default SecondHour