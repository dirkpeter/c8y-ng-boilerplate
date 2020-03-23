# c8y NG boilerplate


# (local) Setup

1. `npm install`
1. Copy `environments.ts` (in `src/environments`) to `environments.local.ts` and insert your c8y credentials & tenant.
1. `npm start`


# events
```
const filter = {
  dateFrom: this.dateStart.toISOString(),
  dateTo: this.dateEnd.toISOString(),
  type: '', // filter by event fragment "type"
  source: deviceId,
  pageSize: 10,
  withTotalPages: true
};

await client.event
  .list(filter)
  .then(res => {
    //
  });
```
