// Vercel Serverless Function - 流动性数据API
module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // API response
  const data = {
    sofr: 3.65,
    iorb: 3.65,
    walcl: 6675344,
    wtregen: 847718.0,
    rrpartsyd: 0.327,
    netLiquidity: 5827625.673,
    pipePressure: 0.00,
    lastUpdated: new Date().toISOString(),
    status: 'critical',
    formulas: {
      netLiquidity: 'WALCL - WTREGEN - RRPONTSYD',
      pipePressure: 'SOFR - IORB'
    },
    alerts: [{
      id: '1',
      title: '管道压力警报',
      severity: 'critical',
      message: 'SOFR-IORB差值达到0.00%，市场流动性处于临界状态',
      timestamp: new Date().toISOString()
    }],
    success: true,
    timestamp: new Date().toISOString(),
    deployedOn: 'Vercel',
    version: '1.0.0',
    project: 'MJ工作室 · Logos哨兵终端'
  };

  res.status(200).json(data);
};