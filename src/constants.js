const GLOBALS = {
  DEPLOYER_ADDRESS: "0x88dC3a2284FA62e0027d6D6B1fCfDd2141a143b8",
  FORTA_CONTRACT: "0x61447385b019187daa48e91c55c02af1f1f3f863",
  DEPLOY_AGENT_EVENT: "event AgentEnabled(uint256 agentId, bool enabled, uint8 permission, bool value)",
  AGENT_DEPLOY_FUNCTION: "function createAgent(uint256 agentId, address owner, string metadata, uint256[] chainIds)",
  FORTA_AGENT_TRANSFER_EVENT: "event Transfer(address from, address to, uint256 tokenId)"

}

module.exports = {
  GLOBALS
}



