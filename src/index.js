// @flow

type Response = {
  users: { name: string, age: number }[];
  count: number;
  isAvailable: boolean;
};

const server = async (): Promise<Response> => new Promise((resolve) => {
  let response: any = {
    users: [
      { firstName: 'John', familyName: 'Edward', age: 20 }
    ],
    usersCount: 100,
    serviceCount: 20,
    availability: {
      status: 'ok',
    },
  }
  setTimeout(() => resolve(response), 1000);
})

const get = (): Promise<Response> => server();

const consumer = async () => {
  const {users, count, isAvailable} = await get();
  console.log('users count is ', count);
  console.log('service is ', isAvailable);
  users.forEach(u => {
    console.log(`user is ${u.name}/${u.age}`);
  })
}

consumer();
