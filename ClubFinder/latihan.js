const profile = {
    firstName: 'muhammad',
    lastName: 'Doe',
    age: 18,
  };
   
  const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
   
  console.log(`${localFirstName} ganteng`);
  console.log(localAge);
