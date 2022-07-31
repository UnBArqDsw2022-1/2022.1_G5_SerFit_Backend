const { request } = require("express");

describer('Placeholder', () => {
    it('should call placeholder and get 200 with message Login successfult', () => {
        const req = {
        };
        request('/placeholder/test')

        expect(res.status).toBe(200)
        expect(res.message).toBe('Login successful');
    });
});