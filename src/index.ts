// Load all ENV variables from the .env file INSTANTLY

// Requiring Server TS for all the Initializations regarding server
import { init, run } from './server';
import {Elysia} from "elysia";

// Bling, Start the Server from Server.ts
(async () => {
    try {
        let PORT: string = process.env.PORT || '';
        // @ts-ignore
        run(init(), PORT)

    } catch (error) {
        console.error(error, 'Error While Starting the Server!');
        process.exit(1);
    }
})();