import React from "react"
import gql from "graphql-tag"
import { Router } from '@reach/router'
import Lolly from './newLolly';
import { useQuery } from "@apollo/client"

const GET_LOLLY = gql`
query MyQuery {
  
  getAllLollies  {
    recipientName 
    sendersName
    message
    flavorTop
    flavorMid
    flavorBot
    lollyPath
    }
 
}

`;

export default function LollyPage() {
  const { data, loading, error } = useQuery(GET_LOLLY);

  if (loading) {
    return <div className='loading'><h2>Loading ...</h2></div>
  }
  if (error) {
    return <h1>Page Not Found 404...</h1>
  }
  console.log(data)
  return (
    <Router basepath="/lollies">
      {data.getAllLollies.map((value, key) => {
        return (
          <Lolly key={key} pageContext={value} path={`/${value.lollyPath}`} />
        )
      })}
    </Router>
  )
}
