import { useEffect } from 'react'
import './App.css'
import servicesStore from './data/stores/servicesStore'
import { getServices } from './data/server/servicesServer'
import AddService from './components/AddService'

const App = () => {
  return (
  <>
    <ServicesList />
  </>
  )
}

const ServicesList = (observer(() => {

  useEffect(() => {
    if (!servicesStore.services.length > 0) {
      getServices();// server.js
    }
  }, []);

  return (
    <>
      { //services list
        servicesStore.services.map((service, index) => {
          <div key={index}>service name: {service.name} </div>
        })
      }
      {
        //only if isLogin === true, from mobX
        <AddService/>
      }
    </>
  )
}))

export default App
