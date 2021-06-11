import React from "react"
import gql from "graphql-tag"
import Lolly from '../components/Lolly';
import { useQuery } from "@apollo/client"

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
export default function LollyPage({ params }) {

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


  return (
    <div>
      <h2>Lolly Page</h2>

      <Lolly
        fillLollyTop={path.flavorTop}
        fillLollyMiddle={path.flavorMid}
        fillLollyBottom={path.flavorBot}
      />


    </div>

  )
}
