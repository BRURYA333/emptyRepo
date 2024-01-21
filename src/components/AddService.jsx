import { useState } from "react"
import { addServiceToServer } from "../data/server/servicesServer";

const AddService = () => {

    const [newService, setNewService] = useState({});

    function changeProp(e) {
        ///copy from state form example
        setNewService({
            ...newService,
            [e.target.id]: e.target.value
        });
    }

    function handleAddService() {
        addServiceToServer(newService);
    }

    return (
        <>
            <form>
                <input id='name' />
                <input id='address' />
                <input id='email' />
                <input id='phone' />
                <button type='submit' onClick={handleAddService}>add service</button>
            </form>
        </>
    )
}

export default AddService
