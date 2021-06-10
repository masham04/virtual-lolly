import React, { useState } from "react"
import Lolly from "../components/Lolly"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import shortid from "shortid"

const createLollyMutation = gql`
  mutation createLolly(
    $recipientName: String!
    $sendersName: String!
    $message: String!
    $flavorTop: String!
    $flavorMid: String!
    $flavorBot: String!
    $lollyPath: String!
  ) {
    createLolly(
      recipientName: $recipientName
      sendersName: $sendersName
      message: $message
      flavorTop: $flavorTop
      flavorMid: $flavorMid
      flavorBot: $flavorBot
      lollyPath: $lollyPath
    ) {
      message
      lollyPath
    }
  }
`
export default function CreateNew() {
    const [createLolly] = useMutation(createLollyMutation)

    const [flavourTop, setFlavourTop] = useState("#ef0078")
    const [flavourMiddle, setFlavourMiddle] = useState("#ff8d00")
    const [flavourEnd, setFlavourEnd] = useState("#dd0074")
    const [recipentName, setRecipentName] = useState("")
    const [message, setMessage] = useState("")
    const [senderName, setSenderName] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        const id = shortid.generate()
        await createLolly({
            variables: {
                recipientName: recipentName,
                sendersName: senderName,
                message: message,
                flavorTop: flavourTop,
                flavorMid: flavourMiddle,
                flavorBot: flavourEnd,
                lollyPath: id,
            },
        })
        console.log({ recipentName, senderName, message, flavourEnd, flavourMiddle, flavourTop })
        setLoading(false)
        window.location.replace(`/lollies/${id}`)
    }
    return (
        <div className="container">
            <h2 className='heading'>CREATE LOLLY</h2>
            <div className="lollyContainer">
                <div>
                    <Lolly
                        fillLollyBottom={flavourEnd}
                        fillLollyMiddle={flavourMiddle}
                        fillLollyTop={flavourTop}
                    />
                </div>
                <div className="colorContainer">
                    <label htmlFor='color'>
                        <input
                            type="color"
                            name="top"
                            value={flavourTop}
                            onChange={e => setFlavourTop(e.target.value)}
                        />
                    </label>
                    <label htmlFor='color'>
                        <input
                            type="color"
                            name="middle"
                            value={flavourMiddle}
                            onChange={e => setFlavourMiddle(e.target.value)}
                        />
                    </label>
                    <label htmlFor='color'>
                        <input
                            type="color"
                            name="bottom"
                            value={flavourEnd}
                            onChange={e => setFlavourEnd(e.target.value)}
                        />
                    </label>
                </div>
                <div className="formContainer">
                    <label htmlFor='text'>To</label>
                    <input
                        type="text"
                        required
                        onChange={e => setRecipentName(e.target.value)}
                    />
                    <label htmlFor='text'>Message</label>
                    <textarea
                        style={{ resize: "none" }}
                        rows={7}
                        required
                        onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor='text'>From</label>
                    <input
                        type="text"
                        required
                        onChange={e => setSenderName(e.target.value)}
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