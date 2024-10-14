const data: (string | number)[] = ["Hello", 4];

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users.map(user => user.name);
}

fetchData().then((names) => {
  data.push(...names);
  console.log("Fetched names:", names);
  console.log("Updated data array:", data);
});

console.log("Initial data:", data);