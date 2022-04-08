# Rogue Radio
Welcome to Rogue Radio, a clone of popular music platform "SoundCloud". Users of Rogue Radio are able to upload music and comment on each other's posts.
# Wiki
 * Feature List: https://github.com/kdngaa/rogueradio/wiki/Feature-List
 * Database Schema: https://github.com/kdngaa/rogueradio/wiki/Database-Schema
# Built with
 * JavaScript | Node.js | Express.js | React.js | Redux | PostgreSQL | Sequelize | HTML | CSS | Git | AWS S3

# Getting Started

1. Clone this repistory

    ```https://github.com/kdngaa/rogueradio```

2. Install the project's dependencies

    ```npm install```

3. Add an .env file containing the variables from the .env.example file

4. Create user and database based on what you setup in .env file

5. Use the Sequelize CLI to apply the provided database migrations and seeder.

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```

6. You can now test the application

    ```npm start```

7. You can sign in via Demo User or create an account yourself
