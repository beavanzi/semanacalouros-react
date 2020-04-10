const connection = require('../database/index');

module.exports = {
    async create(request, response) {
        const { admin_id } = request.body;

        const admin = await connection('avaliations')
            .where('admin_id', admin_id)
            .select('ra')
            .first();

        if (!admin) {
            return response.status(400).json({ error: 'Login errado'});
        }

        return response.json(admin);
    }
}