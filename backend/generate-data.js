const { faker } = require('@faker-js/faker');
const pool = require('./main'); // Import the Pool instance

// Function to sanitize input
const sanitizeInput = (input) => input.replace(/["']/g, ''); // Remove quotes

const insertFakeData = async () => {
    try {
        for (let i = 0; i < 100000; i++) {
            // Generate fake username and email
            const username = sanitizeInput(faker.internet.username());
            const email = sanitizeInput(faker.internet.email());

            // Insert into Account table
            const accountRes = await pool.query(
                'INSERT INTO Account (username, email) VALUES ($1, $2) RETURNING acc_id',
                [username, email]
            );
            const accId = accountRes.rows[0].acc_id;

            // Generate random class_id and insert into Character table
            const classId = faker.number.int({ min: 1, max: 10 }); // Updated method
            const charRes = await pool.query(
                'INSERT INTO Character (acc_id, class_id) VALUES ($1, $2) RETURNING char_id',
                [accId, classId]
            );
            const charId = charRes.rows[0].char_id;

            // Generate random reward_score and insert into Scores table
            const rewardScore = faker.number.int({ min: 0, max: 1000 }); // Updated method
            await pool.query(
                'INSERT INTO Scores (char_id, reward_score) VALUES ($1, $2)',
                [charId, rewardScore]
            );

            // Log progress every 1000 records
            if (i % 1000 === 0) {
                console.log(`${i} records inserted`);
            }
        }
        console.log('Data generation completed!');
    } catch (err) {
        console.error('Error inserting data:', err.message);
    } finally {
        await pool.end(); // Ensure Pool instance ends properly
    }
};

// Run the function
insertFakeData();



