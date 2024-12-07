import React from 'react'
import Navbar from '../components/Navbar'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <h1>Whoops!! Something went wrong!</h1>
        </main>
    </div>
  )
}

export default ErrorPage
