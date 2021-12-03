import React from "react"
import FirstHour from "./FirstHour"
import SecondHour from "./SecondHour"
import ThirdHour from "./ThirdHour"

const Main = () => {

    return (
        <main style={{backgroundImage : "url('./assets/fondo.jpeg')"}}>
            <FirstHour/>
            <SecondHour/>
            <ThirdHour/>
        </main>
    )
}

export default Main