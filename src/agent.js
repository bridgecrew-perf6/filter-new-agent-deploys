const { Finding, FindingSeverity, FindingType } = require('forta-agent')
const { GLOBALS } = require('./constants')

const { 
  FORTA_CONTRACT, 
  FORTA_DEPLOYER_ADDRESS,
  FORTA_CREATE_AGENT_FUNCTION, 
} = GLOBALS

let findingsCount = 0

const handleTransaction = txEvent => {
  const findings = []
  
  // filter agent for forta deployer's createAgent function triggers
  const fortaAccountDeploymentInvocations = txEvent.filterFunction(FORTA_CREATE_AGENT_FUNCTION, FORTA_CONTRACT)
  // console.log(`forta invocation array: ${fortaAccountDeploymentInvocations}`)
  // console.log(...fortaAccountDeploymentInvocations)

  const { from, to } = txEvent.transaction

  console.log(`from: ${from}`)

  // limiting this agent to emit only 5 findings so that the alert feed is not spammed
  if(findingsCount >= 5)  return findings
  
  fortaAccountDeploymentInvocations.forEach(deployment => {
    console.log(`deployment args: ${deployment.args}`)
    
    if(from.toLowerCase() === FORTA_DEPLOYER_ADDRESS.toLowerCase()) {
       findings.push(
        Finding.fromObject({
          name: 'New Agent Deployment',
          description: `New agent deployment by Forta deployer account: ${FORTA_DEPLOYER_ADDRESS}`,
          alertId: 'FORTA-7',
          severity: FindingSeverity.Info,
          type: FindingType.Info, 
          metadata: {
            from,
            to
          }
        })
      )
      findingsCount += findings.length
    } 
  })
  console.log(`findings: ${findings}`)
  return findings
}

module.exports = {
  handleTransaction
}
