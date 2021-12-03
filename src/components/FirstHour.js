import React, {useState, useEffect} from "react"

const FirstHour = () => {
    const [hour, setHour] = useState("")

    useEffect(() => {
        const date = new Date()
        setHour(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    })

    return (
        <section>
            <p className="textHour">Actual hour</p>
            <p className="hour">{hour}</p>
        </section>
    )
}

export default FirstHour