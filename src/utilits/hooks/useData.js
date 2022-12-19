import React from "react"

export const useData = () => {
   const [data, setData] = React.useState([])
   return { data, setData }
}
