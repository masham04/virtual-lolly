import React, { useState } from "react"
import Header from "../components/header"
import Lolly from "../components/Lolly"

export default function CreateNew() {


    const [flavourTop, setFlavourTop] = useState("#ef0078")
    const [flavourMiddle, setFlavourMiddle] = useState("#ff8d00")
    const [flavourEnd, setFlavourEnd] = useState("#dd0074")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        window.location.replace('/lolly')
    }

    return (
        <div className="container">
            <Header />
            <div className="lollyContainer">
                <div>
                    <Lolly
                        fillLollyBottom={flavourEnd}
                        fillLollyMiddle={flavourMiddle}
                        fillLollyTop={flavourTop}
                    />
                </div>
                <div className="colorContainer">
                    <label>
                        <input
                            type="color"
                            name="top"
                            value={flavourTop}
                            onChange={e => setFlavourTop(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="color"
                            name="middle"
                            value={flavourMiddle}
                            onChange={e => setFlavourMiddle(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="color"
                            name="bottom"
                            value={flavourEnd}
                            onChange={e => setFlavourEnd(e.target.value)}
                        />
                    </label>
                </div>
                <div className="formContainer">
                    <label htmlFor="first-name">To</label>
                    <input
                        type="text"
                        required

                    />
                    <label htmlFor="second-name">Message</label>
                    <textarea
                        style={{ resize: "none" }}
                        rows={7}
                        required

                    />
                    <label htmlFor="third-name">From</label>
                    <input
                        type="text"
                        required

                    />
                    <div className="formBtn-wrapper">
                        <button onClick={handleSubmit}>
                            {loading ? "freeze..." : "freeze"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}