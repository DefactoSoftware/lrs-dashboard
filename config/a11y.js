import axs from 'accessibility-developer-tools';

axs.Audit.createJSONReport = results => {
  return results
    .filter(audit => !['NA', 'PASS'].includes(audit.result))
    .map(({ rule, elements })=> ({
      rule,
      elements: elements.map((element)=> axs.utils.getQuerySelectorText(element))
    }));
}

window.axs = axs;
