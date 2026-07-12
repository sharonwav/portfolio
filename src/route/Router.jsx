import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Index'
import PublicTransportAd from '../pages/PublicTransportAd/Index'
import PortugalSpain from '../pages/PortugalSpain/Index'
import UniconFind from '../pages/UniconFind/Index'
import MediNote from '../pages/MediNote/Index'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/public-transport-ad' element={<PublicTransportAd />}/>
            <Route path='/portugal-vs-spain-interview' element={<PortugalSpain />}/>
            <Route path='/unicon-find-app' element={<UniconFind />}/>
            <Route path='/medinote-app' element={<MediNote/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
