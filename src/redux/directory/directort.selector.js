import {createSelector} from 'reselect'

const directorySection = state => state.directory;

export const directorySelector = createSelector(
    [directorySection],
    (directory)=>directory.sections
)