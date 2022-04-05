const GLOBALS = {
  FORTA_DEPLOYER_ADDRESS: "0x88dC3a2284FA62e0027d6D6B1fCfDd2141a143b8",
  FORTA_CONTRACT: "0x61447385b019187daa48e91c55c02af1f1f3f863",
  DEPLOY_AGENT_EVENT: "event AgentEnabled(uint256 agentId, bool enabled, uint8 permission, bool value)",
  FORTA_AGENT_TRANSFER_EVENT: "event Transfer(address from, address to, uint256 tokenId)",
  FORTA_ENABLE_AGENT_FUNCTION: "function enableAgent(uint256 agentId, uint8 permission)",
  TEST_ENABLE_AGENT_DEPLOYER: "0x6aea36c4a9cf8ac053c07e662fa27e8bdf047121",
  FORTA_CREATE_AGENT_FUNCTION: "function createAgent(uint256 agentId, address owner, string metadata, uint256[] chainIds)",
  TEST_CREATE_AGENT_DEPLOYER: "0x8791653aa21c1d9b55addadf92beb7c60e42d72c"
}

module.exports = {
  GLOBALS
}



