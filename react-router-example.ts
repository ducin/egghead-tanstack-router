import React from 'react'
import { useParams, NavLink } from 'react-router'

function fetchStuff(id: string){}

function MyComponent(){

  const params = useParams()
  params.id

  const { employeeId } = useParams<{ employeeId: string }>()
  fetchStuff(employeeId!)

  if (!employeeId){
    throw new Error('You gotta put that component under /abc/:id route!!!1')
  }
  fetchStuff(employeeId)

  //
  return <NavLink to="/what-is-this"> what is this?!</NavLink>
}
