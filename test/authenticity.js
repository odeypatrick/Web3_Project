const Authenticity =  artifacts.require('Authenticity');

contract ('Authenticity', () => {
    it('Should deploy the smart contract properly', async () => {
        const authenticity = await Authenticity.deployed();
        console.log(authenticity);
        assert(authenticity !=='');
    })
})