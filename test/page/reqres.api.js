import BaseAPI from '$root/page/base.api';

const reqresApi = {
    register: (data) => BaseAPI.post('/register', data),
    list_users: (param) => BaseAPI.get(`/users?page=${param}`)
}

export default reqresApi

