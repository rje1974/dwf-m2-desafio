import { PelisCollection, Peli } from "./models";

export const getRandomId = () => {
  const randomNumber = Math.floor(Math.random() * 100000);
  return 129856 + randomNumber;
};

const SESSION_ID = getRandomId();

const test = 1

const TEST_ID = 1;
const TEST_TITLE = "title " + TEST_ID;

const SECOND_TEST_ID = 2;
const SECOND_TEST_TITLE = "title " +  SECOND_TEST_ID;
  const collection = new PelisCollection();
  await collection.add({
    id: TEST_ID,
    title: TEST_TITLE,
    tags: ["tt", "rr"],
  });
  const all = await collection.getAll();
  console.log("HOLA")
  const a = all[0];
  const b = await collection.getById(a.id);

console.log(TEST_ID)
console.log(SECOND_TEST_ID)
console.log(TEST_TITLE)
console.log(SECOND_TEST_TITLE)
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

// test.serial("Testeo el método getById", async (t) => {
//   t.is(a.title, b.title);
// });

// test.serial("Testeo el método search", async (t) => {
//   const collection = new PelisCollection();
//   await collection.add({
//     id: TEST_ID,
//     title: TEST_TITLE,
//     tags: ["tt", "rr"],
//   });
//   await collection.add({
//     id: SECOND_TEST_ID,
//     title: SECOND_TEST_TITLE,
//     tags: ["yy", "uu"],
//   });
//   const all = await collection.getAll();
//   const a = all[0];
//   const b = await collection.search({ title: SESSION_ID });//le puse any
//   const ids = b.map((b) => b.id);
//   t.deepEqual(ids, [TEST_ID, SECOND_TEST_ID]);

//   const c = await collection.search({
//     title: SECOND_TEST_ID,
//     tag: "yy",
//   });
//   t.deepEqual(c[0].id, SECOND_TEST_ID);
// });
