import { fakerES as faker } from "@faker-js/faker";
import { OTHER, STUDENT, TEACHER } from "../src/constants/roles";
import { connDb } from "../src/db/connDb";
import { getRandomStr } from "../src/utils/getRamdonStr";

const SIZE_DATA = 30;
const usernames = faker.helpers.uniqueArray(faker.internet.userName, SIZE_DATA);

const data = Array.from({ length: SIZE_DATA }).map((_, i) => {
  return {
    id: faker.string.uuid(),
    username: usernames[i].toLowerCase(),
    name: faker.person.fullName().toLowerCase(),
    state: faker.datatype.boolean(),
    role: getRandomStr([STUDENT, TEACHER, OTHER]),
  };
});

async function seedDb() {
  await connDb.user.createMany({
    data,
  });
}

seedDb()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    connDb.$disconnect();
  });
