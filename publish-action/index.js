const core = require('@actions/core');
const github = require('@actions/github');

try {
    const stage = core.getInput('stage');
    const callerIdRun = core.getInput('caller_run_id');
    console.log(`Hello ${stage} and ${callerIdRun}!`);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
