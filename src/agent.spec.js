const {
  FindingType,
  FindingSeverity,
  Finding,
  createTransactionEvent,
  ethers
} = require("forta-agent")

const { handleTransaction } = require("./agent");

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
      console.log(`finding: ${findings}`)
      expect(findings).toStrictEqual([])
      expect(mockDeployment.filterFunction).toHaveBeenCalled(1)
    })
  })
});
