import "fetch";

export type FetchApi = (...args: any[]) => Promise<any>;

let _fetch: FetchApi;
if (typeof window === 'object') {
	_fetch = window['fetch'];
} else {
	_fetch = (void 0 || require)('node-fetch');
}

export const fetch: FetchApi = _fetch;
