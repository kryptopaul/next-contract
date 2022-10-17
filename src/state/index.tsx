import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    results: [],
    buttonLoading: false,
    displayResults: 'flex'
});

export { setGlobalState, useGlobalState };