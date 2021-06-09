import React from "react"
import Lolly from "../components/Lolly"
import { navigate } from 'gatsby'

export default function Home() {

  return (
    <div className='container'>
      <h1 className='heading'>Virtual LollyPop</h1>
      <div className='lolly-list'>
        <Lolly
          fillLollyTop="#6b6bde"
          fillLollyMiddle="#4ac383"
          fillLollyBottom="#d2ec27"
        />
        <Lolly
          fillLollyTop="#b71616"
          fillLollyMiddle="#bf10f1"
          fillLollyBottom="#10adf1"
        />
        <Lolly
          fillLollyTop="#ffc107"
          fillLollyMiddle="#00a97e"
          fillLollyBottom="#ec398f"
        />
        <Lolly
          fillLollyTop="#ffc107"
          fillLollyMiddle="#00a97e"
          fillLollyBottom="#ec398f"
        />
      </div>
      <div className='btn-wrapper'>
        <button className='' onClick={() => navigate('/createNew')}>Make a new lolly to send to a friend</button>
      </div>
    </div>
  )
}