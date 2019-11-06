const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as s", "st.scheme_id", "s.id")
    .select("s.id", "s.scheme_name", "st.step_number")
    .where({ scheme_id: id });
}

async function add(scheme) {
  const [id] = await db("schemes").insert(scheme);

  return findById(id);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
