import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    let createdContact = createFakeContact();
    let existingContacts = [];
    try {
        const data = await readContacts();
        existingContacts = data;
    }
    catch (err) {
        console.log(err);
    }
    const updatedContacts = [createdContact, ...existingContacts];

    try {
        await writeContacts(updatedContacts);
    }
    catch (err) {
        console.log(err);
    }
};

addOneContact();
