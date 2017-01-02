module.exports = function then() {
  this.Then(
    /^I want the page to be accessible$/, function (done) {
      const auditReport = browser
        .execute(function () {
          const configuration = new window.axs.AuditConfiguration();

          configuration.showUnsupportedRulesWarning = false;

          return window.axs.Audit.createJSONReport(
            window.axs.Audit.run(configuration)
          );
        })
        .value
        .map(function (audit) {
          return audit.rule.severity.toUpperCase() + ': ' + audit.rule.heading + "\n" +
            audit.elements.join("\n");
        });

      expect(auditReport).to.have.length(0, "\n" + auditReport.join("\n\n"));

      done();
  });
};
