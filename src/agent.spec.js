const {
  FindingType,
  FindingSeverity,
  Finding,
  createTransactionEvent,
  ethers
} = require("forta-agent")

const { 
  handleTransaction,
  FORTA_CREATE_AGENT_FUNCTION,
  FORTA_CONTRACT
} = require("./agent");

console.log(`handle tx: ${handleTransaction}`)

describe("New Agent Deployment",  async () => {
  describe('detect new agent deployments by Forta deployer account', async () => {
    const mockDeployment = createTransactionEvent({})
    mockDeployment.filterFunction = jest.fn()

    beforeEach(() => {
      mockDeployment.filterFunction.mockReset()
    })

    it('returns empty findings if there are no new deployment', async () => {
      mockNewAgentDeployFunction.filterFunction.mockReturnValue([]);
      const findings = await handleTransaction(mockDeployment)
      expect(findings).toStrictEqual([])
      expect(mockDeployment.filterFunction).toHaveBeenCalled(1)
      expect(mockDeployment.filterFunction).toHaveBeenCalledWith(FORTA_CREATE_AGENT_FUNCTION, FORTA_CONTRACT)
    })
  })
});
