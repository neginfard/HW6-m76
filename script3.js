let user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 19,
  scores: { english: 10, math: 19.5, physics: 14 },
};

function addScore(user, key, value) {
  user.scores[key] = value;
  return user;
}
console.log(addScore(user, "chemist", 18));

function addRole(user, value) {
  user.roles.push(value);
  if (user.age < 18) {
    user.status = "veryyoung";
  }
  return user;
}
console.log(addRole(user, "Webdeveloper"));

function convertToArray(user, key, value) {
  user = Object.entries(user);
  user.push([key, value]);
  return Object.fromEntries(user);
}
console.log(convertToArray(user, "fatherName", "ali"));
