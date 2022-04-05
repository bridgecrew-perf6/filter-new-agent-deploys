const {
  FindingType,
  FindingSeverity,
  Finding,
  createTransactionEvent,

  ethers
} = require("forta-agent");
const { handleTransaction } = require("./agent");

describe("detect new agent deployments by Forta deployer account",  async () => {
  describe('', () => {
    const mockNewAgentDeployFunction = createTransactionEvent({})
    mockNewAgentDeployFunction.filterFunction = jest.fn()

    beforeEach(() => {
      mockNewAgentDeployFunction.filterFunction.mockReset()
    })

    it('returns empty findings if there are no new deployment', async () => {
      mockNewAgentDeployFunction.filterFunction.mockReturnValue([])
      const findings = await handleTransaction(mockNewAgentDeployFunction)
      console.log(`finding: ${findings}`)
      // expect(findings).toStrictEqual([])
      // expect(mockNewAgentDeployFunction.filterFunction).toHaveBeenCalled(1)
      // expect()
    })
  })
});
