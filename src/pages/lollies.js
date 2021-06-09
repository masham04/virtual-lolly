import React from "react"
import gql from "graphql-tag"
import { Router } from '@reach/router';
import Lolly from "../components/Lolly"
import { Link } from "gatsby"
import { useQuery } from "@apollo/client"

export const query = gql`
  query MyQuery {
    getAllLollies {
      recipientName
      sendersName
      message
      flavorTop
      flavorMid
      flavorBot
      lollyPath
    }
  }
`

export default function LollyPage() {
  const { data, loading, error } = useQuery(query)

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h4>error</h4>
  }
  console.log(data.getAllLollies)
  return (
    <div>

      <Router basepath="/lollies">
        {data.getAllLollies.map((value, key) => {
          return (
            <Lolly key={key} pageContext={value} path={`/${value.link}`}> </Lolly>
          )
        })}
      </Router>

    </div>
  )
}
