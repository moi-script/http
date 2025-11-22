
export function parseQuer(origin, url) {
    const queryMap = new Map();
    const urlsReq = new URL(origin + url); // dont know about the request hostname 

    urlsReq.searchParams.entries().forEach(([key, value], i) => {
        queryMap.set(key, value); 
    });

    return queryMap;
}
