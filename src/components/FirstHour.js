import React, {useEffect} from "react"

const FirstHour = () => {

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            let actualHour = document.querySelector("#actualHour")
            actualHour.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }, 1000)
    })

    return (
        <section>
            <p className="textHour">Actual hour</p>
            <p className="hour" id="actualHour">Loading...</p>
        </section>
    )
}

export default FirstHour