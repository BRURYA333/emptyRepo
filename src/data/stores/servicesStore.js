//mobX

class servicesStore {
    services = [];
    
    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addNewService: action
        })
    }

    setServices = (data) => {
        if (data.length > 0) {
            this.services = data;
        }
        else {
            this.services = defaultServices;
        }
    }

    addNewService = (service) => {
        this.services = [...this.services, service];
    }
}

export default new servicesStore();

const defaultServices = [
    { name: 'service 1' },
    { name: 'service 2' },
    { name: 'service 3' }
]