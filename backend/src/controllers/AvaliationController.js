const connection = require('../database/index');

module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('avaliations').count();

        const avaliations = await connection('avaliations')
            .select('*');
    
        return response.json(avaliations);
    },
    
    async create (request, response) {
        const { name, email, ra, description } = request.body;
        const admin_id = 'p3t-4dm1n';

        await connection('avaliations').insert({
            admin_id,
            name,
            email,
            ra,
            description,
        })

    return response.json();
    },
}