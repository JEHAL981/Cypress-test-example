export const fetchMembers = () =>
    fetch(
        'https://httpbin.org/anything?members=mattbellamy&members=chriswolstenholme&members=dominichoward'
    ).then(r => r.json());
