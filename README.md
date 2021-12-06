# faker

```
  const users= []
  for(let i = 0; i < 5; i++) {
    const faker = new Faker()
    users.push({
        name: faker.nameFull(),
        email: faker.email(),
        age: Faker.randomNumber({min: 5, max: 80}),
        country: faker.country(),
        ava: faker.avata(),
        describe: faker.text({length: 200})
        
      })
  }
```
