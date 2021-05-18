import http from 'k6/http';
export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1,
      timeUnit: '1s', // 1 iterations per second, i.e. 1 RPS
      // timeUnit: '10s', // 10 iterations per second, i.e. 10 RPS
      // timeUnit: '100s', // 100 iterations per second, i.e. 100 RPS
      // timeUnit: '1000s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '30s',
      preAllocatedVUs: 100, // how large the initial pool of VUs would be
      maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};
export default function () {
  http.get('http://test.k6.io/contacts.php');
}