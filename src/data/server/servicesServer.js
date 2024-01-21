import servicesStore from "../stores/servicesStore";

async function getServices() {
    //get from server
    //const res = await axios or fetch /services - GET

    //set in mobX
    servicesStore.setServices('res.data');//remove string
}

const addServiceToServer = async (service) => {
    //post to server
    //const res = await axios or fetch /service - POST

    //if OK -> update mobX
    servicesStore.addNewService(service);

    //else -> return failed to AddServiceCMP
}

export { getServices, addServiceToServer };