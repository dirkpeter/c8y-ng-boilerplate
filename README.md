# c8y NG boilerplate

# Setup
Copy `environments.ts` (in `src/environments`) to `environments.local.ts` and insert your c8y credentials & tenant.


# TO-DO / To-Learn
- observable / subscriber
  - https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
  - https://medium.com/@billingpuneet.13/how-to-subscribe-to-a-variable-in-angular-7-1ec7087c3e9a
  - https://stackoverflow.com/questions/43516798/setting-an-observable-variable-in-angular-2
- custom pipes
- guards


## events
```
const filter = {
  dateFrom: this.dateFrom.toISOString(),
  dateTo: this.dateTo.toISOString(),
  type: 'deviceInstallation',
  source: device.id,
  pageSize: 1,
  withTotalPages: false
};

await client.event
  .list(filter)
  .then(res => {
    console.log('event|res', '#'+device.id, res.data);
    return res.data;
  });
```
