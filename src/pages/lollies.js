import React from "react"
import gql from "graphql-tag"
import Lolly from '../components/Lolly';
import { useQuery } from "@apollo/client"
import { navigate } from 'gatsby'

const GET_LOLLY = gql`
query MyQuery {

  getAllLollies  {
    flavorBot
    flavorMid
    flavorTop
    lollyPath
    message
    recipientName
    sendersName
  }
   
  }
`;
export default function LollyPage({ params, location }) {
  console.log(location)
  var obj = params
  var id = obj[Object.keys(obj)[0]];
  console.log(id)

  const { data, loading, error } = useQuery(GET_LOLLY)
  if (loading) {
    return <div className='loading'><h2>Loading ...</h2></div>
  }
  if (error) {
    return <h1>Not Found</h1>
  }
  const objects = data.getAllLollies
  const path = objects.find((el) => el.lollyPath === id)
  console.log(path)

  return (
    <div>


      <div className="container">
        <h2 className='heading'>SHARE THIS LOLLY TO YOUR FRIEND</h2>
        <div className="lollyContainer">
          <div>
            <Lolly
              fillLollyTop={path.flavorTop}
              fillLollyMiddle={path.flavorMid}
              fillLollyBottom={path.flavorBot}
            />
          </div>

          <div className="formContainer">
            <a href={location.href} target='_blank'
              rel="noreferrer" style={{ textDecoration: 'none', color: '#ffff' }}>
              {location.href}
            </a>
            <br /><br /><br />
            <h3>Hi {path.recipientName}</h3>
            <h1 style={{ textAlign: 'center' }}>{path.message}</h1>
            <br /><br/><br/><br/>
            <h3 style={{ float: 'right' }}>From {path.sendersName}</h3>
            <br /><br/><br/><br/><br/>
            <p onClick={() => navigate('/')} to='/'
              style={{ textDecoration: 'none', color: '#ffff', cursor: 'pointer' }}>
              Go Back
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
