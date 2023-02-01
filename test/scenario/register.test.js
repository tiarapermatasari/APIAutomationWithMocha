import { assert } from 'chai';
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

// Describe = we can call like a Suite
describe('Register', function() {
    // it = we can call a testcase
    it('Should successfull register when insert valid data', async () => {
        const response = await reqresApi.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
    });
});