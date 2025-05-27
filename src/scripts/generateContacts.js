import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    let createdContacts = [];
    for (let i = 0; i < number; i++) {
        createdContacts.push(createFakeContact());
    }

    let existingContacts = [];
    try {
        const data = await readContacts();
        existingContacts = data;
    }
    catch (err) {
        if (err.code !== "ENOENT") {
            console.log(err);
            return;
        }
    }
    const updatedContacts = [...existingContacts, ...createdContacts];

    try {
        await writeContacts(updatedContacts);
    }
    catch (err) {
        console.log(err);

    }
};

generateContacts(5);
