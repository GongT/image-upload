///<reference types="node"/>

export type FetchApi = (...args: any[]) => Promise<any>;
let _fetch: FetchApi;
if (typeof window === 'object') {
	if (!window.hasOwnProperty('fetch')) {
		alert('your browser is too old.');
		throw new Error('agent too old.');
	}
	_fetch = window['fetch'];
} else {
	_fetch = (void 0 || require)('node-fetch');
}

export const fetch: FetchApi = _fetch.bind(undefined);

