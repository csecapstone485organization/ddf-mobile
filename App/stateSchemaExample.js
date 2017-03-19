// Example to demonstrate how state should look in redux store

{
  currentUser: 'julian',
  selectedWorkspace: 'Dummy Data'
  workspaces:
  {
    isFetching: true,
    didInvalidate: false,
    [
      {
        name: 'Dummy Data',
        datapoints: 4325
      },
      {
        name: 'Secret Data',
        datapoints: 22
      }
    ]
  },
  query:
  {
    text: 'America\'s Taco ',
    time: 1439478405547,
    location: {
      long: 55,
      lat: 55
    },
    sorting: 'CLOSEST FIRST'
  }

  results:
    [
      {
        name: 'America\'s Taco Shop',
        time: 1369478405547,
        location: {
          long: 55,
          lat: 57
        }
      },
      {
        {
          name: 'America\'s Taco Shack',
          time: 1489478405547,
          location: {
            long: 35,
            lat: 97
          }
        },
      }
    ]
}
