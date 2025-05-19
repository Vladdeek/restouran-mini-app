import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import UserOrders from './pages/UserOrders'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router>
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/orders' element={<UserOrders />} />
		</Routes>
	</Router>
)
