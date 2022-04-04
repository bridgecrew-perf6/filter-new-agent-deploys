const {
  FindingType,
  FindingSeverity,
  Finding,
  createTransactionEvent,
  ethers
} = require("forta-agent");
const { handleTransaction } = require("./agent");

describe("detect Forta's agent deployments ",  async () => {
  describe('', () => {
    const mockDeployEvent = createTransactionEvent({})
    mockDeployEvent.filterLog = jest.fn()

    beforeEach(() => {
      mockDeployEvent.filterLog.mockReset()
    })

    it('returns empty findings if there are no new deployment', async () => {
      mockDeployEvent.filterLog.mockReturnValue([])
      const findings = await handleTransaction(mockDeployEvent)
      expect(findings).toStrictEqual([])
      expect(mockDeployEvent.filterLog).toHaveBeenCalled(1)
      expect()
    })
  })
  // const createTxEvent = () =>
  //   createTransactionEvent({});

  // describe("handleTransaction", () => {
  //   it("returns empty findings if gas used is below threshold", async () => {
  //     const txEvent = createTxEventWithGasUsed("1");

  //     const findings = await handleTransaction(txEvent);

  //     expect(findings).toStrictEqual([]);
  //   });

  //   it("returns a finding if gas used is above threshold", async () => {
  //     const txEvent = createTxEventWithGasUsed("1000001");

  //     const findings = await handleTransaction(txEvent);

  //     expect(findings).toStrictEqual([
  //       Finding.fromObject({
  //         name: "High Gas Used",
  //         description: `Gas Used: ${txEvent.gasUsed}`,
  //         alertId: "FORTA-1",
  //         type: FindingType.Suspicious,
  //         severity: FindingSeverity.Medium,
  //       }),
  //     ]);
  //   });
  // });
});
