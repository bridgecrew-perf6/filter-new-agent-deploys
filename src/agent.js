// const { Finding, FindingSeverity, FindingType } = require("forta-agent");

const { RPC_URL_POLYGON } = process.env
const { Finding, FindingSeverity, FindingType } = require('forta-agent')
const { GLOBALS  } = require('./constants')


const { FORTA_CONTRACT, DEPLOY_AGENT_EVENT, FORTA_AGENT_TRANSFER_EVENT } = GLOBALS

let findingsCount = 0

const handleTransaction = (txEvent) => {
  const findings = []

  // limiting this agent to emit only 5 findings so that the alert feed is not spammed
  if(!fortaAccountDeploymentInvocations.length || findingsCount >= 5)  {
    return findings
  } 

  // filter agent for  transaction logs for AgentEnabled events emitted during creation of new agents
  const fortaAccountDeploymentInvocations = txEvent.filterLog(DEPLOY_AGENT_EVENT, FORTA_CONTRACT)

  console.log(`forta invocation arr: ${fortaAccountDeploymentInvocations.length}`)
  

  fortaAccountDeploymentInvocations.forEach(deployment => {
    console.log(`deployment: ${deployment}`)

    // extract deployment event args
    const { to, from } = deployment.args

    
    console.log(`from: ${from}`)
    console.log(`to: ${to}`)
  
    if(from === DEPLOYER_ADDRESS) {
      findings.push(
        Finding.fromObject({
          name: 'New Contract Deployment',
          description: 'deployment by Forta deployer account',
          alertId: 'FORTA-7',
          severity: FindingSeverity.Info,
          type: FindingType.Info, 
          metadata: {
            from: from,
            to: to
          }
        })
      )
      findingsCount ++
    }
    return findings
  })
}


module.exports = {
  handleTransaction, 
  // handleTransaction: handleTransactionProvider()
}
