const connection = require('../database/index');

module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('avaliations').count();

        const avaliations = await connection('avaliations')
            .limit(6)
            .offset((page - 1) * 6)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(avaliations);
    },
    
    async create (request, response) {
        const { id, name, email, ra, description } = request.body;

        await connection('avaliations').insert({
            id,
            name,
            email,
            ra,
            description,
        })

    return response.json();
    },
}