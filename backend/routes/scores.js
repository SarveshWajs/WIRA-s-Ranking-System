const express = require('express');
const router = express.Router();
const pool = require('../main'); // Correct import for the database connection

router.get('/scores', async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    try {
        const searchQuery = `%${search}%`; // SQL LIKE pattern
        const [scores, total] = await Promise.all([
            pool.query(
                `SELECT s.*, c.class_id, a.username, a.email
                 FROM scores s
                 JOIN characters c ON s.char_id = c.char_id
                 JOIN accounts a ON c.acc_id = a.acc_id
                 WHERE a.username ILIKE $1 OR a.email ILIKE $1
                 ORDER BY s.reward_score DESC
                 LIMIT $2 OFFSET $3`,
                [searchQuery, limit, offset]
            ),
            pool.query(
                `SELECT COUNT(*) AS total
                 FROM scores s
                 JOIN characters c ON s.char_id = c.char_id
                 JOIN accounts a ON c.acc_id = a.acc_id
                 WHERE a.username ILIKE $1 OR a.email ILIKE $1`,
                [searchQuery]
            ),
        ]);

        res.json({
            data: scores.rows,
            total: parseInt(total.rows[0].total),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch scores' });
    }
});



module.exports = router;
