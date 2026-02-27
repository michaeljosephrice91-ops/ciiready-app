import { useState, useEffect, useCallback, useMemo, useRef } from "react";

// ─── COMPLETE QUESTION BANK (230 questions across M1–M10) ──────────────────
// These questions are independently authored for revision purposes and are not
// affiliated with, endorsed by, or derived from CII examination materials.
// All questions test publicly available regulatory knowledge.
const QUESTIONS = [
  // ── MODULE 1: Operation of the UK Financial Services Industry ──
  {id:101,m:1,t:"M1A",d:1,q:"Which of the following best describes the function of 'capital management' within financial services?",o:["Setting interest rates on behalf of the Government","Channelling savings from individuals into productive investment in the economy","Regulating the conduct of financial advisers","Issuing gilts to fund Government borrowing"],a:1,e:"Capital management channels savings — from bank deposits, ISAs, shares and other instruments — into productive investment that drives economic growth. It is one of the four principal functions of financial services."},
  {id:102,m:1,t:"M1A",d:1,q:"What specific risk does a bank's core business model create?",o:["Currency risk from exchange rate fluctuations","Liquidity risk — a 'run on the bank' if short-term deposits cannot meet long-term loan commitments","Regulatory risk from FCA enforcement action","Credit risk from borrowers defaulting"],a:1,e:"Banks turn short-term deposits into long-term loans. If too many depositors demand their money simultaneously, the bank cannot meet those withdrawals — a 'run on the bank'. Managing this maturity mismatch is fundamental to banking stability."},
  {id:103,m:1,t:"M1A",d:1,q:"In financial services, 'liquidity' refers to which of the following?",o:["The total value of assets held by a financial institution","Reconciling savers' need for ready access to funds with borrowers' requirement for long-term committed finance","The ease with which an investment can be sold at short notice","A bank's ability to raise additional capital on wholesale markets"],a:1,e:"Liquidity reconciles two conflicting needs: savers want access to their money quickly; borrowers need funds committed for years. Banks must manage this mismatch carefully every day."},
  {id:104,m:1,t:"M1A",d:2,q:"Which of the following is NOT one of the four principal functions of financial services?",o:["Capital management","Liquidity","Insurance and risk transfer","Setting the Government's 2% inflation target"],a:3,e:"The four principal functions are: capital management, liquidity, insurance (risk transfer) and diversification. Setting the inflation target is the Bank of England Monetary Policy Committee's remit — not a function of the financial services industry."},
  {id:105,m:1,t:"M1A",d:1,q:"Insurance is described as a mechanism for risk transfer. What does this mean in practice?",o:["Risk is eliminated entirely when a policy is taken out","The insurer assumes the policyholder's financial risk in exchange for a premium","Risk is shared equally between all policyholders in a pool","The Government guarantees all insurance claims above a specified amount"],a:1,e:"Insurance is risk transfer — the policyholder pays a premium and the insurer takes on the financial risk. This enables individuals and businesses to undertake activities they might otherwise avoid."},
  {id:106,m:1,t:"M1B",d:1,q:"Which correctly lists the four key components of the UK financial services sector?",o:["Banks, insurers, advisers and stockbrokers","Infrastructure, Markets, Firms and Authorities","FCA, PRA, MPC and FPC","Retail banking, wholesale banking, insurance and investment management"],a:1,e:"The four components are: Infrastructure (payment and settlement systems), Markets (OTC and exchange-traded), Firms (banks, building societies, insurers etc.) and Authorities (FCA for conduct; Bank of England housing the PRA and FPC for prudential matters)."},
  {id:107,m:1,t:"M1B",d:2,q:"What distinguishes an OTC (over-the-counter) market from an on-exchange market?",o:["OTC markets are regulated; on-exchange markets are not","OTC trades are negotiated directly between two parties; on-exchange trades go via a centralised trading system","OTC markets only deal in government gilts","OTC markets operate 24 hours while exchanges have fixed trading hours"],a:1,e:"OTC markets involve trades negotiated directly between two parties without a central exchange. On-exchange trades go via a centralised trading system where buyers and sellers are formally matched."},
  {id:108,m:1,t:"M1B",d:1,q:"Which body is responsible for conduct of business regulation across the UK financial services sector?",o:["The Bank of England","The Prudential Regulation Authority (PRA)","The Financial Conduct Authority (FCA)","The Financial Policy Committee (FPC)"],a:2,e:"The FCA is responsible for conduct of business regulation — ensuring firms deal fairly with customers. The Bank of England (via the PRA and FPC) handles prudential regulation of financial stability and individual firm soundness."},
  {id:109,m:1,t:"M1C",d:1,q:"What is 'bancassurance'?",o:["A government deposit guarantee scheme for bank customers","Banks and building societies selling insurance and pension products through dedicated subsidiaries","A combined banking and insurance regulator","The process by which banks underwrite insurance risks"],a:1,e:"Bancassurance is where banks and building societies establish divisions or subsidiaries to sell insurance and pension products. It has become less common as banks have refocused on core banking activities."},
  {id:110,m:1,t:"M1C",d:2,q:"A bank's investment managers make all trading decisions for a client within agreed objectives. What type of service is this?",o:["Advisory portfolio management","Execution-only dealing","Discretionary portfolio management","Collective investment management"],a:2,e:"Discretionary management means the investment manager makes all trading decisions within agreed objectives — the client does not approve individual transactions. This contrasts with advisory management, where the client makes the final decision on each trade."},
  {id:111,m:1,t:"M1C",d:2,q:"Which statement about financial advice offered by most high street banks is correct?",o:["Most banks offer independent financial advice as required by FCA rules","Most banks operate on a restricted basis and cannot be described as offering genuinely independent advice","Banks are not permitted to give any form of financial advice","All banks must advise across the whole of the market for retail clients"],a:1,e:"Very few banks offer independent financial advice. A firm can only describe advice as independent if it meets specific FCA criteria — most banks are restricted, advising only on their own or a limited panel of products."},
  {id:112,m:1,t:"M1D",d:1,q:"A broad-based life assurance company would typically offer which types of product?",o:["Gilts and government bonds only","Life and health insurance, pension plans and lump-sum investment vehicles","Current accounts, mortgages and general insurance","Portfolio management and stockbroking services only"],a:1,e:"Broad-based life assurance companies offer life and health insurance products, regular savings plans (including endowments and personal pensions) and lump-sum investment vehicles. Specialists may focus on just one segment."},
  {id:113,m:1,t:"M1E",d:2,q:"Why were friendly societies originally granted complete tax exemption?",o:["Because they are regulated directly by HM Government","Because they were established as mutual self-help organisations in the 19th century for members' benefit","Because they only sold low-value policies to low-income workers","Because all mutual organisations are exempt from UK tax"],a:1,e:"Friendly societies received complete tax exemption because they were established as mutual self-help groups in the 19th century. Profits go to members, not external shareholders. Legislation has since imposed limits on contract size to prevent abuse of the exemption."},
  {id:114,m:1,t:"M1E",d:2,q:"What did the Friendly Societies Act 1992 allow friendly societies to do?",o:["Issue shares on the London Stock Exchange","Opt for corporate status and extend their product range to include unit trusts, OEICs and ISAs","Merge with high street banks","Charge income tax on their investment returns"],a:1,e:"The Friendly Societies Act 1992 allowed friendly societies to opt for corporate status and expand their product range to include unit trusts, OEICs and ISAs alongside their traditional industrial life policies and savings plans."},
  {id:115,m:1,t:"M1F",d:1,q:"The Government primarily influences the economy through which three mechanisms?",o:["Regulation, enforcement and licensing","Taxation, public spending and interest rates","The FCA, PRA and MPC","Inflation targeting, currency control and trade policy"],a:1,e:"The three main mechanisms are: taxation (higher taxes reduce consumer and business spending), public spending (funded partly through gilt issuance and quantitative easing), and interest rates (set by the Bank of England MPC to meet the 2% CPI inflation target)."},
  {id:116,m:1,t:"M1F",d:1,q:"The Bank of England's Monetary Policy Committee (MPC) is primarily responsible for which of the following?",o:["Supervising individual banks for prudential soundness","Setting interest rates to meet the Government's 2% inflation target","Regulating the conduct of financial advisers","Managing the National Debt on behalf of the Government"],a:1,e:"The MPC sets interest rates to meet the Government's 2% CPI inflation target. If inflation rises above target they may raise rates to cool demand; if below they may cut rates to stimulate spending."},
  {id:117,m:1,t:"M1F",d:2,q:"When interest rates rise, which of the following outcomes is most likely?",o:["House prices increase as mortgages become more affordable","Consumers borrow less, save more, and house prices may fall","Business investment accelerates as borrowing becomes more attractive","Inflation increases as the cost of production rises"],a:1,e:"Rising interest rates increase mortgage repayments, reduce disposable income and dampen demand for property. Consumers are incentivised to save rather than borrow, which typically slows the economy and reduces inflationary pressure."},
  {id:118,m:1,t:"M1F",d:2,q:"What is quantitative easing?",o:["The Government reducing income tax to stimulate consumer spending","The Bank of England buying back gilts and corporate bonds to inject liquidity into the financial system","The Government printing money to fund the deficit directly","The FCA requiring banks to increase their minimum capital reserves"],a:1,e:"Quantitative easing involves the Bank of England buying back gilts and corporate bonds, injecting liquidity into financial markets. It has been used following financial crises to increase the money supply when cutting interest rates alone has proved insufficient."},
  {id:119,m:1,t:"M1F",d:1,q:"Tax concessions to encourage long-term saving apply to which of the following?",o:["Current accounts and instant access savings accounts","Pension schemes, ISAs, AIM shares and friendly society savings plans","All bank and building society products","Foreign currency deposits and offshore bonds"],a:1,e:"Tax concessions are designed to encourage saving. They apply to pension contributions, ISAs, qualifying life assurance policies, AIM-listed company shares and friendly society savings plans. Ordinary deposits attract no such concessions."},
  {id:120,m:1,t:"M1F",d:2,q:"How does the Government primarily borrow money to fund public spending?",o:["By raising income tax rates","By issuing gilts and other fixed-interest instruments","By printing additional currency","By requiring pension funds to hold government debt"],a:1,e:"The Government borrows primarily by issuing gilts — conventional (fixed coupon), index-linked (coupon linked to inflation) and green (for environmental investment). Gilts pay regular interest and return the original capital at maturity."},
  // ── MODULE 2: Consumers' Main Financial Needs ──
  {id:201,m:2,t:"M2A",d:1,q:"In the financial planning hierarchy of needs, which stage comes immediately after budgeting?",o:["Protection","Estate and tax planning","Managing debt and borrowing","Retirement planning"],a:2,e:"The correct order is: budgeting → managing debt and borrowing → protection → retirement planning → savings and investment → estate and tax planning. Managing debt comes before protection because high-cost debt reduces resources available for all other planning."},
  {id:202,m:2,t:"M2A",d:1,q:"How is a client's disposable income calculated?",o:["Total assets minus total liabilities","Income minus expenditure","Gross salary minus income tax and NICs","Net salary minus all regular financial commitments"],a:1,e:"Disposable income = income minus expenditure. This figure tells the adviser whether the client is living beyond their means or has surplus income available for insurance premiums, debt repayment or saving."},
  {id:203,m:2,t:"M2A",d:2,q:"An adviser recommends consolidating a client's credit card and overdraft debt into a loan secured against their home. What is the key risk to highlight?",o:["The consolidated loan may carry a higher interest rate","The client's credit score will be permanently damaged","Securing previously unsecured debts against the home means the property is at risk if repayments are missed","This type of consolidation is not regulated by the FCA"],a:2,e:"Debt consolidation can reduce monthly payments, but securing unsecured debts against the client's home is a critical risk — default could result in repossession. Advisers must make this risk clearly understood before proceeding."},
  {id:204,m:2,t:"M2A",d:2,q:"Which description correctly defines a capped mortgage?",o:["A mortgage with a fixed interest rate for the entire term","A mortgage where the rate can rise and fall but cannot exceed a defined ceiling during the agreed period","A tracker mortgage that follows the base rate precisely","A discounted mortgage set at a fixed percentage below the standard variable rate"],a:1,e:"A capped mortgage allows the rate to rise and fall with market rates, but guarantees it will never exceed the defined cap during the agreed period. This provides protection against significant rate rises while preserving the benefit if rates fall."},
  {id:205,m:2,t:"M2B",d:1,q:"Which factors most influence a client's protection needs at any stage of life?",o:["Credit rating and investment portfolio value","Age, dependants, income, financial liabilities, employment status and existing cover","Postcode, property value and net worth","Relationship with their adviser and previous claims history"],a:1,e:"Protection needs are shaped by six factors: age, dependants (people financially relying on the client), income (what needs replacing), financial liabilities (debts to cover), employment status (employer benefits may reduce needs), and existing cover (to avoid over-insuring)."},
  {id:206,m:2,t:"M2B",d:2,q:"Mr and Mrs Phillips are in their mid-20s with two young children, a mortgage, and Mrs Phillips is not working. Which need is most urgent?",o:["Building a retirement fund","Estate planning and IHT mitigation","Protecting the family's income and covering the mortgage if Mr Phillips dies or cannot work","Reducing credit card debt before all other needs"],a:2,e:"The Phillips family represents the 'young family' stage: significant financial liabilities, a non-earning dependent spouse and young children needing years of financial support. Life assurance and income protection are the critical priorities."},
  {id:207,m:2,t:"M2B",d:2,q:"Mr and Mrs Abbott are in their late 40s, their children are financially independent and Mrs Abbott has returned to full-time work. What is their likely highest financial priority?",o:["Life protection for young dependants","Building an emergency fund","Savings, investment and retirement planning","Debt counselling and credit management"],a:2,e:"In the 'post-family/pre-retirement' stage, protection needs have reduced significantly. With dual income and no dependants, the priority shifts decisively to savings, investment and retirement planning."},
  {id:208,m:2,t:"M2C",d:1,q:"To maintain the same standard of living throughout retirement, most people need an income equivalent to approximately what proportion of their pre-retirement earnings?",o:["One half","Two thirds","Three quarters","Their full pre-retirement income"],a:1,e:"Two thirds of pre-retirement earnings is the generally accepted benchmark — and it must be inflation-proofed, since a retirement can easily last 20 to 30 years. Without inflation-proofing, real income erodes significantly over time."},
  {id:209,m:2,t:"M2C",d:2,q:"Under the pension 'triple lock', the State pension increases each year by which measure?",o:["CPI inflation only","The higher of earnings growth, CPI inflation or 2.5%","The rate of GDP growth","RPI inflation regardless of other measures"],a:1,e:"The triple lock guarantees the State pension rises each year by the highest of: earnings growth, CPI inflation or 2.5%. This protects pensioners' purchasing power but is subject to ongoing political debate about its long-term fiscal sustainability."},
  {id:210,m:2,t:"M2C",d:2,q:"Which of the following factors must a financial adviser consider when assessing a client's total pension need?",o:["The client's employer's corporate strategy and dividend policy","Previous and existing pension arrangements and expected State pension provision","The client's investment portfolio and current ISA contributions","The client's attitude to risk as the primary determining factor"],a:1,e:"Having identified a client's total pension need through analysis of age, income and dependants, the adviser must account for existing provision — previous and current pension arrangements and expected State pension — to determine the remaining gap to fill."},
  {id:211,m:2,t:"M2D",d:1,q:"What time horizon is typically considered 'long-term' for investment purposes?",o:["More than 1 year","More than 3 years","More than 5 years","More than 10 years"],a:3,e:"Long-term investment is typically considered to be more than 10 years. Medium-term is generally 5 to 10 years and short-term under 5 years. This distinction matters significantly for asset allocation, risk assessment and product selection."},
  {id:212,m:2,t:"M2D",d:2,q:"ESG investing differs from conventional investing primarily in which way?",o:["ESG funds only invest in government bonds and cash","ESG funds consider environmental, social and governance risks alongside financial returns and may still invest in controversial companies if they are well-governed","ESG funds guarantee superior long-term returns","ESG funds are exclusively available to professional investors"],a:1,e:"ESG funds focus on how businesses operate — their environmental, social and governance risks — alongside standard financial analysis. An ESG fund may still invest in an apparently controversial company if it is well-governed. This is distinct from ethical or SRI funds, which apply stricter exclusion criteria."},
  {id:213,m:2,t:"M2D",d:2,q:"What is 'greenwashing' and what did FCA Policy Statement PS23/16 introduce to address it?",o:["Greenwashing is illegal; PS23/16 introduced criminal penalties","Greenwashing is the exaggeration of environmental credentials; PS23/16 introduced an anti-greenwashing rule and four sustainability labels for investment products","Greenwashing refers to water-related investments; PS23/16 banned their sale to retail clients","Greenwashing is where advisers claim ESG expertise without qualifications; PS23/16 introduced a mandatory ESG qualification"],a:1,e:"Greenwashing is where firms exaggerate or misrepresent their environmental credentials. PS23/16 (effective May 2024) introduced an anti-greenwashing rule and four sustainability labels — Sustainability Focus, Improvers, Impact and Mixed Goals — to help consumers navigate sustainable investment products."},
  {id:214,m:2,t:"M2D",d:2,q:"Inheritance tax (IHT) is charged at what rate on the estate above the nil rate band?",o:["20%","25%","40%","45%"],a:2,e:"IHT is charged at 40% on the value of the estate above the nil rate band (currently £325,000). A reduced rate of 36% applies if at least 10% of the net estate is left to charity."},
  {id:215,m:2,t:"M2D",d:3,q:"For a potentially exempt transfer (PET) to be entirely free of IHT, what conditions must be met?",o:["The donor must survive 3 years and the gift must not exceed £3,000","The donor must survive 7 years and the gift must be irrevocable and unconditional","The donor must survive 5 years and notify HMRC at the time of the gift","The donor must survive 7 years and the recipient must be a direct family member"],a:1,e:"A PET is free of IHT if the donor survives for 7 years after making the gift. The gift must be irrevocable and unconditional — the donor cannot retain any benefit. If the donor dies within 7 years, taper relief may reduce the IHT liability depending on how long before death the gift was made."},
  // ── MODULE 3: Legal Concepts and Considerations ──
  {id:301,m:3,t:"M3A",d:1,q:"As a sole trader, how is business income taxed?",o:["Corporation tax on all business profits","Income tax and National Insurance contributions on earnings via self-assessment","PAYE through the business payroll","A flat-rate self-employment tax based on turnover"],a:1,e:"Sole traders pay income tax and NICs on their business profits through self-assessment. There is no legal separation between the individual and their business — they have full personal liability and all profit is treated as personal income."},
  {id:302,m:3,t:"M3A",d:1,q:"How are the profits of a standard partnership taxed?",o:["The partnership pays corporation tax on all profits","Each partner pays income tax and NICs on their individual share of profits","The senior partner pays all tax on behalf of all partners","Profits are tax-free up to each partner's personal allowance"],a:1,e:"In a standard partnership, each partner pays income tax and NICs on their own share of profits through self-assessment. The partnership itself is not a separate taxable entity — unlike a limited company, which pays corporation tax."},
  {id:303,m:3,t:"M3A",d:2,q:"What is the extent of a partner's personal liability for a standard partnership's debts?",o:["Limited to the amount of their initial capital contribution","Normally unlimited — they are personally liable for all partnership debts","Capped at the FSCS protection limit","Limited to their proportionate share of outstanding debts"],a:1,e:"In a standard (general) partnership, partners have normally unlimited personal liability for all the debts of the business. This is a fundamental risk distinguishing partnerships from limited companies, where liability is capped at the amount invested in shares."},
  {id:304,m:3,t:"M3A",d:2,q:"When a business incorporates as a limited company, how are its profits taxed?",o:["The shareholders pay income tax on their proportionate share of all profits","The company pays corporation tax; shareholder-employees pay PAYE income tax and Class 1 NICs on their salaries","The company is exempt from all tax in its first year of trading","The company pays VAT on all profits earned"],a:1,e:"Limited companies pay corporation tax on their profits. As shareholder-employees, directors also pay PAYE income tax and Class 1 NICs on their salaries. The company pays employer's NICs on earnings above the threshold."},
  {id:305,m:3,t:"M3A",d:2,q:"Under agency law, who does an IFA act as agent for when recommending an investment?",o:["The investment product provider","The IFA's employer firm","The client","Both the client and the product provider jointly"],a:2,e:"An IFA acts as agent for the client — the principal — not the product provider. This is crucial because the IFA's duty of care and loyalty is owed to the client, not to any provider whose products they may recommend."},
  {id:306,m:3,t:"M3B",d:1,q:"Under the Powers of Attorney Act 1971, when is an ordinary power of attorney automatically revoked?",o:["When the donor leaves the country for an extended period","On the death or mental incapacity of the donor","When the attorney resigns from the role","After five years, regardless of circumstances"],a:1,e:"An ordinary power of attorney is automatically revoked by the death or mental incapacity of the donor. This is precisely why lasting powers of attorney (LPAs) were introduced — they can continue to operate even after the donor loses mental capacity."},
  {id:307,m:3,t:"M3B",d:2,q:"Since October 2007, what has replaced enduring powers of attorney for new arrangements?",o:["A general power of attorney","A lasting power of attorney (LPA)","An ordinary power of attorney","A protective power of attorney"],a:1,e:"The Mental Capacity Act 2005 (in force 1 October 2007) introduced lasting powers of attorney. No new enduring powers of attorney can be set up since that date, though existing ones remain valid. An LPA must be registered with the Office of the Public Guardian before it can be used."},
  {id:308,m:3,t:"M3B",d:2,q:"A lasting power of attorney can cover which areas?",o:["Financial affairs only","Health and welfare only","Property and financial affairs, and/or health and welfare — as two separate types","Investment portfolios and pension arrangements only"],a:2,e:"There are two types of LPA: one covering property and financial affairs (can be used while the donor has capacity, with their consent), and one covering health and welfare (can only be used once the donor has lost capacity). Both must be registered with the Office of the Public Guardian."},
  {id:309,m:3,t:"M3C",d:2,q:"Owen dies intestate. His home is held as 'joint tenants' with his wife. What happens to the property?",o:["It is split equally between his wife and two adult children","It passes automatically to the surviving spouse by right of survivorship, outside the estate","It becomes part of the estate and is distributed under the intestacy rules","It must be sold and the proceeds divided under the intestacy rules"],a:1,e:"Property held as joint tenants passes automatically to the surviving joint tenant by right of survivorship on death. It falls entirely outside the estate and is not affected by intestacy rules or any will."},
  {id:310,m:3,t:"M3C",d:1,q:"For a will to be legally valid, which three conditions must all be met?",o:["It must be typed, notarised by a solicitor and registered with the Probate Registry","It must be in writing, signed by the testator, and witnessed by two independent people","It must be written in black ink, include all assets, and be witnessed by a solicitor","It must be dated, signed by the testator and countersigned by a family member"],a:1,e:"A valid will must: (1) be in writing; (2) be signed by the testator (the person making the will); and (3) have the testator's signature witnessed and attested by two independent witnesses. Solicitor involvement is advisable but is not a legal requirement."},
  {id:311,m:3,t:"M3C",d:2,q:"Who are 'legal personal representatives' in the context of estate administration?",o:["HMRC officials appointed to assess the estate for IHT","The collective term for executors (named in a will) and administrators (appointed when there is no will)","The solicitors instructed to carry out probate","Professional trustees appointed to manage trust assets"],a:1,e:"LPRs is the collective term covering both executors (named in the deceased's will) and administrators (next of kin appointed when someone dies intestate). Both are responsible for administering the deceased's estate."},
  {id:312,m:3,t:"M3D",d:2,q:"What are the five essential features of a valid contract?",o:["Offer, acceptance, witnesses, consideration and a written agreement","Offer, acceptance, capacity, consideration and intention to create a legally binding contract","Offer, acceptance, insurable interest, good faith and a proposal form","Offer, acceptance, authority, consideration and signatures from both parties"],a:1,e:"The five essential features are: offer, acceptance (of every term without alteration), capacity (both parties have the power to contract), consideration (both parties give something of value) and intention to create a legally binding contract."},
  {id:313,m:3,t:"M3D",d:2,q:"What does the Consumer Insurance (Disclosure and Representations) Act 2012 require of consumers when applying for insurance?",o:["They must disclose all material facts whether asked or not","They only need to answer the insurer's questions correctly and without negligence","They have no disclosure obligation whatsoever","They must provide a complete medical history regardless of the questions asked"],a:1,e:"The 2012 Act replaced the consumer duty of utmost good faith. Consumers now only need to answer questions asked by the insurer correctly and without negligence. The Insurance Act 2015 still requires commercial customers to make a fair presentation of the risk."},
  {id:314,m:3,t:"M3D",d:2,q:"What does 'insurable interest' require in a life assurance contract?",o:["The policyholder must demonstrate a general interest in purchasing insurance","The proposer must have a legal or equitable financial interest in the life assured","The insurer must be satisfied the risk represents good commercial value","Both parties must have prior knowledge of insurance products"],a:1,e:"Insurable interest requires that the proposer has a legal or equitable financial interest in the life assured. This prevents insurance from being used as a speculative instrument. Spouses and civil partners have unlimited insurable interest in each other's lives."},
  {id:315,m:3,t:"M3E",d:2,q:"Under a joint tenancy, what happens to a co-owner's share when they die?",o:["It passes to the other joint tenants automatically by right of survivorship","It is distributed according to the deceased's will","It becomes part of the deceased's estate and passes under intestacy rules","It must be valued and sold to repay outstanding debts"],a:0,e:"With joint tenancy, each party jointly owns the whole property. On death the surviving joint tenant inherits automatically by right of survivorship — probate is not needed. This is why joint tenancy is typically used by married couples and civil partners."},
  {id:316,m:3,t:"M3E",d:2,q:"What are the three key parties in a trust arrangement?",o:["Grantor, recipient and guardian","Settlor, trustee and beneficiary","Donor, administrator and claimant","Principal, agent and third party"],a:1,e:"The three parties are: the settlor (who gifts property into the trust), the trustee(s) (who receive legal title and hold the property on behalf of others) and the beneficiary (who holds a beneficial interest in the trust property)."},
  {id:317,m:3,t:"M3E",d:3,q:"What are the three certainties required for a valid trust?",o:["Certainty of intention, certainty of subject matter and certainty of objects","Certainty of value, certainty of duration and certainty of trustees","Certainty of motive, certainty of beneficiaries and certainty of legal structure","Certainty of income, certainty of capital and certainty of distribution"],a:0,e:"From Knight v Knight, the three certainties are: (1) intention — the words must clearly show a trust is intended; (2) subject matter — the trust property must be specified; (3) objects — the beneficiaries must be certain or identifiable. If any one certainty is absent, the trust fails."},
  {id:318,m:3,t:"M3E",d:2,q:"Which type of trust is used in most life office standard trust forms because it allows trustees to vary beneficiaries as circumstances change?",o:["Bare trust","Interest in possession trust","Power of appointment trust","Statutory trust"],a:2,e:"A power of appointment trust gives trustees the power to vary beneficiaries — handling births and deaths within a family in a way a fixed-interest trust cannot. Maximum flexibility is retained by making appointments revocable. Life offices use this as their standard trust form."},
  {id:319,m:3,t:"M3F",d:2,q:"When a bankruptcy order is made against an individual, who initially takes control of their property?",o:["The Trustee in Bankruptcy","The Official Receiver","The creditor who petitioned for bankruptcy","The individual's solicitor, pending appointment of a trustee"],a:1,e:"When a bankruptcy order is made, the Official Receiver initially takes control of the debtor's property. An insolvency practitioner may subsequently be appointed as Trustee in Bankruptcy to realise and distribute the estate under the Insolvency Act 1986."},
  {id:320,m:3,t:"M3F",d:2,q:"What is 'administration' in the context of corporate insolvency?",o:["The process of distributing remaining assets to shareholders","Where an administrator is appointed to run the company with the aim of rescuing it as a going concern","The winding up of a company and its removal from the Register of Companies","The appointment of a liquidator to sell all company assets"],a:1,e:"Administration is where an administrator is appointed to manage the company's affairs, aiming primarily to rescue the business as a going concern. It is an alternative to immediate liquidation and preserves the possibility of business survival."},
  // ── MODULE 4: The Regulation of Financial Services ──
  {id:401,m:4,t:"M4A",d:1,q:"What is the primary objective of the Financial Policy Committee (FPC)?",o:["To regulate the conduct of individual financial advisers","To identify, monitor and take action to reduce systemic risks and enhance the resilience of the UK financial system","To supervise individual banks for day-to-day prudential soundness","To set interest rates to achieve the Government's 2% inflation target"],a:1,e:"The FPC's primary objective is to identify, monitor and act to remove or reduce systemic risks, protecting and enhancing the resilience of the UK financial system as a whole. Its secondary objective is to support the Government's economic policy."},
  {id:402,m:4,t:"M4A",d:1,q:"The PRA is responsible for supervising which types of institution?",o:["All FCA-authorised financial advisers and IFA firms","Banks, building societies, credit unions, insurers and major investment firms","Claims management companies and consumer credit providers","The Financial Ombudsman Service and FSCS"],a:1,e:"The PRA is responsible for the prudential regulation and supervision of banks, building societies, credit unions, insurers and major investment firms. Its primary objective is to promote their safety and soundness."},
  {id:403,m:4,t:"M4A",d:2,q:"What was the main objective of the Financial Services and Markets Act 2000 (FSMA)?",o:["To introduce statutory regulation of financial services for the very first time","To extend regulation specifically to mortgage advice","To bring regulation of all parts of the financial services industry under one unified regulatory system","To create the FCA and PRA as separate bodies"],a:2,e:"FSMA 2000 brought regulation of all parts of the financial services industry under one regulatory system, consolidating the multiple separate regimes that had previously operated in parallel across different sectors."},
  {id:404,m:4,t:"M4B",d:2,q:"Following Brexit, how does EU law continue to affect UK financial services regulation?",o:["EU law no longer applies in any form","EU Regulations and Decisions were 'onshored' into UK domestic law via the European Union (Withdrawal) Act 2018","The FCA must obtain EU approval before making significant new rules","UK firms retained their EU passporting rights as part of the Trade and Cooperation Agreement"],a:1,e:"Under the EU (Withdrawal) Act 2018, EU regulations and decisions were written into UK domestic law — 'onshored'. However, passporting rights — which allowed UK firms to operate freely across the EU — were lost."},
  {id:405,m:4,t:"M4B",d:2,q:"Which EU directive aims to improve the functioning of financial markets and strengthen investor protection?",o:["The Insurance Distribution Directive (IDD)","The Markets in Financial Instruments Directive II (MiFID II)","The Fifth Money Laundering Directive","The General Data Protection Regulation (GDPR)"],a:1,e:"MiFID II aims to improve the functioning of financial markets and strengthen investor protection — covering cost disclosure for retail recommendations, best execution requirements and product governance."},
  {id:406,m:4,t:"M4C",d:1,q:"What is the primary duty of the Information Commissioner's Office (ICO)?",o:["To regulate financial advertising and marketing materials","To oversee data protection regulations and enforce compliance with their principles","To investigate anti-competitive behaviour in financial markets","To manage the national fraud intelligence database"],a:1,e:"The ICO's main duty is to oversee the working of data protection regulations (UK GDPR and Data Protection Act 2018) and to enforce compliance. All businesses handling personal data must register with the ICO's Public Register of Data Controllers."},
  {id:407,m:4,t:"M4C",d:2,q:"Which of the following powers does the Pensions Regulator (TPR) have?",o:["Imposing unlimited fines on pension trustees for breach of the law","Winding up pension schemes to protect their members","Prohibiting individuals from acting as pension trustees","All of the above"],a:3,e:"The Pensions Regulator has wide powers including: imposing unlimited fines on trustees for breaches of the law, winding up a pension scheme to protect its members, and prohibiting a person from acting as a trustee."},
  {id:408,m:4,t:"M4C",d:2,q:"What is the primary role of the Competition and Markets Authority (CMA) in financial services?",o:["Directly regulating individual financial advisers' conduct","Investigating mergers and markets to ensure competition is not reduced to the detriment of consumers","Setting maximum prices for regulated financial products","Approving all new financial products before they are made available"],a:1,e:"The CMA investigates mergers to ensure they do not significantly reduce competition, and investigates markets where competition may not be working well. It can impose legally binding remedies and refer markets for in-depth investigation."},
  // ── MODULE 5: The FCA and the FCA Handbook ──
  {id:501,m:5,t:"M5A",d:1,q:"Under the Financial Services Act 2012, how many operational objectives does the FCA have?",o:["Two — consumer protection and market integrity","Three — consumer protection, market integrity and promoting competition","Four — consumer protection, market integrity, competition and international competitiveness","Five — including reducing financial crime and sustainable growth"],a:1,e:"The FCA has three operational objectives: (1) securing appropriate protection for consumers, (2) protecting and enhancing the integrity of the UK financial system, and (3) promoting effective competition in the interests of consumers."},
  {id:502,m:5,t:"M5A",d:2,q:"The FCA's regulatory principle of 'proportionality' means which of the following?",o:["All regulated firms must be treated identically regardless of size or risk","Restrictions the FCA imposes on the industry must be proportionate to the expected benefits","Smaller firms pay proportionally lower FCA fees","The FCA adjusts its regulatory objectives based on economic conditions"],a:1,e:"Proportionality means the FCA can impose restrictions on firms, but these must be proportionate to the expected benefits they produce. The regulator cannot impose disproportionate burdens on industry relative to the consumer protection or market integrity benefits achieved."},
  {id:503,m:5,t:"M5B",d:1,q:"Consumer Duty is the FCA's which numbered Principle for Businesses?",o:["Principle 6","Principle 9","Principle 11","Principle 12"],a:3,e:"Consumer Duty is the FCA's twelfth and most recent Principle: 'A firm must act to deliver good outcomes for retail customers.' It overrules Principles 6 and 7 for all retail clients, setting a higher standard of care."},
  {id:504,m:5,t:"M5B",d:2,q:"Which three rules does the Consumer Duty require all firms to follow?",o:["Verify customer identity, assess suitability and disclose conflicts of interest","Act in good faith towards retail customers, avoid causing foreseeable harm, and enable customers to pursue their financial objectives","Conduct annual reviews, provide key facts documents and offer cooling-off periods","Report all complaints, maintain adequate capital and conduct annual staff training"],a:1,e:"The three cross-cutting rules under Consumer Duty are: (1) act in good faith towards retail customers, (2) avoid causing foreseeable harm to retail customers, and (3) enable and support retail customers to pursue their financial objectives."},
  {id:505,m:5,t:"M5B",d:2,q:"Which of the following is NOT one of the four Consumer Duty outcomes?",o:["Products and services","Price and value","Customer understanding","Adviser independence as the default standard of service"],a:3,e:"The four Consumer Duty outcomes are: (1) products and services, (2) price and value, (3) customer understanding, and (4) customer support. Adviser independence is a separate COBS requirement and is not one of the four Duty outcomes."},
  {id:506,m:5,t:"M5D",d:2,q:"What does PRIN contain within the FCA Handbook?",o:["Rules on capital requirements for investment firms","The main regulatory obligations of all regulated firms — the FCA's 12 Principles for Businesses","Rules for handling client complaints and compensation claims","The minimum threshold conditions a firm must meet to obtain and retain FCA authorisation"],a:1,e:"PRIN contains the Principles for Businesses — a general statement of the main regulatory obligations placed on all regulated firms. Breach of a Principle can result in disciplinary sanctions. PRIN applies to all authorised firms."},
  {id:507,m:5,t:"M5D",d:2,q:"What is the purpose of COND within the FCA Handbook?",o:["It sets out conduct rules for all approved persons","It contains the minimum standards a firm must satisfy to become and remain authorised by the FCA","It describes how the FCA supervises firms and what must be reported","It sets out the Principles for Businesses and regulatory obligations of firms"],a:1,e:"COND contains the Threshold Conditions — the minimum standards a firm must satisfy to obtain and retain FCA authorisation. If a firm fails to meet these conditions, the FCA can withdraw its authorisation."},
  {id:508,m:5,t:"M5E",d:2,q:"A client complaint is received. By when must the firm issue a final response?",o:["Within 5 business days of receipt","Within 4 weeks from date of acknowledgement","Within 8 weeks from the date of written acknowledgement","Within 3 months from the date the complaint was first received"],a:2,e:"The FCA requires a final (or other appropriate) response within 8 weeks from the date of written acknowledgement. If the matter is resolved within 3 business days, only a summary resolution document is required."},
  {id:509,m:5,t:"M5E",d:2,q:"What is the maximum binding award the Financial Ombudsman Service can make against a respondent firm?",o:["£85,000","£250,000","£445,000","£1,000,000"],a:2,e:"The FOS can make a maximum binding award of £445,000 against a respondent firm. Awards above this limit are not binding, though the FOS can recommend higher amounts. The service is funded primarily through case fees charged to firms."},
  {id:510,m:5,t:"M5E",d:2,q:"What FSCS compensation limit applies to deposits such as bank accounts?",o:["£50,000 per person per authorised firm","£85,000 per person per authorised firm","£150,000 per person per authorised firm","Unlimited protection with 100% coverage"],a:1,e:"The FSCS protects deposits at 100% of the first £85,000 per person per authorised firm. Temporary high balances of up to £1 million (e.g. from property sales or life events) are protected for 6 months from the date of deposit."},
  {id:511,m:5,t:"M5E",d:2,q:"Under the FSCS, what level of protection applies to long-term insurance such as life assurance?",o:["100% up to £85,000 per person per firm","90% with no upper limit","100% (product providers) or 90% (intermediaries) with no upper limit","50% up to £85,000 per person per firm"],a:2,e:"For long-term insurance business: product providers are covered at 100% with no upper limit; intermediaries at 90% (100% in certain cases) with no upper limit. This is considerably more generous than the £85,000 limit applying to deposits."},
  // ── MODULE 6: AML, Data Protection and Complaints ──
  {id:601,m:6,t:"M6A",d:1,q:"What are the three stages of money laundering in the correct order?",o:["Integration, placement, layering","Placement, layering, integration","Layering, integration, placement","Concealment, transfer, integration"],a:1,e:"The three stages are: (1) Placement — introducing illicit cash into the financial system; (2) Layering — a series of transactions designed to conceal the origin; (3) Integration — converting the laundered money into apparently legitimate proceeds."},
  {id:602,m:6,t:"M6A",d:1,q:"Which Act contains the main money laundering criminal offences in the UK?",o:["The Money Laundering Regulations 2017","The Proceeds of Crime Act 2002","The Financial Services and Markets Act 2000","The Terrorism Act 2000"],a:1,e:"The Proceeds of Crime Act 2002 created the main criminal offences: concealing, disguising, converting or transferring criminal property; acquiring, possessing or using criminal property; and failing to disclose knowledge or suspicion of money laundering."},
  {id:603,m:6,t:"M6B",d:2,q:"Which type of customer due diligence applies when a customer is a politically exposed person (PEP)?",o:["Simplified due diligence (SDD) as they are a public figure","Standard customer due diligence","Enhanced customer due diligence","No due diligence is required for PEPs as they are publicly identifiable"],a:2,e:"Enhanced CDD is required for higher-risk situations including non-face-to-face transactions, politically exposed persons and customers from high-risk third countries. Additional verification steps beyond standard CDD are needed."},
  {id:604,m:6,t:"M6B",d:1,q:"Which document provides the strongest primary evidence of identity for individual client verification?",o:["A utility bill dated within the last 3 months","A bank statement from the past 6 months","A current passport","A birth certificate"],a:2,e:"A current passport is the strongest primary document for verifying individual identity. A photocard driving licence (full or provisional) is also strong primary evidence. Utility bills and bank statements are used as secondary evidence of address."},
  {id:605,m:6,t:"M6B",d:2,q:"Within what period must client verification records be retained under the Money Laundering Regulations?",o:["1 year","3 years","5 years","10 years"],a:2,e:"Records of client verification must be retained for 5 years — either 5 years after the end of the customer relationship or 5 years from completion of the transaction, whichever is later."},
  {id:606,m:6,t:"M6B",d:3,q:"A client's finances improve dramatically and they cannot explain where the money came from. What should the MLRO do?",o:["Ask the client for further documents and continue the relationship normally","Consider all available information and decide whether to submit a Suspicious Activity Report to the National Crime Agency","Report directly to the FCA within 24 hours","Immediately freeze the client's account without investigation"],a:1,e:"Sudden, unexplained improvement in a client's finances is a classic suspicious activity indicator. The MLRO must consider all relevant information and decide whether to submit a SAR to the NCA. Crucially, tipping off the subject is a criminal offence."},
  {id:607,m:6,t:"M6C",d:2,q:"The UK GDPR requires data users to abide by how many data protection principles?",o:["Five","Six","Seven","Eight"],a:2,e:"The UK GDPR requires compliance with seven data protection principles: lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and accountability."},
  {id:608,m:6,t:"M6C",d:2,q:"Under FCA guidance on the use of AI, which concern is most critical when deploying a client-facing AI chatbot?",o:["Using natural, accessible language and avoiding technical jargon","Not informing clients when AI is used for automated decisions that affect them","Automatically referring older clients to human advisers","Having a named senior manager listed as responsible for the system"],a:1,e:"The FCA's AI guidance — aligned with Consumer Duty — emphasises transparency. Firms must clearly communicate how AI is used and must inform clients when automated decision-making affects them. Failure to disclose violates both transparency principles and Consumer Duty requirements."},
  // ── MODULE 7: Types of Advisers and the Advice Process ──
  {id:701,m:7,t:"M7A",d:1,q:"Under COBS rules, which client category receives the greatest level of regulatory protection?",o:["Professional clients","Eligible counterparties","Retail clients","Institutional investors"],a:2,e:"Retail clients receive the greatest protection under COBS rules. They are defined negatively — a client who is not a professional client or eligible counterparty. All detailed conduct, disclosure and suitability rules apply in full to retail client relationships."},
  {id:702,m:7,t:"M7A",d:2,q:"For advice to qualify as 'independent', what must a firm assess?",o:["Products from at least three different providers in each category","A sufficient range of products diverse in type and issuer to meet the client's objectives — generally the whole of the market for retail clients","Only those products where no ongoing commission is paid","A minimum of five regulated products before making any recommendation"],a:1,e:"Independent advice requires the assessment of a sufficient range of relevant products diverse in terms of type and issuer. For retail investment clients in the UK, this generally means the ability to advise across all types of financial instruments across the whole market."},
  {id:703,m:7,t:"M7A",d:2,q:"Claire is a company representative who can only sell Apex Life products. A retail client needs an investment Claire cannot find in her range. What should she do?",o:["Recommend the nearest alternative from her range and note the limitation","Explain the situation to the client and not make a recommendation","Seek one-off permission from her employer to use another provider","Ask the client to reconsider their needs to fit an available product"],a:1,e:"A restricted adviser who cannot find a suitable product from their range should explain the situation and not make a recommendation. Recommending an unsuitable product simply because nothing better is available in the firm's range would breach the suitability rules."},
  {id:704,m:7,t:"M7B",d:1,q:"What is an execution-only sale?",o:["A sale where the adviser recommends a product and the client decides whether to proceed","A sale where the investor states exactly what they want and does not ask for or receive any advice","A sale conducted exclusively through an online platform with no human involvement","A sale automatically executed by algorithmic trading systems"],a:1,e:"An execution-only sale means the investor states exactly what they want — no advice is sought or received. The firm simply executes the transaction. This is common in stocks and shares but rare in life assurance and pensions."},
  {id:705,m:7,t:"M7B",d:2,q:"For the stakeholder medium-term investment product, what is the maximum initial minimum investment and the maximum annual management charge?",o:["£50 minimum; 2% AMC","£20 minimum; 1.5% AMC reducing to 1% after 10 years","£10 minimum; 1% AMC flat","£100 minimum; 1.5% AMC flat"],a:1,e:"The stakeholder medium-term investment product must have a minimum investment of no more than £20. Providers can charge a maximum AMC of 1.5% per year, reducing to 1% after ten years. These caps apply to both the medium-term product and the pension element of the range."},
  {id:706,m:7,t:"M7C",d:2,q:"On first contact with a retail client prior to advice on packaged products, what information must the adviser provide?",o:["Only their name and a standardised key facts document","The firm's full name and address, means of communication, whether advice is independent or restricted, and details of the services to be provided","Qualifications, professional indemnity details and charging structure only","A key facts document and cancellation rights notice only"],a:1,e:"Before fact-finding begins, on first contact the adviser must provide: the firm's full name and address, means of communication, regulatory status, whether advice is independent or restricted (and the nature of any restriction), details of services, how the firm is paid, and FSCS coverage."},
  {id:707,m:7,t:"M7C",d:2,q:"Under COBS know your customer (KYC) rules, an adviser must collect which types of information?",o:["Name, address and date of birth only","Personal circumstances, financial situation, knowledge and experience, investment objectives, risk tolerance and capacity for loss","Employment details and salary information only","Criminal record, credit history and existing debts"],a:1,e:"KYC rules require collection of: personal circumstances including any vulnerability characteristics, income and expenditure, existing financial provision, needs and priorities, taxation situation, investment objectives, risk tolerance and capacity for loss."},
  {id:708,m:7,t:"M7C",d:2,q:"When must a suitability report be issued to a retail client?",o:["Only when the recommended product costs more than £10,000","For any personal recommendation relating to regulated products including pension contracts, insurance-based investments and regulated collective investment schemes","Only when the client is over 60","Only for pension transfer recommendations"],a:1,e:"A suitability report must be issued when recommending a retail client to buy or sell units in a collective investment scheme, effect an insurance-based investment product, make changes to a pension contract, take pension income withdrawals, enter a pension opt-out, or take up a life policy following a personal recommendation."},
  {id:709,m:7,t:"M7C",d:3,q:"An insistent client instructs their adviser to carry out a transaction the adviser considers unsuitable. What rule applies?",o:["The adviser must refuse to arrange the transaction under any circumstances","The adviser must arrange the transaction as instructed but must record their disagreement and the client's insistence","The adviser can choose at their discretion whether to proceed","The client must sign a formal legal waiver before the adviser can proceed"],a:1,e:"Where a client insists on proceeding with a transaction the adviser considers unsuitable, the adviser must arrange the transaction as instructed. However, the adviser must clearly record the advice given, their assessment that it is unsuitable, and the client's instruction to proceed regardless."},
  {id:710,m:7,t:"M7C",d:2,q:"What is the standard post-sale cancellation period for most packaged retail investment products?",o:["7 days from date of acceptance","14 to 30 days from receipt of the cancellation notice","3 months from date of sale","No cancellation right exists for investment products"],a:1,e:"For most retail investment products, the post-sale right to cancel is 14 to 30 days from the date the cancellation notice is received by the client. Pre-sale withdrawal rights are typically 7 to 14 days. Cancellation rights do not generally apply to collective investments where prices depend on market fluctuations."},
  {id:711,m:7,t:"M7D",d:2,q:"MiFID II requires firms offering ongoing suitability assessment services to conduct this review at a minimum of what frequency?",o:["Every 6 months","Annually","Every 2 years","Every 3 years"],a:1,e:"Firms offering a periodic suitability assessment for MiFID financial instruments and structured deposits must conduct the assessment at least annually. This ensures recommendations remain suitable as clients' circumstances change."},
  // ── MODULE 8: Identifying a Client's Financial Needs ──
  {id:801,m:8,t:"M8A",d:1,q:"What is the primary purpose of the fact-find in the financial advice process?",o:["To comply with FCA anti-money laundering record-keeping requirements","To ensure the client's needs and aspirations are fully explored, quantified and prioritised before any recommendation is made","To determine the maximum level of charges the adviser can apply","To establish whether the client is eligible for Government benefits or tax reliefs"],a:1,e:"The fact-find ensures the client's needs and aspirations — such as producing or protecting income and capital — are fully explored, discussed, quantified and prioritised. It enables 'what happens if...?' questions that uncover all financial vulnerabilities."},
  {id:802,m:8,t:"M8A",d:1,q:"Why is a client's address recorded in the basic details section of the fact-find?",o:["For marketing and promotional purposes","To determine residence status for tax purposes and provide context essential for accurate financial planning","To verify identity under AML regulations exclusively","To ensure correspondence is delivered correctly"],a:1,e:"Address and date of birth help ascertain the client's tax liabilities including UK residence status, and alongside health information and relationship status, provide context essential for personalised financial planning."},
  {id:803,m:8,t:"M8A",d:2,q:"What does the employment section of the fact-find primarily help the adviser to establish?",o:["The client's career ambitions and expected future promotions","Level and security of income, existing pension arrangements, and employer-provided life, sickness and medical cover","The client's P60 details and current tax code","The client's job satisfaction and likelihood of changing employer"],a:1,e:"Employment details reveal: the level and security of earned income, current and previous pension arrangements, and the extent of employer-provided benefits — enabling identification of any shortfall that private insurance needs to address."},
  {id:804,m:8,t:"M8A",d:2,q:"Why does the fact-find include a section on the client's other professional advisers?",o:["To identify potential referral opportunities","To coordinate recommendations with other professionals and ensure advice from different quarters does not conflict","To document competitors working with the same client","FCA rules require all professional contacts to be disclosed formally on file"],a:1,e:"Knowing the client's other professional advisers — solicitors, accountants, other IFAs — allows the financial adviser to coordinate recommendations, ensuring all advice is complementary and avoiding contradictions between financial planning, tax planning, will drafting and other services."},
  {id:805,m:8,t:"M8B",d:1,q:"Why must existing financial provision be explored in depth during the fact-find?",o:["To record the client's dissatisfaction with current arrangements","To identify specific needs, avoid over-insuring the client, and ensure new recommendations build on rather than duplicate existing cover","To calculate the maximum commission payable","To determine whether the client has been mis-sold any products previously"],a:1,e:"Existing provision — life and health insurance, pensions, savings, expected inheritances — must be recorded so the adviser can prevent over-insuring the client and ensure new recommendations complement what is already in place."},
  {id:806,m:8,t:"M8B",d:1,q:"In a financial planning context, what is a 'financial dependant'?",o:["Anyone who lives in the same household as the client","Someone who needs protecting against the financial consequences of the client dying or becoming seriously ill","Any beneficiary named in the client's will","Someone who relies on the client for emotional rather than financial support"],a:1,e:"A financial dependant is someone who needs protecting against the financial consequences of someone else being ill or dying — typically a spouse or civil partner, dependent children, or in some cases elderly parents."},
  {id:807,m:8,t:"M8B",d:2,q:"If a client's existing investments consist entirely of bank and building society deposits, what might this suggest about their risk profile?",o:["The client has little or no spare capital","The client is an adventurous investor","The client has a cautious attitude to risk","The client is unfamiliar with the financial planning process"],a:2,e:"If a client's existing investments are entirely in cash deposits — the lowest-risk asset class — this suggests a cautious attitude to risk. The adviser should note this as initial evidence but must still conduct formal risk profiling to confirm."},
  {id:808,m:8,t:"M8B",d:2,q:"The liabilities section of the fact-find focuses primarily on which of the following?",o:["Credit cards and hire purchase agreements exclusively","The mortgage — checking it is protected in the event of death or loss of income, assessing the interest rate, and prioritising high-cost short-term debt repayment","Outstanding student loans and unpaid tax liabilities","The client's pension fund deficit"],a:1,e:"The liabilities section focuses principally on the mortgage: is it covered if the client dies or cannot work? Is the rate competitive? Should it be restructured? It also addresses high-cost short-term debt, which should be prioritised for repayment."},
  // ── MODULE 9: Senior Management and Conduct Rules ──
  {id:901,m:9,t:"M9A",d:1,q:"The FCA has how many Principles for Businesses, and which is the most recently added?",o:["10 Principles; Principle 10 is most recent","11 Principles; Principle 11 is most recent","12 Principles; Principle 12 (Consumer Duty) is most recent","9 Principles; no new Principle has been added recently"],a:2,e:"The FCA has 12 Principles for Businesses. Principle 12 — Consumer Duty — is the most recent: 'A firm must act to deliver good outcomes for retail customers.' It overrules Principles 6 and 7 for retail clients and sets a higher standard of care."},
  {id:902,m:9,t:"M9A",d:2,q:"Consumer Duty (Principle 12) overrules which two FCA Principles specifically for retail clients?",o:["Principles 1 and 2 (Integrity and Skill, Care and Diligence)","Principles 4 and 5 (Financial Prudence and Market Conduct)","Principles 6 and 7 (Customers' Interests and Communications with Clients)","Principles 8 and 9 (Conflicts of Interest and Customers: Relationships of Trust)"],a:2,e:"Principle 12 overrules Principle 6 ('a firm must pay due regard to the interests of its customers and treat them fairly') and Principle 7 ('communicate information in a way which is fair and not misleading') for all retail clients."},
  {id:903,m:9,t:"M9B",d:1,q:"SM&CR stands for which of the following?",o:["Senior Management and Compliance Regime","Senior Managers and Certification Regime","Supervision, Monitoring and Conduct Reporting","Standards Management and Conduct Requirements"],a:1,e:"SM&CR stands for Senior Managers and Certification Regime. It replaced the Approved Persons Regime for most regulated firms, placing clear documented responsibilities on named senior managers and requiring firms — not the regulator — to certify that certain staff are fit and proper."},
  {id:904,m:9,t:"M9B",d:2,q:"Under SM&CR, what are the three categories of senior management functions?",o:["Executive, advisory and administrative functions","Governing functions, required functions and systems and controls functions","Regulated, certified and approved functions","Primary, secondary and ancillary functions"],a:1,e:"Senior management functions are divided into: Governing functions (CEO, executive directors, committee chairs etc.), Required functions (compliance oversight, MLRO, overall responsibility) and Systems and controls functions (chief risk officer, head of internal audit, chief operations officer)."},
  {id:905,m:9,t:"M9B",d:2,q:"Under SM&CR, an individual can cover for a senior manager without FCA pre-approval for a maximum of how long?",o:["4 weeks in any 12-month period","8 weeks in any 12-month period","12 weeks in any 12-month period","6 months in any 12-month period"],a:2,e:"An individual can cover for a senior manager for up to 12 weeks in any 12-month period without requiring FCA pre-approval, provided the absence is temporary or reasonably unforeseen. Once it becomes clear the cover will exceed 12 weeks, the firm must immediately apply for approval."},
  {id:906,m:9,t:"M9B",d:2,q:"What is a 'Statement of Responsibilities' under SM&CR?",o:["A record of all regulatory complaints received by a senior manager","A document setting out the specific areas for which a senior manager is personally accountable","An annual self-assessment of a senior manager's performance submitted to the FCA","A firm's register of all certified and approved individuals"],a:1,e:"Every senior manager must have a Statement of Responsibilities setting out clearly the areas for which they are personally accountable. These integrate into the firm's Responsibilities Map, which shows how all senior managers' responsibilities fit together."},
  {id:907,m:9,t:"M9C",d:2,q:"The Fit and Proper Test (FIT) assesses individuals against which three criteria?",o:["Qualifications, years of experience and salary level","Honesty, integrity and reputation; competence and capability; and financial soundness","Age, employment history and educational background","Criminal record, credit score and regulatory enforcement history only"],a:1,e:"FIT assesses three criteria: (1) honesty, integrity and reputation — including past conduct, civil and criminal proceedings and employment record; (2) competence and capability — meeting FCA training and competence requirements; (3) financial soundness — current and past financial status."},
  {id:908,m:9,t:"M9C",d:2,q:"Under SM&CR, who is responsible for assessing and certifying individuals in certified functions as fit and proper?",o:["The FCA assesses all individuals including certified roles","The firm — not the FCA — for assessing and certifying its own certified individuals annually","The PRA assesses all certified roles within dual-regulated firms","The individual's professional body conducts the assessment"],a:1,e:"This is a fundamental shift from the Approved Persons Regime. The FCA pre-approves senior managers. For certified roles, the firm — not the regulator — is responsible for assessing and certifying individuals as fit and proper, and must re-assess annually."},
  {id:909,m:9,t:"M9C",d:2,q:"The Conduct Rules (COCON) apply to which staff within a regulated firm?",o:["Senior managers only","Certified individuals only","All conduct rules staff — not just senior managers or certified individuals","Only customer-facing staff in retail activities"],a:2,e:"COCON applies to all conduct rules staff — a broad category encompassing senior managers, certified individuals and other relevant staff. FSMA requires firms to train all affected staff on the conduct rules and how they apply to their specific roles."},
  {id:910,m:9,t:"M9C",d:2,q:"The primary responsibility for managing conflicts of interest within a regulated firm rests with whom?",o:["The firm's investment advisers, as they are closest to client transactions","The compliance officer, as conflicts management is a compliance function","Senior management, who must implement policies and procedures to manage conflicts effectively","The FCA directly, through its supervision of regulated firms"],a:2,e:"Senior management is responsible for implementing the arrangements, policies and procedures needed to manage conflicts of interest effectively. They must put in place a formal conflicts policy and provide staff guidance on recognising potential issues."},
  // ── MODULE 10: Ethics in Financial Services ──
  {id:1001,m:10,t:"M10A",d:1,q:"One of the FCA's six TCF consumer outcomes states that products and services marketed in the retail market should be designed to do what?",o:["Always represent the lowest possible cost to consumers","Meet the needs of identified consumer groups and be targeted accordingly","Generate adequate returns for product providers","Be approved by an independent consumer panel before launch"],a:1,e:"One of the six TCF consumer outcomes is that products and services are designed to meet the needs of identified consumer groups and targeted accordingly. Products must not be designed primarily to exploit consumer inertia or maximise revenue from unsuitable customers."},
  {id:1002,m:10,t:"M10A",d:2,q:"Management information (MI) used to assess the fair treatment of customers should have which four qualities?",o:["Comprehensive, detailed, historical and benchmarked against competitors","Accurate, timely, relevant and consistent","Positive, forward-looking, quantitative and quarterly","Independent, externally audited, publicly published and FCA-approved"],a:1,e:"The FCA's guidance on MI states it should be accurate (factually correct and reliable), timely (available when needed for decision-making), relevant (focused on consumer outcomes) and consistent (comparable over time and across business areas)."},
  {id:1003,m:10,t:"M10A",d:2,q:"A firm bombards customers with information at the point of sale but provides no communication thereafter. Which TCF consumer outcome does this fail to meet?",o:["Products must meet the needs of identified consumer groups","Consumers are kept appropriately informed before, during and after the point of sale","Advice must be suitable and take account of client circumstances","Consumers face no unreasonable post-sale barriers to switching products"],a:1,e:"The third TCF consumer outcome states that consumers are provided with clear information and kept appropriately informed before, during and after the point of sale. Overwhelming customers at sale while ignoring them afterwards fails this outcome on both counts."},
  {id:1004,m:10,t:"M10B",d:2,q:"Leadership in embedding ethics relies on which five key steps?",o:["Setting targets, measuring outcomes, reporting results, disciplining poor behaviour and publishing league tables","Understanding the language of ethics, crafting an ethical vision, shaping how people make decisions, removing barriers to good decisions and setting a personal example","Publishing a values statement, filing it with the FCA, reviewing annually, training all staff and auditing outcomes","Hiring an ethics officer, establishing a whistleblowing line, running staff surveys, monitoring MI and briefing the board annually"],a:1,e:"The five leadership steps are: (1) understanding the language of ethics; (2) crafting a clear ethical vision; (3) shaping how people make decisions; (4) removing hurdles that prevent good decisions; and (5) setting a personal example in ethical decisions and behaviour."},
  {id:1005,m:10,t:"M10B",d:2,q:"In an ethical firm's oversight framework, what does 'governance' specifically determine?",o:["What risks the business is exposed to and what to do about them","How the firm is structured and managed, and how this influences decisions","Whether the business is conforming to its stated requirements","How progress against ethical objectives is monitored and reviewed"],a:1,e:"Governance determines how the firm is structured and managed — for example, whether ethics operates as a separate function, is aligned with compliance, or is integrated into human resources. Internal audit provides an independent check on governance, risk management and compliance together."},
  {id:1006,m:10,t:"M10C",d:2,q:"What fundamentally distinguishes an ethical firm from a merely compliant one?",o:["Ethical firms follow more rules than compliant firms and receive fewer regulatory sanctions","Ethical firms are values-led and act because it is the right thing to do, setting internal standards beyond the rules and applying their spirit rather than just their letter","Compliant firms consistently deliver better customer satisfaction","There is no meaningful practical difference — ethics and compliance are interchangeable in regulated financial services"],a:1,e:"A compliant firm does what is legally required — no more. An ethical firm is values-led: it goes beyond rules because it wants to do the right thing, not merely because it must. It sets internal standards above the minimum and applies the spirit, not just the letter, of rules."},
  {id:1007,m:10,t:"M10C",d:2,q:"An insurer offers new customers a significantly better rate than existing loyal customers receive. Is this ethical behaviour?",o:["Yes — it is standard commercial practice and fully compliant with FCA rules","No — while it may be compliant, an ethical firm aims to treat new and existing customers consistently and fairly","Yes — FCA rules only require fair treatment, and different pricing for new customers is permitted","No — it directly breaches FCA Principle 12 and would trigger an immediate enforcement investigation"],a:1,e:"Offering new customers materially better terms than loyal existing customers may be technically compliant, but it is not ethical behaviour. An ethical firm treats all customers consistently and fairly. This is a clear illustration of the difference between minimum regulatory compliance and genuinely values-led behaviour."},
  {id:1008,m:10,t:"M10A",d:2,q:"Why do outcomes — rather than processes — form the primary measure of whether an ethics policy is working?",o:["Because the FCA's framework is entirely outcome-based and process compliance is irrelevant","Because processes can be followed correctly while still producing poor outcomes — the ethical test is whether fair outcomes are actually delivered","Because outcomes are significantly easier to measure than compliance with processes","Because the FCA only penalises poor outcomes, never poor processes"],a:1,e:"A firm can follow every process correctly and still deliver poor outcomes for customers. The FCA therefore uses consumer outcomes as the primary measure of ethical behaviour. This is why the six TCF outcomes focus on what actually happens to the customer, not on whether the compliance manual is technically correct."},
  {id:1009,m:10,t:"M10A",d:1,q:"The first of the six TCF consumer outcomes establishes which overriding principle?",o:["Consumers always receive the most suitable advice in the regulated sector","The fair treatment of customers is central to the corporate culture of the firm","All products must perform as expected and contain no hidden charges","Consumers face no post-sale barriers to switching or changing their mind"],a:1,e:"The first TCF outcome sets the cultural foundation: consumers can be confident they are dealing with firms where the fair treatment of customers is central to the corporate culture. All other outcomes flow from this cultural commitment — it cannot be achieved through processes alone."},
  {id:1010,m:10,t:"M10C",d:3,q:"A firm designs an online opt-out process for ancillary insurance that requires customers to click through 12 screens before declining. Is this ethical?",o:["Yes — all relevant information is disclosed and customers are technically able to opt out","No — this is designed to exploit customer inertia and makes it unreasonably difficult to avoid unwanted charges","Yes — it is the customer's responsibility to read all screens carefully","No — it directly breaches FCA Principle 7 on clear and fair communication"],a:1,e:"Deliberately designing a process to exploit inertia is the opposite of ethical customer treatment. An ethical firm makes opting out as straightforward as opting in. This is a textbook case of the difference between technical compliance and values-led ethical behaviour."},
  // ─── NEW QUESTIONS (Batch 2 — 109 additional) ───────────────────────────
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 1: Operation of the UK Financial Services Industry (15 new → total 35)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1101,m:1,t:"M1A",d:1,q:"'Diversification' as a principal function of financial services allows investors to do what?",o:["Concentrate all capital in a single high-return asset","Spread risk across different asset classes, sectors and geographies to reduce overall portfolio volatility","Avoid paying capital gains tax on investment returns","Guarantee a minimum level of return regardless of market conditions"],a:1,e:"Diversification — one of the four principal functions — allows investors to spread risk across different asset classes, sectors and geographies. This reduces the impact of any single investment performing poorly on the overall portfolio."},
  {id:1102,m:1,t:"M1B",d:2,q:"What is the primary role of a payment and settlement system within financial services infrastructure?",o:["Providing investment advice to retail customers","Enabling the transfer of funds between parties and the settlement of financial transactions","Setting the official exchange rate for sterling","Underwriting insurance policies on behalf of Lloyd's syndicates"],a:1,e:"Payment and settlement systems are fundamental infrastructure that enable the transfer of funds between parties and the settlement of financial transactions. Without them, the day-to-day operation of banks, markets and firms would be impossible."},
  {id:1103,m:1,t:"M1C",d:2,q:"What distinguishes a building society from a bank?",o:["Building societies cannot offer mortgages","A building society is a mutual organisation owned by its members, whereas a bank is typically owned by shareholders","Building societies are not regulated by the FCA","Building societies can only accept deposits from commercial customers"],a:1,e:"Building societies are mutual organisations owned by their members (depositors and borrowers). Banks are typically shareholder-owned companies. Both are regulated by the FCA and PRA, but their ownership structures and governance differ fundamentally."},
  {id:1104,m:1,t:"M1D",d:2,q:"What is the key difference between a general insurer and a life assurer?",o:["General insurers are not regulated; life assurers are","General insurance covers short-term risks with annual renewable contracts; life assurance covers long-term risks often linked to death, illness or retirement","General insurers cannot invest their premium income","Life assurers only sell products through independent financial advisers"],a:1,e:"General insurance typically covers short-term, annually renewable risks (motor, home, travel). Life assurance covers long-term risks — death, critical illness, retirement income — with contracts that may run for decades."},
  {id:1105,m:1,t:"M1E",d:1,q:"What is the role of a platform in the distribution of financial products?",o:["Platforms directly manufacture and underwrite investment products","Platforms provide an online service enabling advisers and consumers to buy, hold and manage multiple investments in one place","Platforms set the prices of all investments traded on them","Platforms replace the need for FCA regulation of financial products"],a:1,e:"Investment platforms provide an online service where advisers and consumers can view, buy, hold, sell and manage investments from multiple providers in one place. They do not manufacture products — they are distributors."},
  {id:1106,m:1,t:"M1F",d:2,q:"What is the role of the Financial Policy Committee (FPC) within the Bank of England?",o:["Setting interest rates to achieve the 2% inflation target","Identifying, monitoring and taking action to reduce systemic risks to the UK financial system","Regulating the conduct of individual financial advisers","Managing the Government's debt issuance programme"],a:1,e:"The FPC sits within the Bank of England and is responsible for macroprudential regulation — identifying, monitoring and acting to remove or reduce systemic risks that threaten the resilience of the UK financial system as a whole."},
  {id:1107,m:1,t:"M1F",d:1,q:"Index-linked gilts differ from conventional gilts in what way?",o:["They pay no coupon at all","Their coupon and redemption value are adjusted in line with inflation","They can only be purchased by pension funds","They are issued by the FCA rather than the Government"],a:1,e:"Index-linked gilts have their coupon payments and redemption value adjusted in line with inflation (typically RPI). This provides investors with protection against rising prices, unlike conventional gilts which pay a fixed coupon."},
  {id:1108,m:1,t:"M1B",d:2,q:"The London Stock Exchange is an example of which type of market?",o:["An over-the-counter (OTC) market","An exchange-traded (on-exchange) market","A private placement market","A wholesale interbank market"],a:1,e:"The London Stock Exchange is an exchange-traded market where securities are bought and sold through a centralised trading system. This contrasts with OTC markets where trades are negotiated directly between two parties."},
  {id:1109,m:1,t:"M1C",d:1,q:"What distinguishes a credit union from a bank or building society?",o:["Credit unions are not regulated by any authority","Credit unions serve members who share a common bond, such as living in the same area or working for the same employer","Credit unions can only offer investment products, not savings accounts","Credit unions are owned by their shareholders and listed on the stock exchange"],a:1,e:"Credit unions are cooperative financial institutions that serve members sharing a common bond — such as living in the same area, working for the same employer, or belonging to the same association. They are regulated by the PRA and FCA."},
  {id:1110,m:1,t:"M1D",d:2,q:"Lloyd's of London operates as which of the following?",o:["A single insurance company writing all classes of business","A marketplace where syndicates of underwriters accept insurance risks","A government-backed reinsurance scheme","A mutual insurer owned by its policyholders"],a:1,e:"Lloyd's of London is not an insurance company itself — it is a marketplace where individual syndicates of underwriters accept insurance risks. Each syndicate is backed by members who provide the capital to underwrite business."},
  {id:1111,m:1,t:"M1F",d:2,q:"What is the primary purpose of the Prudential Regulation Authority (PRA)?",o:["To regulate the conduct of all financial advisers","To promote the safety and soundness of banks, building societies, credit unions, insurers and major investment firms","To set interest rates for the UK economy","To compensate consumers when regulated firms fail"],a:1,e:"The PRA's primary objective is to promote the safety and soundness of the firms it regulates — banks, building societies, credit unions, insurers and major investment firms. For insurers, it has an additional objective of contributing to policyholder protection."},
  {id:1112,m:1,t:"M1C",d:1,q:"An open-ended investment company (OEIC) differs from an investment trust in what fundamental way?",o:["OEICs are not regulated by the FCA","An OEIC creates and cancels shares to match demand; an investment trust has a fixed number of shares traded on the stock exchange","OEICs can only hold government bonds","Investment trusts are open-ended and OEICs are closed-ended"],a:1,e:"An OEIC is open-ended — it creates new shares when investors buy and cancels shares when they sell. An investment trust is closed-ended with a fixed number of shares traded on the stock exchange, meaning the share price can trade at a premium or discount to the underlying net asset value."},
  {id:1113,m:1,t:"M1F",d:2,q:"Consumer Price Index (CPI) is used by the Bank of England as the measure for which purpose?",o:["Calculating the annual increase in the State pension","Targeting inflation at 2% as set by the Government","Adjusting index-linked gilt coupon payments","Setting the minimum wage each year"],a:1,e:"The Government sets the Bank of England an inflation target of 2% measured by CPI. The Monetary Policy Committee adjusts interest rates to try to keep CPI inflation at this target level."},
  {id:1114,m:1,t:"M1E",d:2,q:"What is demutualisation?",o:["The process of converting a mutual organisation into a shareholder-owned company","The merger of two mutual building societies","The transfer of regulatory responsibility from the PRA to the FCA","A mutual insurer ceasing to write new business"],a:0,e:"Demutualisation is the process of converting a mutual organisation (such as a building society or mutual insurer) into a shareholder-owned company, typically through a stock market flotation. Members usually receive shares or cash as part of the conversion."},
  {id:1115,m:1,t:"M1F",d:1,q:"An ISA (Individual Savings Account) provides which tax advantage?",o:["Contributions are exempt from income tax","Investment growth and income within the ISA are free from income tax and capital gains tax","ISA withdrawals are taxed at a reduced rate of 10%","ISAs provide a tax deduction equal to twice the amount invested"],a:1,e:"ISAs provide tax-free investment growth — income and capital gains within the ISA wrapper are exempt from income tax and capital gains tax. This makes them one of the most important tax-efficient savings vehicles for retail investors."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 2: Consumers' Main Financial Needs (12 new → total 27)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1201,m:2,t:"M2A",d:1,q:"Why is managing debt considered a higher priority than protection in the financial planning hierarchy?",o:["Because debt repayment is more profitable for the adviser","Because high-cost debt reduces the resources available for all other financial planning including insurance premiums","Because the FCA prohibits protection advice until all debts are cleared","Because debt always carries a higher interest rate than investment returns"],a:1,e:"High-cost debt — particularly credit cards and unsecured loans — reduces disposable income and the resources available for insurance premiums, pension contributions and savings. Addressing this first creates the financial capacity for all subsequent planning."},
  {id:1202,m:2,t:"M2B",d:2,q:"What is 'income protection insurance' designed to provide?",o:["A lump sum on diagnosis of a critical illness","A replacement income if the policyholder is unable to work due to illness or injury","Cover for mortgage repayments only in the event of redundancy","Life cover that pays out on the death of the policyholder"],a:1,e:"Income protection insurance provides a replacement income — typically 50–65% of pre-incapacity earnings — if the policyholder cannot work due to illness or injury. It pays until the policyholder returns to work, reaches retirement age, or dies."},
  {id:1203,m:2,t:"M2B",d:1,q:"A single person aged 25 with no dependants and no mortgage has which protection priority?",o:["Life assurance is the most urgent need","Income protection to maintain their own standard of living if unable to work","Critical illness cover to fund mortgage repayments","Private medical insurance to avoid NHS waiting lists"],a:1,e:"With no dependants and no mortgage, life assurance is less urgent. The primary risk is loss of income through illness or injury — income protection ensures the individual can maintain their own standard of living if they cannot work."},
  {id:1204,m:2,t:"M2C",d:1,q:"What is the State pension age for someone born after 5 April 1960?",o:["65","66","67","68"],a:2,e:"For individuals born after 5 April 1960, the State pension age is 67. Legislation has also made provision for the State pension age to rise further to 68, with the timeline subject to periodic Government review."},
  {id:1205,m:2,t:"M2C",d:2,q:"What is 'auto-enrolment' in the context of workplace pensions?",o:["Employers must automatically enrol eligible workers into a qualifying workplace pension scheme","All employees must join the State pension scheme through their employer","Employers must provide a defined benefit pension to all staff","Employees are automatically enrolled into a personal pension with their bank"],a:0,e:"Auto-enrolment requires employers to automatically enrol eligible workers (aged 22 to State pension age, earning above the threshold) into a qualifying workplace pension scheme. Both employer and employee must make minimum contributions."},
  {id:1206,m:2,t:"M2C",d:2,q:"Under pension freedom rules introduced in 2015, what can a defined contribution pension holder do from age 55?",o:["Only purchase an annuity with the fund","Access the entire fund flexibly, subject to income tax on amounts exceeding the 25% tax-free lump sum","Withdraw only 25% of the fund as a tax-free lump sum with the remainder locked until age 65","Transfer the fund into a defined benefit scheme"],a:1,e:"Since April 2015, defined contribution pension holders aged 55 or over can access their entire fund flexibly. 25% can be taken tax-free; the remainder is taxed as income. Options include full withdrawal, drawdown, annuity purchase, or any combination."},
  {id:1207,m:2,t:"M2D",d:1,q:"What does 'attitude to risk' mean in an investment context?",o:["The maximum amount a client is prepared to invest","The client's emotional willingness to accept the possibility that their investments may fall in value","The probability of an investment producing a negative return","The client's total financial exposure across all asset classes"],a:1,e:"Attitude to risk is the client's emotional and psychological willingness to accept that their investments may fluctuate in value and could fall. It is subjective and must be assessed alongside capacity for loss, which is the objective financial ability to absorb losses."},
  {id:1208,m:2,t:"M2D",d:2,q:"What is 'capacity for loss' and how does it differ from attitude to risk?",o:["They are the same concept expressed differently","Capacity for loss is the client's objective financial ability to absorb investment losses without affecting their standard of living; attitude to risk is their emotional willingness to accept volatility","Capacity for loss applies only to pension investments; attitude to risk applies to all investments","Capacity for loss is determined by the FCA; attitude to risk is determined by the adviser"],a:1,e:"Capacity for loss is an objective financial measure — can the client absorb losses without it materially affecting their lifestyle or financial security? Attitude to risk is subjective — how do they feel about the possibility of loss? Both must be assessed separately during the advice process."},
  {id:1209,m:2,t:"M2A",d:1,q:"A client's 'net worth' or 'balance sheet' is calculated by which method?",o:["Annual income minus annual expenditure","Total assets minus total liabilities","Gross salary minus income tax","Investment portfolio value minus outstanding mortgage"],a:1,e:"A client's net worth is calculated as total assets (property, investments, savings, pensions, personal possessions) minus total liabilities (mortgage, loans, credit cards, other debts). This provides a snapshot of the client's overall financial position at a point in time."},
  {id:1210,m:2,t:"M2B",d:2,q:"What is the difference between 'term assurance' and 'whole of life' assurance?",o:["Term assurance pays out on survival; whole of life pays out on death","Term assurance provides cover for a specified period and pays out only if death occurs during that term; whole of life covers the policyholder for their entire lifetime","Term assurance is more expensive because it always pays out","Whole of life assurance can only be purchased through an employer scheme"],a:1,e:"Term assurance covers a fixed period — if the policyholder dies within the term, the sum assured is paid out; if they survive, nothing is paid. Whole of life assurance covers the policyholder for their entire lifetime and will always pay out on death, making it more expensive."},
  {id:1211,m:2,t:"M2D",d:2,q:"The annual ISA subscription limit for a stocks and shares ISA in the 2025/26 tax year is how much?",o:["£10,000","£15,000","£20,000","£25,000"],a:2,e:"The annual ISA subscription limit is £20,000 across all ISA types (cash, stocks and shares, innovative finance, Lifetime ISA). An individual can split this allowance between different ISA types but cannot exceed the total £20,000 limit in a single tax year."},
  {id:1212,m:2,t:"M2D",d:2,q:"The nil rate band for inheritance tax purposes is currently set at which amount?",o:["£175,000","£250,000","£325,000","£500,000"],a:2,e:"The nil rate band is £325,000 — the amount of an estate that can be passed on free of inheritance tax. The residence nil rate band adds up to £175,000 for a qualifying residence passed to direct descendants, giving a potential combined threshold of £500,000 per individual."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 3: Legal Concepts and Considerations (12 new → total 32)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1301,m:3,t:"M3A",d:1,q:"What is the key legal distinction between a sole trader and a limited company?",o:["Sole traders do not need to register with HMRC","A sole trader has unlimited personal liability; a limited company's shareholders' liability is limited to the amount invested in shares","Sole traders cannot employ staff","Limited companies cannot be owned by a single person"],a:1,e:"The fundamental distinction is liability. A sole trader and their business are legally the same entity — personal assets are at risk if the business fails. A limited company is a separate legal person; shareholders' liability is limited to the value of their shares."},
  {id:1302,m:3,t:"M3C",d:2,q:"Under the intestacy rules in England and Wales, if a person dies without a will leaving a spouse and children, how is the estate distributed?",o:["Everything passes to the spouse automatically","The spouse receives all personal chattels, the first £322,000 and half of the remainder; the children share the other half","The estate is split equally between the spouse and all children","The children inherit everything and the spouse receives nothing"],a:1,e:"Under the intestacy rules (updated 2023), the surviving spouse receives all personal chattels, the first £322,000 of the estate, and half of the remainder. The deceased's children share the other half equally. If there is no surviving spouse, the children inherit everything."},
  {id:1303,m:3,t:"M3D",d:1,q:"In insurance law, what is the principle of 'utmost good faith' (uberrima fides)?",o:["Both parties to an insurance contract must act honestly and not withhold material information","The insurer must always pay claims regardless of the circumstances","The policyholder can cancel the policy at any time without penalty","The insurer must offer the lowest possible premium to every applicant"],a:0,e:"Utmost good faith requires both parties to an insurance contract to act honestly and disclose all material information. For consumers, this duty was modified by the Consumer Insurance (Disclosure and Representations) Act 2012, which requires consumers only to answer the insurer's questions accurately."},
  {id:1304,m:3,t:"M3E",d:2,q:"What is a 'bare trust' and who pays tax on the trust income?",o:["A trust where the trustee has discretion over who receives the income; the trustee pays tax","A trust where the beneficiary has an absolute right to both the capital and income; the beneficiary pays tax at their own marginal rate","A trust with no beneficiaries; no tax is payable","A trust that only holds cash deposits; the bank pays tax"],a:1,e:"In a bare trust, the beneficiary has an absolute and immediate right to both the capital and income of the trust. The beneficiary is treated as owning the assets for tax purposes and pays tax at their own marginal rate. Bare trusts are simple and transparent."},
  {id:1305,m:3,t:"M3E",d:2,q:"What is 'tenancy in common' and how does it differ from joint tenancy?",o:["They are identical legal arrangements","With tenancy in common each owner has a distinct share that can be left to anyone in their will; with joint tenancy the property passes automatically to the surviving owner","Tenancy in common only applies to commercial property","Joint tenancy allows unequal shares; tenancy in common requires equal shares"],a:1,e:"With tenancy in common, each owner holds a distinct, identifiable share (which can be unequal) that forms part of their estate on death and can be left to anyone in their will. With joint tenancy, ownership passes automatically to the surviving joint tenant by right of survivorship."},
  {id:1306,m:3,t:"M3D",d:2,q:"What does 'subrogation' mean in insurance?",o:["The right of the insurer to take over the policyholder's legal rights to pursue a third party responsible for the loss after paying a claim","The policyholder's right to claim against multiple insurers for the same loss","The insurer's right to cancel a policy mid-term without notice","The process of transferring a policy from one insurer to another"],a:0,e:"Subrogation gives the insurer the right, after paying a claim, to step into the policyholder's shoes and pursue recovery from any third party responsible for the loss. This prevents the policyholder from profiting by collecting both from the insurer and the third party."},
  {id:1307,m:3,t:"M3D",d:1,q:"The principle of 'indemnity' in insurance means what?",o:["The policyholder receives the full replacement cost of any item regardless of its current value","The policyholder is restored to the same financial position they were in immediately before the loss — no better, no worse","The insurer pays double the claim amount as compensation for inconvenience","The policyholder can claim for future anticipated losses"],a:1,e:"Indemnity means the policyholder is restored to exactly the financial position they occupied immediately before the loss occurred. They should not profit from a claim. Life assurance is not a contract of indemnity because a human life cannot be valued in this way."},
  {id:1308,m:3,t:"M3F",d:2,q:"What is an Individual Voluntary Arrangement (IVA)?",o:["A court order forcing a debtor to sell their home to repay creditors","A formal agreement between a debtor and their creditors to repay debts over a fixed period, supervised by an insolvency practitioner, as an alternative to bankruptcy","An informal arrangement between family members to share debts","A Government scheme providing interest-free loans to people in debt"],a:1,e:"An IVA is a formal, legally binding agreement between a debtor and creditors to repay debts over a fixed period (typically 5–6 years), supervised by an insolvency practitioner. It is an alternative to bankruptcy that allows the debtor to avoid some of the restrictions bankruptcy imposes."},
  {id:1309,m:3,t:"M3C",d:1,q:"Who has the legal right to apply for a grant of probate?",o:["Any family member of the deceased","The executor(s) named in the will","The deceased's bank manager","Any solicitor registered with the Law Society"],a:1,e:"The executor(s) named in the deceased's will have the right to apply for a grant of probate. If there is no will (intestacy), the next of kin applies for a grant of letters of administration instead. Probate gives legal authority to administer the estate."},
  {id:1310,m:3,t:"M3E",d:3,q:"A discretionary trust gives the trustees what power?",o:["No discretion — they must follow the settlor's written instructions exactly","The power to decide which beneficiaries receive income or capital, and how much each receives","The power to change the terms of the trust without the beneficiaries' consent","The power to appoint new settlors to the trust"],a:1,e:"In a discretionary trust, trustees have the power to decide which of the named beneficiaries receive distributions of income and/or capital, when they receive them, and how much each receives. No beneficiary has an automatic right to anything — it is entirely at the trustees' discretion."},
  {id:1311,m:3,t:"M3D",d:2,q:"What does 'proximate cause' mean in insurance claims?",o:["The most recent event in a chain of events causing the loss","The dominant or effective cause of the loss, which determines whether the policy responds","The first event in any chain of events leading to a claim","The cause identified by the policyholder on the claim form"],a:1,e:"Proximate cause is the dominant, effective, or operative cause of the loss — not necessarily the most recent event. If the proximate cause is an insured peril, the claim is valid. If it is an excluded peril, the claim is not covered, regardless of other contributing factors."},
  {id:1312,m:3,t:"M3B",d:2,q:"Under the Mental Capacity Act 2005, what is the key presumption regarding adults?",o:["Adults over 70 are presumed to lack capacity until proven otherwise","Every adult is presumed to have capacity unless it is established that they lack it","Capacity must be formally assessed by a doctor before any financial transaction","Adults with learning disabilities are presumed to lack capacity"],a:1,e:"The Mental Capacity Act 2005 starts from the presumption that every adult has capacity to make their own decisions. Capacity can only be deemed lacking if, on the balance of probabilities, the person cannot understand, retain, weigh up, or communicate a decision because of an impairment of the mind or brain."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 4: The Regulation of Financial Services (10 new → total 18)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1401,m:4,t:"M4A",d:1,q:"What event in 2007–2008 demonstrated the need for stronger prudential regulation of banks?",o:["The introduction of MiFID II","The global financial crisis, which exposed weaknesses in bank capital reserves and risk management","The creation of the single European currency","The privatisation of building societies"],a:1,e:"The global financial crisis of 2007–2008 exposed critical weaknesses in bank capital adequacy, risk management and regulatory oversight. It directly led to the restructuring of UK regulation — replacing the FSA with the FCA and PRA under the Financial Services Act 2012."},
  {id:1402,m:4,t:"M4A",d:2,q:"The Financial Services Act 2012 replaced which single regulatory body with the current twin-peaks structure?",o:["The Bank of England","The Financial Services Authority (FSA)","The Office of Fair Trading","The Securities and Investments Board"],a:1,e:"The Financial Services Act 2012 replaced the Financial Services Authority (FSA) with the current twin-peaks model: the FCA for conduct regulation and the PRA (within the Bank of England) for prudential regulation of deposit-takers and insurers."},
  {id:1403,m:4,t:"M4B",d:2,q:"What did UK firms lose as a result of Brexit in relation to accessing EU financial markets?",o:["The ability to accept deposits in sterling","Passporting rights, which had allowed UK firms to operate freely across the EU","The right to use SWIFT payment systems","Access to the Bank of England's discount window"],a:1,e:"Brexit meant UK firms lost their EU passporting rights — the ability to provide financial services across the EU single market based on their UK authorisation. Firms that wish to continue serving EU clients now need to establish separately authorised entities within the EU."},
  {id:1404,m:4,t:"M4C",d:1,q:"What is the primary function of the Financial Ombudsman Service (FOS)?",o:["To regulate financial firms and impose fines for misconduct","To resolve disputes between consumers and financial firms that cannot be settled through the firm's own complaints process","To provide financial advice to consumers who cannot afford an adviser","To compensate consumers when financial firms become insolvent"],a:1,e:"The FOS resolves disputes between consumers and financial services firms that the firm's own complaints procedure has been unable to resolve. It is free to consumers and its decisions are binding on the firm (up to the maximum award limit) but not on the consumer."},
  {id:1405,m:4,t:"M4A",d:2,q:"What are 'dual-regulated' firms?",o:["Firms regulated by both the UK and an EU authority","Firms regulated by both the FCA (for conduct) and the PRA (for prudential matters)","Firms regulated by both the FCA and HMRC","Firms that hold two separate types of FCA authorisation"],a:1,e:"Dual-regulated firms are regulated by both the FCA and the PRA. This applies to banks, building societies, credit unions, insurers and major investment firms. The FCA regulates their conduct; the PRA regulates their financial soundness and stability."},
  {id:1406,m:4,t:"M4B",d:2,q:"The Insurance Distribution Directive (IDD) primarily aims to do what?",o:["Eliminate all insurance intermediaries from the market","Harmonise insurance distribution practices and ensure customers receive consistent information and protection when buying insurance","Set maximum premiums that insurers can charge","Require all insurance to be purchased directly from the insurer"],a:1,e:"The IDD aims to harmonise insurance distribution practices across participating markets, ensuring that customers receive consistent information, are treated fairly, and are protected regardless of the distribution channel through which they purchase insurance products."},
  {id:1407,m:4,t:"M4C",d:2,q:"The Pensions Regulator (TPR) has the power to issue which type of notice requiring immediate action?",o:["A consumer duty notice","An improvement notice requiring specific steps to be taken within a defined period","A winding-up petition to the High Court","An FCA enforcement notice"],a:1,e:"TPR can issue improvement notices requiring trustees or employers to take specific steps within a defined period to put right a breach of pensions legislation. TPR also has powers to impose fines, appoint or remove trustees, and wind up schemes where necessary."},
  {id:1408,m:4,t:"M4A",d:1,q:"Under the general prohibition in FSMA 2000, what is required before a firm can carry on regulated activities?",o:["Registration with Companies House","Authorisation by the FCA or PRA, or an applicable exemption","Approval from the Bank of England's Monetary Policy Committee","A minimum capital reserve of £1 million"],a:1,e:"Section 19 of FSMA 2000 creates the 'general prohibition' — no person may carry on a regulated activity in the UK unless they are authorised by the appropriate regulator (FCA or PRA) or are exempt. Breach of the general prohibition is a criminal offence."},
  {id:1409,m:4,t:"M4C",d:2,q:"What role does HM Treasury play in relation to financial services regulation?",o:["It directly supervises individual financial firms","It is responsible for the overall institutional structure of financial regulation, including the legislative framework within which the FCA and PRA operate","It sets interest rates and controls monetary policy","It approves or rejects individual FCA enforcement actions"],a:1,e:"HM Treasury is responsible for the overall institutional structure and legislative framework of financial services regulation. It does not regulate individual firms — that role belongs to the FCA and PRA — but it sets the legal framework within which they operate."},
  {id:1410,m:4,t:"M4B",d:2,q:"The Solvency II Directive primarily applies to which type of firm?",o:["Banks and building societies","Insurance and reinsurance companies","Independent financial advisers","Pension fund trustees"],a:1,e:"Solvency II is a regulatory framework primarily applying to insurance and reinsurance companies. It establishes capital requirements, governance standards and risk management practices to ensure insurers can meet their obligations to policyholders."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 5: The FCA & FCA Handbook (10 new → total 21)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1501,m:5,t:"M5A",d:1,q:"The FCA's strategic objective is to do what?",o:["Maximise competition between financial services firms","Ensure that the relevant markets function well","Eliminate all risk from financial products sold to consumers","Guarantee that all consumers receive independent financial advice"],a:1,e:"The FCA's single strategic objective is ensuring that the relevant markets function well. This overarching aim is supported by the three operational objectives: consumer protection, market integrity, and promoting effective competition."},
  {id:1502,m:5,t:"M5B",d:1,q:"FCA Principle 1 — 'Integrity' — requires a firm to do what?",o:["Ensure all products generate positive returns for investors","Conduct its business with integrity","Provide independent advice to all retail clients","Maintain a minimum level of capital at all times"],a:1,e:"Principle 1 requires a firm to conduct its business with integrity. This is the foundational principle — acting honestly, fairly and professionally underpins all other regulatory requirements."},
  {id:1503,m:5,t:"M5B",d:2,q:"FCA Principle 11 requires a firm to deal with its regulators in what manner?",o:["Only when formally requested to do so","In an open and cooperative way, disclosing anything of which the FCA would reasonably expect notice","By providing the minimum information legally required","By directing all communication through the firm's legal department"],a:1,e:"Principle 11 requires firms to deal with regulators in an open and cooperative way and to disclose to the FCA anything relating to the firm of which the FCA would reasonably expect notice. Failure to be open with the regulator is treated very seriously."},
  {id:1504,m:5,t:"M5D",d:2,q:"COBS (Conduct of Business Sourcebook) within the FCA Handbook covers which area?",o:["The threshold conditions for obtaining FCA authorisation","Day-to-day conduct rules for firms when dealing with clients, including suitability, disclosure and best execution","Capital adequacy requirements for banks","The structure of the FCA's internal governance"],a:1,e:"COBS contains the day-to-day conduct of business rules that apply when firms deal with clients. It covers suitability requirements, disclosure obligations, best execution, financial promotions, and the rules around different types of investment services."},
  {id:1505,m:5,t:"M5E",d:1,q:"If a consumer is unhappy with the FOS decision on their complaint, what can they do?",o:["Appeal to the FCA for a different ruling","Accept the decision or reject it and pursue the matter through the courts","Request that the FOS reconsiders with a larger panel","Nothing — FOS decisions are final and cannot be challenged"],a:1,e:"FOS decisions are binding on the firm but not on the consumer. If the consumer rejects the FOS decision, they retain the right to pursue their complaint through the courts. If they accept it, the matter is settled and the firm must comply."},
  {id:1506,m:5,t:"M5B",d:2,q:"Under Consumer Duty, the 'price and value' outcome requires firms to do what?",o:["Always offer the cheapest product available in the market","Ensure that the price consumers pay for products and services is reasonable relative to the overall benefits they receive","Cap all product charges at 1% per annum","Provide all products free of charge to vulnerable customers"],a:1,e:"The price and value outcome requires firms to ensure their products and services provide fair value — the price paid must be reasonable relative to the benefits received. This does not mean cheapest; it means the total cost must be justified by the quality, features and benefits delivered."},
  {id:1507,m:5,t:"M5D",d:1,q:"What does SYSC (Senior Management Arrangements, Systems and Controls) within the FCA Handbook require?",o:["That firms hold a minimum level of liquid assets at all times","That firms have appropriate governance, internal controls, risk management systems and compliance arrangements","That firms only employ FCA-approved individuals in all roles","That firms submit monthly financial reports to the FCA"],a:1,e:"SYSC requires firms to establish and maintain appropriate governance structures, internal controls, risk management systems and compliance arrangements. It provides the framework for how firms should be organised and managed to meet their regulatory obligations."},
  {id:1508,m:5,t:"M5E",d:2,q:"The FSCS is funded primarily by which mechanism?",o:["Direct Government grants from HM Treasury","Levies on authorised firms across the financial services industry","Fines imposed by the FCA on firms that breach regulations","Premiums paid by individual consumers when purchasing financial products"],a:1,e:"The FSCS is funded by levies on authorised firms. Each firm contributes based on its size and the type of business it conducts. The levy structure ensures that the cost of compensating consumers when firms fail is borne by the industry."},
  {id:1509,m:5,t:"M5B",d:2,q:"FCA Principle 8 — 'Conflicts of Interest' — requires a firm to do what?",o:["Avoid all situations where conflicts could potentially arise","Manage conflicts of interest fairly, both between itself and its clients and between different clients","Disclose conflicts only when asked by the client","Eliminate conflicts by refusing to act for more than one client at a time"],a:1,e:"Principle 8 requires firms to manage conflicts of interest fairly — between the firm and its customers, and between one customer and another. The aim is not to eliminate all conflicts (which may be impossible) but to manage them so that no customer is disadvantaged."},
  {id:1510,m:5,t:"M5E",d:2,q:"For investment business, what is the FSCS compensation limit?",o:["£50,000 per person per firm","£85,000 per person per firm","Up to £85,000 per person per firm","Up to £85,000 per person per firm for investments; unlimited for long-term insurance"],a:1,e:"The FSCS compensation limit for investment business (such as bad investment advice) is up to £85,000 per person per firm. This is separate from the deposit protection limit (also £85,000) and long-term insurance protection (100% with no upper limit for product providers)."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 6: AML, Data Protection & Complaints (10 new → total 18)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1601,m:6,t:"M6A",d:1,q:"What is 'tipping off' in the context of money laundering?",o:["Reporting suspicious activity to the National Crime Agency","Informing a person that they are the subject of a suspicious activity report or money laundering investigation, which is a criminal offence","Providing anonymous tips to the police about financial crime","Alerting the FCA to potential regulatory breaches by a colleague"],a:1,e:"Tipping off is a criminal offence under the Proceeds of Crime Act 2002. It occurs when a person discloses to another that a suspicious activity report has been made, or that a money laundering investigation is being conducted, in circumstances likely to prejudice the investigation."},
  {id:1602,m:6,t:"M6A",d:2,q:"Who within a regulated firm is responsible for receiving internal suspicious activity reports and deciding whether to file them with the NCA?",o:["The Chief Executive Officer","The Money Laundering Reporting Officer (MLRO)","The FCA's appointed supervisor","Any member of staff who identifies the suspicion"],a:1,e:"The MLRO is the designated individual within a regulated firm responsible for receiving internal reports of suspicious activity, assessing them, and deciding whether to submit a Suspicious Activity Report (SAR) to the National Crime Agency."},
  {id:1603,m:6,t:"M6B",d:1,q:"What does 'Know Your Customer' (KYC) mean in the context of anti-money laundering?",o:["Knowing the customer's investment preferences and risk appetite","Verifying the customer's identity and understanding the nature and purpose of the business relationship","Knowing the customer's social media profiles and online activity","Having met the customer face-to-face on at least two occasions"],a:1,e:"KYC requires firms to verify the customer's identity using reliable, independent sources and to understand the nature and purpose of the business relationship. This enables the firm to identify transactions that are unusual or inconsistent with the customer's known profile."},
  {id:1604,m:6,t:"M6C",d:1,q:"Under UK GDPR, what does 'lawful basis' mean for processing personal data?",o:["The firm must have a valid legal reason for processing personal data, such as consent, contractual necessity, or legitimate interest","Any firm registered with Companies House can automatically process personal data","Personal data can be processed freely as long as it is kept secure","Only Government bodies need a lawful basis to process personal data"],a:0,e:"UK GDPR requires every organisation to have a lawful basis for processing personal data. The six lawful bases are: consent, contractual necessity, legal obligation, vital interests, public task, and legitimate interests. Processing without a valid lawful basis is unlawful."},
  {id:1605,m:6,t:"M6C",d:2,q:"Under UK GDPR, what rights does a data subject have in relation to their personal data?",o:["No rights — the data controller decides how personal data is used","Rights including access, rectification, erasure, restriction of processing, data portability and objection to processing","Only the right to access their data on payment of a fee","Only the right to request deletion after 10 years"],a:1,e:"Data subjects have extensive rights under UK GDPR including: the right of access (subject access request), rectification, erasure ('right to be forgotten'), restriction of processing, data portability, objection to processing, and rights related to automated decision-making."},
  {id:1606,m:6,t:"M6B",d:2,q:"Simplified due diligence (SDD) may be appropriate in which circumstances?",o:["When the customer is a politically exposed person","When the customer presents a lower risk of money laundering, such as a UK-listed public company or a Government body","When the firm does not have time to complete full CDD","When the transaction is below £100"],a:1,e:"SDD may be applied where the customer presents a demonstrably lower risk of money laundering — for example, UK-listed public companies, EU/EEA public authorities, or UK Government departments. The firm must still be able to demonstrate that the lower risk assessment is justified."},
  {id:1607,m:6,t:"M6A",d:2,q:"The Money Laundering Regulations 2017 require firms to adopt which approach to managing money laundering risk?",o:["A one-size-fits-all approach with identical checks for every customer","A risk-based approach, varying the level of due diligence according to the assessed risk","A compliance-based approach focused solely on completing prescribed forms","An approach based entirely on customer self-certification"],a:1,e:"The Money Laundering Regulations 2017 require a risk-based approach. Firms must assess the risk of money laundering and terrorist financing and apply customer due diligence measures proportionate to that risk — enhanced measures for higher risk, potentially simplified measures for lower risk."},
  {id:1608,m:6,t:"M6C",d:2,q:"What is the maximum fine the ICO can impose for a serious breach of UK GDPR?",o:["£500,000","£8.7 million or 2% of annual worldwide turnover","£17.5 million or 4% of annual worldwide turnover, whichever is higher","Unlimited"],a:2,e:"For the most serious breaches of UK GDPR, the ICO can impose fines of up to £17.5 million or 4% of annual worldwide turnover, whichever is higher. Lower-tier breaches can attract fines of up to £8.7 million or 2% of turnover."},
  {id:1609,m:6,t:"M6A",d:2,q:"What is the penalty for failing to disclose knowledge or suspicion of money laundering in the regulated sector?",o:["A formal warning from the FCA with no further consequences","Up to 5 years' imprisonment and/or an unlimited fine","A fixed penalty notice of £5,000","Suspension of the individual's FCA approval for 6 months"],a:1,e:"Failure to disclose knowledge or suspicion of money laundering within the regulated sector is a criminal offence under the Proceeds of Crime Act 2002, carrying a maximum penalty of up to 5 years' imprisonment and/or an unlimited fine."},
  {id:1610,m:6,t:"M6B",d:2,q:"How often must firms review and update their customer due diligence records?",o:["Only when the customer makes a complaint","On an ongoing basis throughout the business relationship, particularly when there is a material change in the customer's circumstances","Every 10 years as a minimum requirement","Only at the point of initial onboarding"],a:1,e:"CDD is not a one-off exercise. Firms must conduct ongoing monitoring of the business relationship, keeping documents and information up to date and scrutinising transactions to ensure they are consistent with the firm's knowledge of the customer and their risk profile."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 7: Types of Advisers and the Advice Process (10 new → total 21)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1701,m:7,t:"M7A",d:1,q:"What is the key difference between independent advice and restricted advice?",o:["Independent advisers charge fees; restricted advisers receive commission","Independent advice considers a sufficient range of products across the whole market; restricted advice is limited by product type, provider, or both","Independent advisers must hold higher qualifications","Restricted advisers cannot advise on pensions"],a:1,e:"Independent advice must be based on a comprehensive and fair analysis of the relevant market — considering a sufficient range of products diverse in type and issuer. Restricted advice is limited in scope — by product type, provider panel, or both. The firm must clearly disclose which type of advice it provides."},
  {id:1702,m:7,t:"M7B",d:2,q:"A 'guided sale' or 'non-advised sale' means what in practice?",o:["The firm provides a personal recommendation to the client","The firm provides information and tools to help the client make their own choice, without making a personal recommendation","The firm sells products only to professional clients","The sale must take place face-to-face in the firm's office"],a:1,e:"In a non-advised or guided sale, the firm provides information, tools (such as comparison tables or decision trees) and factual descriptions to help the client choose, but does not make a personal recommendation. The client makes their own decision — the firm is not responsible for suitability."},
  {id:1703,m:7,t:"M7C",d:2,q:"What is a 'personal recommendation' under FCA rules?",o:["Any general information provided about financial products","Advice given to a specific person that is based on their individual circumstances and presented as suitable for them","A recommendation published in a newspaper for all readers","A product comparison table showing features and charges"],a:1,e:"A personal recommendation is advice given to a specific person (or their agent) that is based on a consideration of their individual circumstances and is presented as suitable for them. This triggers the full suitability requirements under COBS, including the obligation to issue a suitability report."},
  {id:1704,m:7,t:"M7C",d:1,q:"What is the primary purpose of a suitability report?",o:["To demonstrate that the adviser has met their sales targets","To explain why the recommendation is suitable for the specific client, based on their personal circumstances, needs and objectives","To provide a marketing summary of the recommended product's features","To satisfy the firm's internal compliance audit requirements"],a:1,e:"The suitability report must clearly explain why the recommendation is suitable for the individual client. It must reference the client's personal circumstances, needs, objectives, risk profile and capacity for loss, and explain how the recommended product or course of action addresses these."},
  {id:1705,m:7,t:"M7C",d:2,q:"When making a personal recommendation, the adviser must ensure the product is suitable in which three respects?",o:["Price, performance and popularity","The client's knowledge and experience, their financial situation, and their investment objectives including risk tolerance","The provider's reputation, the product's past performance, and the level of commission payable","The product's liquidity, the client's age, and whether the client has a mortgage"],a:1,e:"Suitability is assessed against three pillars: (1) the client's knowledge and experience in the relevant investment field; (2) the client's financial situation including capacity for loss; and (3) the client's investment objectives including their risk tolerance. All three must be satisfied."},
  {id:1706,m:7,t:"M7D",d:2,q:"What is 'best execution' under MiFID II rules?",o:["Always obtaining the lowest price for the client","Taking all sufficient steps to obtain the best possible result for the client when executing orders, taking into account price, costs, speed, likelihood of execution and other relevant factors","Executing trades on the London Stock Exchange exclusively","Processing all orders within 24 hours of receipt"],a:1,e:"Best execution requires firms to take all sufficient steps to obtain the best possible result for clients when executing orders. The assessment considers multiple factors: price, costs, speed, likelihood of execution and settlement, size, nature, and any other relevant consideration."},
  {id:1707,m:7,t:"M7A",d:2,q:"A firm that describes its advice as 'restricted' must do what?",o:["Provide no explanation to the client about the nature of its restrictions","Clearly disclose the nature of its restriction — whether by product type, provider, or both — and explain that the client may wish to seek independent advice","Only advise professional clients, not retail clients","Obtain special FCA permission before each restricted recommendation"],a:1,e:"A restricted firm must clearly disclose to clients the nature of its restriction before providing advice. It must explain whether the restriction relates to a limited range of products, a limited number of providers, or both, and inform the client they may wish to consider seeking independent advice."},
  {id:1708,m:7,t:"M7C",d:2,q:"What must an adviser do if they identify that a client is a vulnerable customer?",o:["Refuse to provide advice until the vulnerability is resolved","Take particular care to ensure the client understands the recommendation and can make an informed decision, adapting communication methods as necessary","Transfer the client to a specialist vulnerability team within the FCA","Automatically recommend the lowest-risk product available"],a:1,e:"Advisers must take extra care with vulnerable customers — adapting their communication, checking understanding, allowing more time, and ensuring the client can make an informed decision. Consumer Duty requires firms to monitor and respond to the needs of vulnerable customers proactively."},
  {id:1709,m:7,t:"M7B",d:1,q:"The FCA's adviser charging rules require that charges for advice must be which of the following?",o:["Paid entirely by the product provider through commission","Agreed between the adviser and the client and clearly disclosed before advice is given","Set by the FCA at a standard rate for all advisers","Capped at a maximum of 3% of the amount invested"],a:1,e:"Adviser charges must be agreed with the client and clearly disclosed before advice is provided. The charges must fairly reflect the nature and extent of the service provided. The client must agree to the charges before any work begins."},
  {id:1710,m:7,t:"M7D",d:2,q:"An ongoing service review should include assessment of which factors?",o:["Only whether the product has increased in value since the last review","Whether the client's circumstances have changed, whether the existing recommendation remains suitable, and whether the product continues to meet the client's needs","Whether the adviser's charges should be increased","Only whether the client wishes to make additional investments"],a:1,e:"Ongoing reviews must consider changes in the client's personal and financial circumstances, whether the existing portfolio or product remains suitable given those changes, product performance relative to benchmarks, and whether any action is needed to realign with the client's objectives."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 8: Identifying a Client's Financial Needs (10 new → total 18)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1801,m:8,t:"M8A",d:1,q:"Why is it important to record a client's health information during the fact-find?",o:["To share with pharmaceutical companies for research purposes","Health status affects insurability, the cost and availability of protection products, and may influence retirement planning timelines","To determine whether the client qualifies for NHS benefits","Health information is only needed for clients over 65"],a:1,e:"Health information directly affects the client's ability to obtain life assurance, income protection and critical illness cover — and at what cost. Pre-existing conditions may result in exclusions, premium loadings, or declined cover. Health status also affects retirement planning horizons."},
  {id:1802,m:8,t:"M8A",d:2,q:"A fact-find reveals that a client has significant surplus income but no emergency fund. What should the adviser prioritise?",o:["Investing the surplus in a stocks and shares ISA immediately","Establishing an accessible emergency fund of 3–6 months' expenditure before recommending longer-term investments","Using the surplus to overpay the mortgage","Recommending a high-risk growth fund to maximise returns"],a:1,e:"An emergency fund — typically 3–6 months' essential expenditure held in accessible savings — provides a financial buffer against unexpected events. Without one, the client may be forced to liquidate investments at an inopportune time or take on debt to meet unexpected costs."},
  {id:1803,m:8,t:"M8B",d:2,q:"Why must an adviser record a client's existing pension arrangements in detail?",o:["To calculate the adviser's commission entitlement on existing plans","To identify any gap between projected pension income and the client's target retirement income, and to check for valuable guaranteed benefits that should not be transferred without very strong justification","To report the information to HMRC as required by law","To compare the client's pension with industry averages"],a:1,e:"Recording existing pensions in detail allows the adviser to: calculate the projected income at retirement, identify any shortfall against the target, check for valuable guaranteed benefits (such as guaranteed annuity rates or defined benefit entitlements), and ensure any new recommendation complements existing provision."},
  {id:1804,m:8,t:"M8A",d:1,q:"What is the significance of recording a client's tax status during the fact-find?",o:["It has no relevance to financial planning","Tax status determines which tax reliefs and allowances are available, affecting product selection and the net return on investments and savings","Tax status is only relevant for clients with income above £100,000","The FCA requires tax status to be filed with the annual regulatory return"],a:1,e:"A client's tax status — including marginal income tax rate, capital gains tax position, and use of allowances — directly affects product selection. For example, a higher-rate taxpayer benefits more from pension contributions, while an ISA may be more suitable for a basic-rate taxpayer nearing their personal savings allowance."},
  {id:1805,m:8,t:"M8B",d:2,q:"A client's fact-find shows they have a 25-year repayment mortgage with 18 years remaining and no life cover. What is the primary concern?",o:["The mortgage interest rate may not be competitive","If the client dies, there is no provision to repay the outstanding mortgage, potentially leaving dependants unable to maintain the home","The client should switch to an interest-only mortgage","The client should use their pension fund to repay the mortgage early"],a:1,e:"An unprotected mortgage is a significant financial vulnerability. If the client dies or is unable to work, mortgage repayments still need to be made. Decreasing term assurance (where the sum assured reduces in line with the outstanding mortgage balance) is typically the most cost-effective solution."},
  {id:1806,m:8,t:"M8B",d:1,q:"What is the purpose of assessing a client's expenditure during the fact-find?",o:["To judge whether the client is spending too much on non-essentials","To calculate disposable income, identify capacity for saving, and establish the minimum income needed to maintain the client's lifestyle","To compare the client's spending with national averages","To determine whether the client qualifies for means-tested benefits"],a:1,e:"Assessing expenditure enables the adviser to calculate disposable income (income minus expenditure), establish the amount available for savings and investment, and determine the minimum income the client needs to maintain their standard of living — crucial for protection and retirement planning."},
  {id:1807,m:8,t:"M8A",d:2,q:"Why should the fact-find explore the client's future plans and objectives?",o:["To sell them additional products they do not currently need","To ensure recommendations are forward-looking and account for anticipated life changes such as retirement, property purchase, or children's education","To complete the FCA's mandatory objectives questionnaire","To establish a contractual obligation for future reviews"],a:1,e:"Financial planning is forward-looking. Understanding anticipated life changes — planned retirement date, expected property purchase, children's education needs, inheritance expectations — ensures recommendations are positioned to serve both current and future needs."},
  {id:1808,m:8,t:"M8B",d:2,q:"A risk profiling questionnaire places a client as 'moderate' but they express anxiety about any potential loss. How should the adviser respond?",o:["Override the questionnaire and treat the client as cautious based on their expressed feelings","Use the questionnaire result as a starting point for discussion, explore the discrepancy, and reach an agreed risk profile that reflects both the quantitative assessment and the client's expressed preferences","Ignore the client's anxiety as it is subjective and not measurable","Recommend a high-risk portfolio to help the client overcome their fear of loss"],a:1,e:"Risk profiling tools are aids, not definitive answers. Where there is a discrepancy between the questionnaire result and the client's expressed feelings, the adviser must discuss this openly. The agreed risk profile should reflect the client's genuine comfort level — an anxious client forced into a moderate portfolio may make poor decisions under pressure."},
  {id:1809,m:8,t:"M8A",d:1,q:"What information should the adviser record about a client's existing savings and investments?",o:["Only the total value across all accounts","The type of each product, provider, current value, contribution level, ownership, tax wrapper, and performance","Only investments held in ISAs and pensions","The client's estimate of their total wealth rounded to the nearest £10,000"],a:1,e:"A detailed record of existing savings and investments — including product type, provider, value, regular contributions, tax wrapper (ISA, pension, general investment account), ownership structure and performance — enables the adviser to assess the client's overall asset allocation and identify gaps or duplications."},
  {id:1810,m:8,t:"M8B",d:2,q:"Why is it important to establish whether a client has made a will?",o:["Advisers receive a referral fee for will-writing services","To ensure the client's estate will be distributed according to their wishes, and to identify whether trust planning or IHT mitigation may be needed","Will-making is a mandatory requirement before any financial advice can be given","To determine whether the client is a suitable candidate for life assurance"],a:1,e:"Establishing whether the client has a valid, up-to-date will is essential for estate planning. Without a will, assets pass under intestacy rules which may not reflect the client's wishes. The existence (or absence) of a will also affects the adviser's IHT planning recommendations and trust advice."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 9: Senior Management & Conduct (10 new → total 20)
  // ══════════════════════════════════════════════════════════════════════════
  {id:1901,m:9,t:"M9A",d:1,q:"FCA Principle 2 — 'Skill, Care and Diligence' — requires a firm to do what?",o:["Employ only university graduates","Conduct its business with due skill, care and diligence","Maintain a physical office in the City of London","Provide free financial advice to vulnerable customers"],a:1,e:"Principle 2 requires a firm to conduct its business with due skill, care and diligence. This means applying appropriate expertise, thoroughness and attention to client affairs — a standard that applies to the firm as a whole, not just individual advisers."},
  {id:1902,m:9,t:"M9B",d:2,q:"Under SM&CR, what is a 'Responsibilities Map'?",o:["A geographical map showing the firm's office locations","A document showing how all senior management responsibilities within the firm are allocated and how they fit together","A list of the firm's regulated activities","An organisational chart showing only the compliance department"],a:1,e:"The Responsibilities Map is a firm-level document showing how all senior management responsibilities are allocated across senior managers and how they interrelate. Combined with individual Statements of Responsibilities, it provides a clear picture of who is accountable for what across the entire firm."},
  {id:1903,m:9,t:"M9C",d:1,q:"Individual Conduct Rule 1 under COCON requires individuals to do what?",o:["Generate a minimum level of revenue for the firm","Act with integrity","Report all colleagues' personal trading activity","Attend a minimum of 20 hours of CPD per year"],a:1,e:"Individual Conduct Rule 1 requires individuals to act with integrity. The five Individual Conduct Rules are: (1) act with integrity; (2) act with due skill, care and diligence; (3) be open and cooperative with the FCA, PRA and other regulators; (4) pay due regard to the interests of customers and treat them fairly; (5) observe proper standards of market conduct."},
  {id:1904,m:9,t:"M9B",d:2,q:"Under SM&CR, what additional Conduct Rules apply specifically to senior managers beyond the standard Individual Conduct Rules?",o:["No additional rules apply — senior managers follow the same rules as all staff","Senior managers must also take reasonable steps to ensure the business is controlled effectively, comply with regulatory requirements, and ensure proper delegation of responsibilities","Senior managers must personally approve every client transaction","Senior managers must hold a minimum of 10 years' industry experience"],a:1,e:"Senior managers are subject to additional Senior Manager Conduct Rules requiring them to take reasonable steps to ensure: the business of the firm for which they are responsible is controlled effectively, complies with relevant requirements and standards, and any delegation of responsibilities is to appropriate persons with proper oversight."},
  {id:1905,m:9,t:"M9C",d:2,q:"The Certification Regime under SM&CR requires firms to do what annually?",o:["Submit all certified individuals' details to the FCA for re-approval","Assess and certify that each person performing a certified function is fit and proper to do so","Pay an annual certification fee to the FCA for each certified individual","Require all certified individuals to pass an FCA-set examination"],a:0,e:"Under the Certification Regime, the firm — not the FCA — must annually assess and certify that each individual performing a certified function is fit and proper. This shifted responsibility from the regulator to the firm, making firms directly accountable for the competence of their staff."},
  {id:1906,m:9,t:"M9A",d:2,q:"FCA Principle 3 — 'Management and Control' — requires what of a firm?",o:["That all decisions are made by the FCA on the firm's behalf","That the firm takes reasonable care to organise and control its affairs responsibly and effectively with adequate risk management systems","That the firm's management team holds specific FCA-approved qualifications","That all customer-facing staff are supervised by a senior manager at all times"],a:1,e:"Principle 3 requires firms to take reasonable care to organise and control their affairs responsibly and effectively, with adequate risk management systems. This is the foundation for the SM&CR framework — ensuring clear accountability and effective governance."},
  {id:1907,m:9,t:"M9B",d:2,q:"What is the 'duty of responsibility' under SM&CR?",o:["A duty requiring all employees to report misconduct by colleagues","A statutory duty meaning a senior manager can face regulatory action if a firm contravenes a requirement in an area for which they are responsible, unless they can show they took reasonable steps to prevent or stop the contravention","A duty requiring firms to publish their senior managers' salaries","A duty requiring senior managers to personally sign every client communication"],a:1,e:"The duty of responsibility means a senior manager can face enforcement action if the firm breaches a regulatory requirement in their area of responsibility. The burden is on the senior manager to demonstrate they took reasonable steps to prevent it — this is a significant shift in accountability."},
  {id:1908,m:9,t:"M9C",d:1,q:"What is a 'regulatory reference' under SM&CR?",o:["A reference number assigned by the FCA to each regulated firm","Information that firms must request and share about individuals' conduct history when they move between regulated firms","A citation of specific FCA Handbook provisions in enforcement notices","A reference letter written by the FCA for departing senior managers"],a:1,e:"Regulatory references are the information that firms must request from previous employers when hiring individuals for senior management or certified functions. Firms must disclose relevant information about an individual's fitness and propriety, including any disciplinary history, to the requesting firm."},
  {id:1909,m:9,t:"M9A",d:2,q:"FCA Principle 9 — 'Customers: Relationships of Trust' — requires a firm to do what?",o:["Ensure every customer has a dedicated relationship manager","Take reasonable care to ensure the suitability of its advice and discretionary decisions for any customer who is entitled to rely upon its judgement","Guarantee positive investment returns for all customers","Only accept customers who meet a minimum net worth threshold"],a:1,e:"Principle 9 requires firms to take reasonable care to ensure the suitability of their advice and discretionary decisions for any customer entitled to rely upon their judgement. This is the foundation of the suitability obligation and applies to all advisory and discretionary relationships."},
  {id:1910,m:9,t:"M9B",d:2,q:"Under SM&CR, which function requires FCA pre-approval before an individual can begin performing it?",o:["Any customer-facing role within the firm","A senior management function (SMF)","A certified function","Any role involving access to client money"],a:1,e:"Senior management functions require FCA pre-approval before the individual can begin performing the role. Certified functions do not require FCA pre-approval — the firm itself certifies the individual as fit and proper. This is a key distinction within the SM&CR framework."},
  // ══════════════════════════════════════════════════════════════════════════
  // MODULE 10: Ethics in Financial Services (10 new → total 20)
  // ══════════════════════════════════════════════════════════════════════════
  {id:2001,m:10,t:"M10A",d:1,q:"The second TCF consumer outcome states that products and services marketed in the retail market must be what?",o:["The cheapest available in their category","Designed to meet the needs of identified consumer groups and targeted accordingly","Guaranteed to produce positive returns","Approved by an independent consumer panel before launch"],a:1,e:"The second TCF outcome requires that products and services are designed to meet the needs of identified consumer groups and targeted accordingly. This prevents products being designed primarily to generate provider revenue rather than to serve genuine consumer needs."},
  {id:2002,m:10,t:"M10B",d:2,q:"What is the difference between 'compliance' and 'ethics' in financial services?",o:["There is no difference — they are the same thing","Compliance means following rules and regulations; ethics means doing what is right even when the rules do not require it","Compliance is voluntary; ethics is mandatory","Ethics is enforced by the FCA; compliance is not"],a:1,e:"Compliance is about following the rules — doing what is required by law and regulation. Ethics goes further — it is about doing what is right because it is the right thing to do, setting internal standards above the regulatory minimum and applying the spirit, not just the letter, of rules."},
  {id:2003,m:10,t:"M10C",d:2,q:"A firm's complaints data shows a pattern of customer confusion about product charges. What does an ethical response look like?",o:["Defending the current charging structure as technically compliant with FCA rules","Proactively reviewing and simplifying the charging structure to improve customer understanding, even if the current approach is technically compliant","Waiting for the FCA to issue a formal requirement before making changes","Increasing marketing spend to better explain the existing charges"],a:1,e:"An ethical firm uses complaints data as intelligence to drive improvement — not as a defence of the status quo. Even if charges are technically compliant, persistent customer confusion signals that the approach is failing the customer understanding outcome. An ethical response is to fix the problem proactively."},
  {id:2004,m:10,t:"M10A",d:2,q:"The fourth TCF consumer outcome states that consumers should receive advice that is what?",o:["Free of charge and always independent","Suitable and that takes account of their circumstances","Provided exclusively by qualified chartered financial planners","Accompanied by a guaranteed return on investment"],a:1,e:"The fourth TCF outcome requires that where consumers receive advice, the advice is suitable and takes account of their circumstances. This outcome underpins the entire suitability framework and is central to fair consumer treatment in advisory relationships."},
  {id:2005,m:10,t:"M10B",d:1,q:"What does 'tone from the top' mean in the context of ethical behaviour in financial services?",o:["The volume at which senior managers speak in meetings","The attitudes, values and behaviours demonstrated by senior leadership that set the standard for the entire organisation's culture","The FCA's published enforcement priorities","The formal policies written in the firm's compliance manual"],a:1,e:"Tone from the top refers to the ethical standards, values and behaviours demonstrated by senior leaders. If leadership genuinely prioritises ethical behaviour — not just compliance — this permeates through the organisation and shapes how every individual approaches their work."},
  {id:2006,m:10,t:"M10C",d:3,q:"A financial adviser discovers that a product they have been recommending has consistently underperformed its benchmark. What is the ethical course of action?",o:["Continue recommending it because it was approved by the firm's investment committee","Proactively contact affected clients, inform them of the underperformance, and review whether the product remains suitable for their needs","Wait for clients to contact the firm with complaints before taking action","Switch all clients to a different product without consulting them"],a:1,e:"An ethical adviser proactively contacts affected clients rather than waiting for complaints. Consumer Duty and TCF both require firms to act in good faith and avoid foreseeable harm. Continuing to recommend a consistently underperforming product — or failing to alert existing clients — falls short of these standards."},
  {id:2007,m:10,t:"M10A",d:2,q:"The fifth TCF consumer outcome addresses which aspect of the customer experience?",o:["Product performance guarantees","That products perform as firms have led consumers to expect, and the associated service is of an acceptable standard","That all customer complaints are resolved within 24 hours","That consumers always receive the highest possible investment returns"],a:1,e:"The fifth TCF outcome requires that products perform as firms have led consumers to expect and that the associated service quality is acceptable. This means marketing materials, illustrations and explanations must be realistic and not set expectations the product cannot reasonably meet."},
  {id:2008,m:10,t:"M10C",d:2,q:"What is a 'whistleblowing' policy and why is it important in a financial services firm?",o:["A policy requiring employees to report any colleague who arrives late to work","A policy that enables employees to report wrongdoing, malpractice or regulatory breaches within the firm without fear of retaliation","A policy requiring firms to publicly disclose all internal disciplinary actions","A Government scheme that rewards financial services employees for reporting tax evasion"],a:1,e:"A whistleblowing policy enables employees to raise concerns about wrongdoing — fraud, regulatory breaches, unethical behaviour — through a protected channel without fear of retaliation. Effective whistleblowing arrangements are a critical component of an ethical culture and are required by regulation."},
  {id:2009,m:10,t:"M10B",d:2,q:"The CII Code of Ethics contains which core principles for members?",o:["Maximise revenue, minimise complaints, and increase market share","Act with the highest ethical standards and integrity, act in the best interests of each client and customer, and provide a high standard of service","Always recommend the cheapest product available, never charge fees, and avoid complex products","Follow all FCA rules exactly, report all colleagues' mistakes, and maintain detailed records"],a:1,e:"The CII Code of Ethics centres on core principles including: acting with the highest ethical standards and integrity, acting in the best interests of each client and customer, and providing a high standard of service. These go beyond minimum regulatory requirements and reflect the professional standards expected of CII members."},
  {id:2010,m:10,t:"M10C",d:2,q:"Why is 'culture' considered more important than 'rules' in achieving consistently good consumer outcomes?",o:["Because culture is cheaper to implement than a compliance framework","Because rules can only set minimum standards, while a strong ethical culture motivates individuals to exceed those standards and do the right thing even in situations the rules do not specifically address","Because the FCA has abolished all rules in favour of cultural assessments","Because culture is easier to measure than compliance with specific rules"],a:1,e:"Rules set floors — the minimum acceptable standard. Culture determines what happens in the gaps between rules, in novel situations, and when no one is watching. A strong ethical culture motivates people to act in customers' interests consistently, not just when a specific rule applies. This is why the FCA increasingly focuses on firm culture as a driver of good outcomes."},

];

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const SR_INTERVALS = [1, 3, 7, 14, 30, 60];
const STORAGE_KEY = 'ciiready_v6_progress';
const SEEN_KEY = 'ciiready_v6_seen';
const THEME_KEY = 'ciiready_theme';
const DAY_MS = 86400000;

const MODULES = [
  {num:1, name:"UK Financial Services Industry"},
  {num:2, name:"Consumers' Financial Needs"},
  {num:3, name:"Legal Concepts & Considerations"},
  {num:4, name:"Regulation of Financial Services"},
  {num:5, name:"The FCA & FCA Handbook"},
  {num:6, name:"AML, Data Protection & Complaints"},
  {num:7, name:"Advisers & the Advice Process"},
  {num:8, name:"Identifying Client Needs"},
  {num:9, name:"Senior Management & Conduct"},
  {num:10, name:"Ethics in Financial Services"},
];

// ─── MOCK EXAM DEFINITIONS ──────────────────────────────────────────────────
// Two fixed 50-question exams, 60 minutes each (proportional to real 100q/120min).
// Questions drawn proportionally across modules. Pass mark: 65% (matching real exam).
const MOCK_EXAM_TIME = 60 * 60; // 60 minutes in seconds
const MOCK_PASS_MARK = 65;
const LOGO_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAQ80lEQVR42rVbfYxc1XX/nXPve2/2y7vr9cfu2kACKCjG2DFrm0IL5tt82QTCQJQQpY1oSSu1KK1SKW1TK0CLWtFGVVXUKqoUQZOKuhBs82koiaGYOJgFzGcgGPD3+nPt3Z2P9+49p3+8mdk3s7O7XkyfNNqZN3fuu+eec8/5nd85S8he+bzB+vWeAfRfeOvqQhyvdd4PqKJPVBkCAAowAQBUAIKO/75yH6IAc+W9QAFQ5jNAlbEKeIESQGzSz6Lp39qYdL50DgKBICJghhrmocAG2y0lGw5u3/S0KADkDbDeV5dEGekMsN73nX/9xaOe71HwKiGCZh8INLyv3tLKrez9JuMmXJoOq24SceWeNixPAaKm8xMxoA7WYGtHzn5/78s/ez4rpKlqjt5Z7+cuX/vdMWd/6mE+p+IU6mVcQ5p5Nfs83Zhmr0kERea9Zu9J/XdQhXhRgATB6bGnb7b3nhkXDzz2AvJ5g3feUaqaZc/S1d8tc9vfO5cIpSoxU29+dVen+B6YekwThWIGwxue5xWACQLTatxfHNq+6T7k84YAYN6KGy4ci2mreHUgmOqqCAqdYI5Zk5pOQJq44EbBJ2zENFJO+bUqlLwNA9sZYdWelx99gdetW8elWP9BYUAklC5JK3NN8aDpNEMNwqmOaz372+x71Trraz5vk80aP7MEKDknOD5avD+fzxvz/mjLVUUffC/VMHM6w1SCzdDsptsUrZzH6rzVMSfzjGZjiRgqCrYLDhb9i1z05isg0swJPlmbb+IotP7WyWi8JtSnPXxNL1G2KDm+zYJ4pQro06slo1o6hd9+lhcRqTj4xK+0XjCnsvs0jYypihQKkGaOanZIGomnU0lzR6E1s1CaxA60Oi+BplwsQRWi0mO99wDbk3DgRCAmIqogD848UyvOtWqmAqj3leDNNXFqTiYzr6pUdt2ATLrJxOk+Vc9mLUxW90AA1andLRFESC1VwdbU2iNWd9xau4fU7VWV/ST2UJizCcSjFLuAwPOUaKGonKXA6QgiIyKAeEDVpwJQfdwiMmQCw0SALwqz2WXAO0WSXQAO5SLrBICLJVD1c0Hcr8wLnXMLhMwsmkYnZAg2xXuE5t5BBWQ5NPr+2e3xpYMvPrk/+20WemavL67K9x4YdVcnPvm6sr3KkzFwsWTMSsmGxkgZRsubbZT7j1lkN3+8bdNQdp6xSeb/wkVX9u8vtP08EfoC1EkF4zVz97CTHwxVBSWqaoPAHnztxWf2z1527bcdgrVQnufVdxnmdgDwIqMAhpmw21rz2sGx4pbhwccfVMWDfRflzxkdK97rjLmlimuJiEKWR3racut2vvTI20SAXXnjpbMHbvzDJEmWEJvThUw3E9pUBCIyamwwDPiDVpONH2x96l97Vtw8VC75sxjkAISooWGpxG+CqmYFpIyQCgLI2CACW0DKczxAPRTcEmvuCvgyQAbO1Y7PfADwoAHn+MtQRdvStUPW8MMt8fH7972xOT9vxdqvjyX87xBBjkvfOjK4+afdF6yZ3zXw5R+6JPnqaJl6YQIoG4hzUJdAFeCAYcJgfuwEsBGYEHrg3+ZJMi8Ic0bEG3WuktoQFDwujwAWAoA1A8tUVQlMcqw99N9vb2v9AD4ZYUBnEw+TT7zCeygsVTUuLgPiSAFlx2a+B//JkIR/MHv5mrsPvbLxvs7zVu8CgKOvb36xZ+m1f36wpH+tHLSJF2i5KJCCcGDJdrQg7JpFuf4etJ/Zi+ODv8Gxt/Y422YMMw8zoGe129/tNFHH6Fjh7BOxu1vZ9lSWQLUzyARbFbgGy5Q8W2tbrdx3YNuGBxZdffvZZDvLCgDiWWFNGibAkwdxAtSrOvGOKKeS+9uOJdecObzj6d8HgFlL1/yoZKI7fFwGuaIL2nMm6OriqLeTo/ndiObMAreEtUXGI2WQMayAEfWsAKKoc6/CRQe2Pfpsz4obW0vO3i9J7NJjN37cbLM8j4iRawl3f/OudV2btr75QWCwwwBLBUInj/qJQLAEqMRFUZO7o3vJVf8EADHbOySJHROM92LbPz8HPZedB+89NAHUC3zswEzwIwXER0fAxlTDERkAh4ePP54ILbnrrnXdGwbf21MecxO9CAm40XtqDZSoXdTf6p0TTRIfV/xmc8g2GTCuqjPNSgWUU5BT9U4ANQoQBwbHdnyMIy+8DSkkkKRyngCQNXAjRbhCnD46Y4GJl9iJaH9/q3debb1wNWvMrpga8DRVwyPxtCiOpknyUgICiKsOj7MZFylh5N090CQBWaQsggJEhPKhE2mcoImrrEEvUkUzGCxVlSg1aEHrFCQ6SQZTy+UmgaYTEFtYhYoV9ECQxMG0Rui/8bfSc+cVtiVKp/aC8sHjDchvnC3QabaYmMAqqMuQqEESynA/NGkmMAHrQhMPHye17yfsbkU4jgL0Xj8A090KUgKVHUbe+BA2MJAkQfnoCMhwbU06jaVkKRAFYIlp3Iia7IdWQmddqJwS0zFcoYhZ5yyAbYlw9PWPYFvDyu+EoJ5gCRo7cGDRd90A7NxZqSaJMLTlbYy8txtzyg7tZ82HGy2BjGny3AbroGaZjVQDvdbTRtNm65ML54tltJ0xF/MuWwyOLFQEx3Z8gqC9Bc65pKUzSuLjDmQYvdctQ9TfDV+MYQOD/U+9jsInhxB2d+LY9p0ofHxwAgojpsmQ58RFCsBa5Slnkplpc3v3pTJa+rvQe+0yiGEkpQRzLj0XXYtPV19MMHve7NnFo+VVQha9q5dK7rQe+GKMIAyw7/FBJMOj6L10MXw5BlmD8qHRcf9ADcRas3xnwjHgrIlqFgRMjBtTmiXBlxJEczrQe90AYA3UA2QD+DjB3MsWk3jBwff2bKAg1z3/8kVo+fx89oUybBTiwLNvoHzoBM64/WIUdh+BegEFCrIZ2KUzNyqqgW3VU8meIWWHaHY7+m5YDoQmBWujJbixEnKn9cDFCc2/cgmGiOe29nej7Zw+JGNlCqIIR154G8ff3IXTbr0Q3NUK2TlUwQg07id1MuPRKfJohYqHTWl2qiSumUE+64ypudUzQ+IEtiOHvhsGwG0R4Dw0dhh65jWUTxSx4PrzES3sgYsTzLviXFVVuEJMNhfhyEvv4djrH8O251KtOwFzE69LWa548uBAjZIywLUaQd1cWufyJ7FLSOJhWiP0XX8+aFYO4hUExr4nBlE6fAJQxb6nXkN571GYMICPHYnzZHMBhre9j6OvfgjTEkJVK2QFQae1Q2oer5sEAWIDJuIGxaaXN5M7FHAa5zi06F+zAsGcTmjsYUSxd9MrkFIC25ZL46Hz2P/kYCpkFMCGIYZf+RCHt30AkwsrzEPVB86UfJraOaoouEqdNP7QTMqcEeAEZBm91yyFndMOiR0CG2DfYy9DymX0Xb0U4gRQBRsDSTz2PzWI5OBxf+LNXXJo6/swUdBQZKHmS60zzeZUtEEz800rWXbcQ01y1qjhh5JyHX1rVyDs74IbixFGAQ48uwNJIcYZX7sE8YkC1HmQ4ZQXsAYSe+x98k0Dl8AE3OAPdHol6eREnc+IT5lNS02UqblwfvJgI6ooHToOKCHIhTj0/BsYfnMn5l5yHqijFZr4CZQ8G+MCV9jQHuCfidlNHlp1BsaqU3p3hcBqtfamzfTe5FGUxpdDP38L8AIpewy/uw+2JaykOpMCDZuL4u+gFAPc8seQBtqPtMYHTLl0ng5xUJYyy4SJ7GCqJ9bG3RKJejgiOBNFOPzSr0EE2FwEX46hIlAvRGn+V091EyEu2vaap9b6Y0cKVVVRzaDq7NEhuEppQKYNEzXakKu04TSeqlbFQQfZ0JKHBTFMEFRYMgY5BYc5cGsLlE0KqhRS81eqAItU+brKwhUKDwXDGDatrcZEEchYcBBCxY9TYFALE0Kl1DFRIAZNwHAEaNXJQOsLmtoI6VifW7XK5k+4FyK4nQT/oWE/7BUj4mIftea6CqPF7pwmZ4SF0rnlculcNmYOOGD1CVTFEZPNQigBPECWbWhZYphS6XA4VnjLi7wdaeGTKAiHC6NjRwNrjTHU6YU6VeksC7/3uVWrbL7A6rziMKp72fxkjJtoY+bhx8vm6r1esWWLE+Deqi/zqnTnnXe2FAodtHbtrtJXb3vW//r9Z9Pjy4R5K278nWLivxE7fytM2AV1IKaq0SkbtiTJiYDMwy0d/ODOf/yb//Vea4Tyjx7Om40b5+UA4KGH1pYM3eqrer8CQOfym3SiUWacPqV6t81zwPQ6elQZqm6sXF7UuXTNvyjzXOfc2ao6t33JmnYiRKqKR9+guPW8NaOAHDCMd40JnpvfHTz5+tPr7xwYGPjOR7rwnljMn4pLLACYgMmQ/+GituF1W7duHem/Oj87Xrb2G0mSXCGKcwHT93v3FNuBsRDEaF/6UNyy+LpRYjrCbD4wJAeLxeKiMMi540d1IlFUEU5RI34b4BqlXnTf6G5LbCwF7e2xtX+kqkCoaWtIfexq8UAniBYI8YAjc/tvDhQx60trth2w5gfHtj32Z3OXrd6iEY2hVEYL000HXn3qsY8uuOmqzi+t+cEnQ+ULEbYBNgXIaT1Gx88/oQUcdRLzAiFa4olBQQI2iuLosDWGAZL64lKF67LaYL2EFBc65/gnDzxwZO7yNd8LgkAJsfPwxCACK0nqsSnra5lIAVKRAgRiYXIdSrJiyeXX73jj+Sc2Zh7z4bIr1/YPjdAFNrC/oKS0yfiRhDkAjBJUaWIfiQeIVETVsFENyDLF/JMH/u7I/Au+Qs3yQQJAbUtu2C0wC1OkTFQpuBBrsnVWSF/b/+rjuz6bqmTeAOsr25znbLPOqVxnXXzjaQeOJf8pHFwE9VprtiEiFr8nFVDNwgp3RtlsgVULqjIsUGpsG6EpsEVKtpKCNOkIcdvQq0/8CqtW1Rcht2xxCweuX3m0jIdFKWBSkkoRtnZgVLMFqWZxT5lMlydqhfr6hImYWJI91Lb4ht3CvHBiQVEFYJ5Zn0u2JUQBsmAk+1qNfOvw4BPPZKH1nKXXXF3U4MeebF+V6P10vTVa6Q+rI29SDUL2jJuoSjO0reOEiJ4cNKT64wxmZgIM6S9Co68SMcoOy5yXyyUN0JWykOrUHMRka2haLlcQkSHZY1W0KSNflx+d7M5SE1JEVUUBYXup83RpBsloij4qO1+1xcYOqrpNm1m+qCqwTEoeMrMGo5m1XKUjJfFaay5QApH5zLormq5HQSLEzPZIWqJokpRlGojqqAs6iaxlIlFrQLDpa4o+uGbamzkppgDBsBlmY81rSqxNl0kz0tFn2/rS2Gg01SbSRK6CmTSIgkEO2f03qSNtuiT99CZz6s089a1aNKOHEMSTgf8v/vZ1J542jEEyIUPVfyZq+Iwbl2bUWaXqYQKypDsu+VxuMwFA74U3XzJS1C3eOUek5tTbujB9P+n/y6WqSt6GoZ0V4cp9Lz/yPwb5vBl95pGPO+ef6b3NXakiUlldmtwQTkGLdHIeT09R6yns8SAo28C2aGnd0PaNP0Y+bwzeeUeRz5vi8xu2dC78YuzBVymYK4FfTl0LNI35Tqbpk5K62gpGYMPGWm4h/1eHX3/83mon84Sm9AUr11w+EtPdXvm3pZL2T/9wbVKBpZMMWk0a0OuGTYJFKwCL2IAgsOp+mYv4L4d+ten5qnATV1H9twICepbfvLrsklvUy0oBdUNQqegrtJp4MFf+TaDCdoumTXRMSMtyWuvF08o4qrSO1X0WrdVA0nYFrQGhhkSuVodkUoX6IyaItrdZ/tmeXz76FBE0KxwA/B9Jy6XBTI5b0AAAAABJRU5ErkJggg==';
const MOCK_RESULTS_KEY = 'ciiready_mock_results';

function buildMockExam(examId) {
  // Deterministic selection based on examId for fixed exams
  const seed = examId === 'A' ? 1 : 2;
  const perModule = [7, 5, 6, 4, 5, 4, 5, 4, 5, 5]; // = 50 total, roughly proportional
  const selected = [];
  MODULES.forEach((mod, mi) => {
    const modQs = QUESTIONS.filter(q => q.m === mod.num);
    // Deterministic shuffle: sort by (id * seed) mod large prime
    const sorted = [...modQs].sort((a, b) => ((a.id * seed * 7919) % 104729) - ((b.id * seed * 7919) % 104729));
    selected.push(...sorted.slice(0, perModule[mi]));
  });
  // Deterministic order
  return selected.sort((a, b) => ((a.id * seed * 6271) % 99991) - ((b.id * seed * 6271) % 99991));
}

const MOCK_EXAMS = {
  A: { id: 'A', name: 'Mock Exam A', questions: buildMockExam('A') },
  B: { id: 'B', name: 'Mock Exam B', questions: buildMockExam('B') },
};

function loadMockResults() {
  try { return JSON.parse(localStorage.getItem(MOCK_RESULTS_KEY) || '{}'); } catch { return {}; }
}
function saveMockResults(r) {
  try { localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(r)); } catch {}
}

// ─── THOUGHT LEADERS & RESOURCES ────────────────────────────────────────────
const THOUGHT_LEADERS = [
  { cat: 'Podcasts', name: 'Maven Money', desc: 'Andy Hart on personal finance, behavioural investing and financial planning strategies', url: 'https://www.mavenadviser.com/podcast', tag: 'Personal finance' },
  { cat: 'Podcasts', name: 'Financial Planner Life', desc: 'Real stories from financial planners — career journeys, exam tips and what the profession is really like', url: 'https://financialplannerlife.com', tag: 'Career stories' },
  { cat: 'Podcasts', name: 'The Lang Cat', desc: 'Sharp platform and investment analysis for UK financial advisers and paraplanners', url: 'https://langcatfinancial.com', tag: 'Platform insight' },
  { cat: 'Podcasts', name: 'NextGen Planners Podcast', desc: 'Interviews with entrepreneurs and thought leaders in financial planning', url: 'https://www.nextgenplanners.co.uk', tag: 'Thought leadership' },
  { cat: 'Career & Community', name: 'NextGen Planners', desc: 'The UK\'s most engaged community for new-to-profession financial planners — training, events and peer support', url: 'https://www.nextgenplanners.co.uk', tag: 'Community' },
  { cat: 'Career & Community', name: 'Paraplanners\' Assembly', desc: 'Where paraplanners gather to learn, fix and share — online events, CPD and The Big Tent forum', url: 'https://paraplannersassembly.co.uk', tag: 'Paraplanning' },
  { cat: 'Career & Recruitment', name: 'Recruit UK', desc: 'Specialist financial services recruitment across advice, paraplanning and compliance', url: 'https://recruituk.co.uk', tag: 'Jobs' },
  { cat: 'Professional Bodies', name: 'Personal Finance Society', desc: 'The professional body for financial planning professionals in the UK — part of the CII group', url: 'https://www.thepfs.org', tag: 'Professional body' },
  { cat: 'Professional Bodies', name: 'CISI', desc: 'Chartered Institute for Securities & Investment — qualifications, CPD and membership', url: 'https://www.cisi.org', tag: 'Qualifications' },
  { cat: 'Reference', name: 'FCA Handbook', desc: 'The primary source — free access to every FCA rule, principle and sourcebook', url: 'https://www.handbook.fca.org.uk', tag: 'Regulation' },
  { cat: 'Reference', name: 'Boring Money', desc: 'Consumer insight and industry commentary that makes financial services accessible', url: 'https://boringmoney.co.uk', tag: 'Industry insight' },
  { cat: 'Reference', name: 'Humans Under Management', desc: 'Andy Hart\'s conference and community — where financial planners meet to think differently', url: 'https://www.humansundermanagement.com', tag: 'Events' },
];

// ─── SPACED REPETITION ENGINE ────────────────────────────────────────────────
const NEW_PER_DAY = 15; // Max new (unseen) questions introduced per session

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}
function loadSeen() {
  try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')); } catch { return new Set(); }
}
function saveSeen(s) {
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...s])); } catch {}
}
function getState(id, progress) {
  return progress[id] || { level: 0, nextReview: 0 };
}
function updateState(id, correct, progress) {
  const now = Date.now();
  const p = { ...progress };
  const cur = getState(id, p);
  const newLevel = correct ? Math.min(cur.level + 1, 5) : 0;
  p[id] = { level: newLevel, nextReview: now + SR_INTERVALS[newLevel] * DAY_MS };
  return p;
}

// Reviews: questions you've seen before that are due again
function getReviewsDue(progress, seen, filterModule) {
  const now = Date.now();
  return QUESTIONS.filter(q => {
    if (filterModule && q.m !== filterModule) return false;
    if (!seen.has(q.id)) return false; // not a review if never seen
    const s = getState(q.id, progress);
    return s.nextReview <= now && s.level < 5;
  });
}

// New: questions you haven't seen yet (capped)
function getNewAvailable(seen, filterModule) {
  return QUESTIONS.filter(q => {
    if (filterModule && q.m !== filterModule) return false;
    return !seen.has(q.id);
  });
}

// Legacy compat — returns all actionable questions (reviews + all unseen)
function getDueQuestions(progress, seen, filterModule) {
  return [...getReviewsDue(progress, seen, filterModule), ...getNewAvailable(seen, filterModule)];
}

// Build a session: all reviews + capped new questions, shuffled
function buildSession(progress, seen, filterModule) {
  const reviews = getReviewsDue(progress, seen, filterModule || null);
  const newPool = getNewAvailable(seen, filterModule || null);
  const newCapped = [...newPool].sort(() => Math.random() - 0.5).slice(0, NEW_PER_DAY);
  const combined = [...reviews, ...newCapped];
  return combined.sort(() => Math.random() - 0.5).slice(0, 20);
}

// ─── CSS ─────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg: #f7f8fa;
  --bg-card: #ffffff;
  --bg-elevated: #f0f2f5;
  --bg-hover: #e8ebf0;
  --text-primary: #0a2b4e;
  --text-secondary: #4a5e78;
  --text-tertiary: #7e8da3;
  --border: #dfe3ea;
  --border-subtle: #edf0f4;
  --accent: #309796;
  --accent-soft: rgba(48,151,150,0.08);
  --accent-hover: #278080;
  --navy: #0a2b4e;
  --navy-bg: #0a2b4e;
  --success: #12a150;
  --success-soft: rgba(18,161,80,0.08);
  --danger: #e5383b;
  --danger-soft: rgba(229,56,59,0.08);
  --warning: #e8a817;
  --warning-soft: rgba(232,168,23,0.08);
  --radius: 14px;
  --radius-sm: 8px;
  --shadow-sm: 0 1px 3px rgba(10,43,78,0.04);
  --shadow: 0 2px 8px rgba(10,43,78,0.06);
  --shadow-lg: 0 8px 24px rgba(10,43,78,0.08);
  --font: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --transition: 180ms ease;
}

[data-theme="dark"] {
  --bg: #0b1220;
  --bg-card: #111d30;
  --bg-elevated: #17263d;
  --bg-hover: #1e3049;
  --text-primary: #e8edf4;
  --text-secondary: #8899b0;
  --text-tertiary: #566a84;
  --border: #1e3049;
  --border-subtle: #17263d;
  --accent: #3fb5b4;
  --accent-soft: rgba(63,181,180,0.1);
  --accent-hover: #5ecfce;
  --navy: #e8edf4;
  --navy-bg: #0a2b4e;
  --success: #22c55e;
  --success-soft: rgba(34,197,94,0.1);
  --danger: #f87171;
  --danger-soft: rgba(248,113,113,0.1);
  --warning: #fbbf24;
  --warning-soft: rgba(251,191,36,0.1);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.2);
  --shadow: 0 2px 8px rgba(0,0,0,0.25);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.3);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.cr-app {
  min-height: 100vh;
  background: var(--bg);
  font-family: var(--font);
  color: var(--text-primary);
  transition: background var(--transition), color var(--transition);
  -webkit-font-smoothing: antialiased;
}

/* NAV */
.cr-nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; height: 56px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
}
.cr-nav-logo {
  display: flex; align-items: center; gap: 8px;
  background: none; border: none; cursor: pointer;
  font-family: var(--font); color: var(--text-primary);
  padding: 0;
}
.cr-nav-logo-mark {
  width: 28px; height: 28px; border-radius: 8px;
  object-fit: contain;
}
.cr-nav-logo-text { font-weight: 600; font-size: 16px; letter-spacing: -0.02em; }
.cr-nav-logo-badge {
  font-family: var(--mono); font-size: 10px; font-weight: 500;
  color: var(--text-tertiary); background: var(--bg-elevated);
  padding: 2px 7px; border-radius: 4px;
}
.cr-nav-actions { display: flex; align-items: center; gap: 8px; }
.cr-nav-due {
  font-size: 13px; font-weight: 500; color: var(--accent);
  background: var(--accent-soft); border: none; cursor: pointer;
  padding: 6px 14px; border-radius: 20px; font-family: var(--font);
  transition: all var(--transition);
}
.cr-nav-due:hover { background: var(--accent); color: #fff; }
.cr-theme-btn {
  width: 32px; height: 32px; border-radius: 8px;
  background: var(--bg-elevated); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; transition: all var(--transition);
  color: var(--text-secondary);
}
.cr-theme-btn:hover { background: var(--bg-hover); }

/* MAIN */
.cr-main { max-width: 960px; margin: 0 auto; padding: 32px 24px 80px; }

/* DASHBOARD HERO */
.cr-hero {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 32px; margin-bottom: 32px; flex-wrap: wrap;
}
.cr-hero-greeting { font-size: 13px; font-weight: 500; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; font-family: var(--mono); }
.cr-hero-title { font-size: 32px; font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; }
.cr-hero-title em { font-style: normal; color: var(--accent); }

/* STATS */
.cr-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 32px; }
.cr-stat {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
  transition: all var(--transition);
}
.cr-stat:hover { border-color: var(--accent); box-shadow: var(--shadow); }
.cr-stat-value { font-size: 28px; font-weight: 700; letter-spacing: -0.02em; line-height: 1; margin-bottom: 4px; }
.cr-stat-label { font-size: 12px; color: var(--text-tertiary); font-weight: 500; }
.cr-stat--accent .cr-stat-value { color: var(--accent); }

/* START CARD */
.cr-start {
  background: var(--navy-bg); border-radius: var(--radius); padding: 24px 28px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 20px; margin-bottom: 32px; flex-wrap: wrap;
  box-shadow: 0 4px 16px rgba(10,43,78,0.25);
}
.cr-start-text { color: #fff; }
.cr-start-title { font-size: 18px; font-weight: 600; margin-bottom: 2px; }
.cr-start-sub { font-size: 13px; opacity: 0.7; }
.cr-start-btn {
  background: var(--accent); color: #fff; border: none;
  font-family: var(--font); font-size: 14px; font-weight: 600;
  padding: 10px 24px; border-radius: 10px; cursor: pointer;
  transition: all var(--transition); flex-shrink: 0;
}
.cr-start-btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-lg); }

/* SECTION LABEL */
.cr-section-label {
  font-size: 12px; font-weight: 600; color: var(--text-tertiary);
  text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px;
  font-family: var(--mono);
}

/* MODULE GRID */
.cr-modules { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px; margin-bottom: 40px; }
.cr-module {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
  cursor: pointer; transition: all var(--transition);
  position: relative; overflow: hidden;
}
.cr-module:hover { border-color: var(--accent); box-shadow: var(--shadow); transform: translateY(-1px); }
.cr-module-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.cr-module-num { font-family: var(--mono); font-size: 11px; color: var(--text-tertiary); font-weight: 500; }
.cr-module-due {
  font-size: 10px; font-weight: 600; color: var(--accent);
  background: var(--accent-soft); padding: 2px 8px; border-radius: 10px;
}
.cr-module-name { font-size: 14px; font-weight: 500; margin-bottom: 14px; line-height: 1.35; }
.cr-module-bar { height: 3px; background: var(--bg-elevated); border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
.cr-module-bar-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width 0.5s ease; }
.cr-module-meta { display: flex; justify-content: space-between; align-items: center; }
.cr-module-pct { font-size: 12px; font-weight: 600; color: var(--accent); }
.cr-module-count { font-family: var(--mono); font-size: 11px; color: var(--text-tertiary); }

/* SESSION */
.cr-session-header { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
.cr-back {
  background: var(--bg-card); border: 1px solid var(--border);
  width: 36px; height: 36px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 16px; color: var(--text-secondary);
  transition: all var(--transition);
}
.cr-back:hover { border-color: var(--accent); color: var(--accent); }
.cr-progress-bar { flex: 1; }
.cr-progress-track { height: 4px; background: var(--bg-elevated); border-radius: 4px; overflow: hidden; }
.cr-progress-fill { height: 100%; background: var(--accent); border-radius: 4px; transition: width 0.4s ease; }
.cr-progress-label { font-family: var(--mono); font-size: 11px; color: var(--text-tertiary); margin-top: 6px; text-align: right; }

/* QUESTION CARD */
.cr-qcard {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 32px;
  box-shadow: var(--shadow);
}
.cr-qcard-meta { display: flex; gap: 8px; align-items: center; margin-bottom: 20px; flex-wrap: wrap; }
.cr-qcard-tag {
  font-family: var(--mono); font-size: 11px; font-weight: 500;
  padding: 3px 10px; border-radius: 6px;
  background: var(--bg-elevated); color: var(--text-secondary);
}
.cr-qcard-diff { font-family: var(--mono); font-size: 10px; font-weight: 600; padding: 3px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.06em; }
.cr-diff-1 { background: var(--success-soft); color: var(--success); }
.cr-diff-2 { background: var(--warning-soft); color: var(--warning); }
.cr-diff-3 { background: var(--danger-soft); color: var(--danger); }
.cr-qcard-level { font-family: var(--mono); font-size: 10px; color: var(--text-tertiary); margin-left: auto; }
.cr-qcard-text { font-size: 19px; font-weight: 500; line-height: 1.5; margin-bottom: 28px; letter-spacing: -0.01em; }

/* OPTIONS */
.cr-options { display: flex; flex-direction: column; gap: 8px; }
.cr-option {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 14px 18px; border: 1px solid var(--border);
  background: var(--bg-card); border-radius: var(--radius-sm);
  cursor: pointer; transition: all var(--transition);
  font-family: var(--font); font-size: 15px; text-align: left; width: 100%;
  color: var(--text-primary);
}
.cr-option:hover:not(:disabled) { border-color: var(--accent); background: var(--accent-soft); }
.cr-option-letter {
  width: 26px; height: 26px; border-radius: 7px;
  background: var(--bg-elevated); display: flex;
  align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 12px; font-weight: 600;
  color: var(--text-secondary); flex-shrink: 0;
  transition: all var(--transition);
}
.cr-option:hover:not(:disabled) .cr-option-letter { background: var(--accent); color: #fff; }
.cr-option-text { flex: 1; line-height: 1.5; padding-top: 2px; }
.cr-option--correct { border-color: var(--success) !important; background: var(--success-soft) !important; }
.cr-option--correct .cr-option-letter { background: var(--success) !important; color: #fff !important; }
.cr-option--wrong { border-color: var(--danger) !important; background: var(--danger-soft) !important; }
.cr-option--wrong .cr-option-letter { background: var(--danger) !important; color: #fff !important; }

/* EXPLANATION */
.cr-explain { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border); }
.cr-explain-result { font-size: 14px; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
.cr-explain-correct { color: var(--success); }
.cr-explain-wrong { color: var(--danger); }
.cr-explain-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
.cr-next {
  background: var(--accent); color: #fff; border: none;
  font-family: var(--font); font-size: 14px; font-weight: 600;
  padding: 12px 28px; border-radius: 10px; cursor: pointer;
  transition: all var(--transition);
}
.cr-next:hover { background: var(--accent-hover); transform: translateY(-1px); }

/* SUMMARY */
.cr-summary {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 40px 36px; max-width: 640px;
  box-shadow: var(--shadow);
}
.cr-summary-score { font-size: 56px; font-weight: 700; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; }
.cr-summary-title { font-size: 24px; font-weight: 600; margin-bottom: 4px; }
.cr-summary-meta { font-family: var(--mono); font-size: 12px; color: var(--text-tertiary); margin-bottom: 28px; }
.cr-summary-actions { display: flex; gap: 10px; margin-bottom: 32px; flex-wrap: wrap; }
.cr-btn-outline {
  background: var(--bg-card); color: var(--text-primary);
  border: 1px solid var(--border); font-family: var(--font);
  font-size: 14px; font-weight: 500; padding: 10px 24px;
  border-radius: 10px; cursor: pointer; transition: all var(--transition);
}
.cr-btn-outline:hover { border-color: var(--accent); }
.cr-btn-accent {
  background: var(--accent); color: #fff; border: none;
  font-family: var(--font); font-size: 14px; font-weight: 600;
  padding: 10px 24px; border-radius: 10px; cursor: pointer;
  transition: all var(--transition);
}
.cr-btn-accent:hover { background: var(--accent-hover); }
.cr-summary-list { display: flex; flex-direction: column; gap: 6px; }
.cr-summary-row {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: var(--radius-sm);
  background: var(--bg-elevated);
}
.cr-summary-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.cr-summary-q { font-size: 13px; flex: 1; line-height: 1.35; }
.cr-summary-interval { font-family: var(--mono); font-size: 11px; color: var(--text-tertiary); flex-shrink: 0; }

/* HOW IT WORKS */
.cr-how { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 40px; }
.cr-how-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
}
.cr-how-icon { font-size: 18px; margin-bottom: 8px; }
.cr-how-title { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
.cr-how-desc { font-size: 12px; color: var(--text-tertiary); line-height: 1.5; }

/* MOCK EXAM CARDS */
.cr-mocks { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px; margin-bottom: 40px; }
.cr-mock-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 22px 24px;
  cursor: pointer; transition: all var(--transition);
}
.cr-mock-card:hover { border-color: var(--accent); box-shadow: var(--shadow); transform: translateY(-1px); }
.cr-mock-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.cr-mock-badge {
  font-family: var(--mono); font-size: 10px; font-weight: 600;
  padding: 3px 10px; border-radius: 6px; text-transform: uppercase;
  letter-spacing: 0.06em;
}
.cr-mock-badge--new { background: var(--accent-soft); color: var(--accent); }
.cr-mock-badge--pass { background: var(--success-soft); color: var(--success); }
.cr-mock-badge--fail { background: var(--danger-soft); color: var(--danger); }
.cr-mock-name { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.cr-mock-info { font-size: 13px; color: var(--text-tertiary); margin-bottom: 14px; }
.cr-mock-start {
  display: inline-block; background: var(--accent); color: #fff; border: none;
  font-family: var(--font); font-size: 13px; font-weight: 600;
  padding: 8px 20px; border-radius: 8px; cursor: pointer;
  transition: all var(--transition);
}
.cr-mock-start:hover { background: var(--accent-hover); }
.cr-mock-best { font-family: var(--mono); font-size: 12px; color: var(--text-tertiary); margin-top: 10px; }

/* TIMER */
.cr-timer {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--mono); font-size: 14px; font-weight: 600;
  padding: 6px 14px; border-radius: 8px;
  background: var(--bg-elevated); color: var(--text-primary);
  border: 1px solid var(--border);
}
.cr-timer--warning { background: var(--warning-soft); color: var(--warning); border-color: var(--warning); }
.cr-timer--danger { background: var(--danger-soft); color: var(--danger); border-color: var(--danger); animation: cr-pulse 1s ease infinite; }
@keyframes cr-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
.cr-timer-icon { font-size: 14px; }

/* MOCK EXAM SESSION - no explanations during exam */
.cr-mock-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 28px; flex-wrap: wrap; }
.cr-mock-nav-left { display: flex; align-items: center; gap: 12px; }
.cr-mock-nav-right { display: flex; align-items: center; gap: 12px; }
.cr-mock-submit {
  background: var(--success); color: #fff; border: none;
  font-family: var(--font); font-size: 13px; font-weight: 600;
  padding: 8px 20px; border-radius: 8px; cursor: pointer;
  transition: all var(--transition);
}
.cr-mock-submit:hover { opacity: 0.9; }
.cr-mock-flag { font-size: 12px; color: var(--warning); cursor: pointer; background: var(--warning-soft); border: none; padding: 4px 10px; border-radius: 6px; font-family: var(--font); font-weight: 500; }

/* MOCK RESULTS */
.cr-mock-result { max-width: 700px; }
.cr-mock-result-header { margin-bottom: 32px; }
.cr-mock-result-pct { font-size: 64px; font-weight: 700; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; }
.cr-mock-result-verdict { font-size: 20px; font-weight: 600; margin-bottom: 4px; }
.cr-mock-result-meta { font-family: var(--mono); font-size: 12px; color: var(--text-tertiary); margin-bottom: 8px; }
.cr-mock-result-time { font-family: var(--mono); font-size: 12px; color: var(--text-tertiary); }
.cr-mock-review-toggle {
  background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border);
  font-family: var(--font); font-size: 13px; font-weight: 500;
  padding: 8px 20px; border-radius: 8px; cursor: pointer; margin-bottom: 20px;
  transition: all var(--transition);
}
.cr-mock-review-toggle:hover { border-color: var(--accent); }

/* THOUGHT LEADERS */
.cr-leaders { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; margin-bottom: 40px; }
.cr-leader {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
  transition: all var(--transition); text-decoration: none; color: inherit;
  display: block;
}
.cr-leader:hover { border-color: var(--accent); box-shadow: var(--shadow); transform: translateY(-1px); }
.cr-leader-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.cr-leader-cat { font-family: var(--mono); font-size: 10px; color: var(--text-tertiary); font-weight: 500; }
.cr-leader-tag { font-size: 10px; font-weight: 600; color: var(--accent); background: var(--accent-soft); padding: 2px 8px; border-radius: 10px; }
.cr-leader-name { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.cr-leader-desc { font-size: 12px; color: var(--text-tertiary); line-height: 1.5; }
.cr-leader-link { font-size: 11px; color: var(--accent); margin-top: 8px; display: inline-block; }

/* DISCLAIMER */
.cr-disclaimer {
  font-size: 11px; color: var(--text-tertiary); line-height: 1.6;
  padding: 16px 20px; background: var(--bg-elevated);
  border-radius: var(--radius-sm); margin-top: 20px; margin-bottom: 40px;
}

/* RESPONSIVE */
@media (max-width: 680px) {
  .cr-nav { padding: 0 16px; }
  .cr-main { padding: 20px 16px 60px; }
  .cr-stats { grid-template-columns: repeat(2, 1fr); }
  .cr-modules { grid-template-columns: 1fr; }
  .cr-mocks { grid-template-columns: 1fr; }
  .cr-leaders { grid-template-columns: 1fr; }
  .cr-how { grid-template-columns: 1fr; }
  .cr-hero-title { font-size: 26px; }
  .cr-qcard { padding: 24px 20px; }
  .cr-qcard-text { font-size: 17px; }
  .cr-summary { padding: 28px 24px; }
  .cr-start { flex-direction: column; align-items: stretch; text-align: center; }
  .cr-mock-nav { flex-direction: column; align-items: stretch; }
  .cr-mock-nav-right { justify-content: space-between; }
}
`;

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function CIIReady() {
  const [view, setView] = useState('dashboard');
  const [progress, setProgress] = useState(() => loadProgress());
  const [seen, setSeen] = useState(() => loadSeen());
  const [sessionQ, setSessionQ] = useState([]);
  const [sessionIdx, setSessionIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [sessionResults, setSessionResults] = useState([]);
  const [filterModule, setFilterModule] = useState(null);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) === 'dark'; } catch { return false; }
  });

  // Mock exam state
  const [mockId, setMockId] = useState(null);
  const [mockAnswers, setMockAnswers] = useState({});
  const [mockTimeLeft, setMockTimeLeft] = useState(MOCK_EXAM_TIME);
  const [mockStartTime, setMockStartTime] = useState(null);
  const [mockSubmitted, setMockSubmitted] = useState(false);
  const [mockReviewIdx, setMockReviewIdx] = useState(null);
  const [mockResults, setMockResults] = useState(() => loadMockResults());
  const mockTimerRef = useRef(null);

  // Computed values — separate reviews from new
  const reviews = getReviewsDue(progress, seen, null);
  const newAvailable = getNewAvailable(seen, null);
  const newToday = Math.min(newAvailable.length, NEW_PER_DAY);
  const todayTotal = reviews.length + newToday;
  const totalSeen = seen.size;
  const totalMastered = QUESTIONS.filter(q => (getState(q.id, progress).level || 0) >= 5).length;
  const overallPct = QUESTIONS.length > 0 ? Math.round(totalMastered / QUESTIONS.length * 100) : 0;
  const isFirstVisit = totalSeen === 0;
  const isCaughtUp = reviews.length === 0 && newAvailable.length === 0;

  // Timer effect for mock exams
  useEffect(() => {
    if (view === 'mock-session' && !mockSubmitted && mockTimeLeft > 0) {
      mockTimerRef.current = setInterval(() => {
        setMockTimeLeft(t => {
          if (t <= 1) {
            clearInterval(mockTimerRef.current);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(mockTimerRef.current);
    }
  }, [view, mockSubmitted, mockTimeLeft]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (view === 'mock-session' && !mockSubmitted && mockTimeLeft === 0) {
      submitMockExam();
    }
  }, [mockTimeLeft]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try { localStorage.setItem(THEME_KEY, next ? 'dark' : 'light'); } catch {}
  }

  function startSession(mod) {
    const session = buildSession(progress, seen, mod || null);
    if (session.length === 0) return;
    setSessionQ(session);
    setSessionIdx(0);
    setChosen(null);
    setSessionResults([]);
    setFilterModule(mod || null);
    setView('session');
  }

  function handleAnswer(idx) {
    if (chosen !== null) return;
    setChosen(idx);
    const q = sessionQ[sessionIdx];
    const correct = idx === q.a;
    const newProgress = updateState(q.id, correct, progress);
    const newSeen = new Set(seen);
    newSeen.add(q.id);
    setProgress(newProgress);
    setSeen(newSeen);
    saveProgress(newProgress);
    saveSeen(newSeen);
    setSessionResults(r => [...r, { q, chosen: idx, correct }]);
  }

  function nextQuestion() {
    if (sessionIdx + 1 >= sessionQ.length) {
      setView('summary');
    } else {
      setSessionIdx(i => i + 1);
      setChosen(null);
    }
  }

  // ─── MOCK EXAM FUNCTIONS ─────────────────────────────────────────────────
  function startMockExam(id) {
    setMockId(id);
    setMockAnswers({});
    setMockTimeLeft(MOCK_EXAM_TIME);
    setMockStartTime(Date.now());
    setMockSubmitted(false);
    setMockReviewIdx(null);
    setSessionIdx(0);
    setView('mock-session');
  }

  function handleMockAnswer(qIdx, optIdx) {
    if (mockSubmitted) return;
    setMockAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  }

  function submitMockExam() {
    if (mockTimerRef.current) clearInterval(mockTimerRef.current);
    const exam = MOCK_EXAMS[mockId];
    const timeTaken = MOCK_EXAM_TIME - mockTimeLeft;
    let correct = 0;
    exam.questions.forEach((q, i) => {
      if (mockAnswers[i] === q.a) correct++;
    });
    const pct = Math.round((correct / exam.questions.length) * 100);
    const result = {
      pct, correct, total: exam.questions.length,
      passed: pct >= MOCK_PASS_MARK,
      timeTaken, date: new Date().toISOString(),
      answers: { ...mockAnswers },
    };
    const updated = { ...mockResults };
    if (!updated[mockId]) updated[mockId] = [];
    updated[mockId].push(result);
    setMockResults(updated);
    saveMockResults(updated);
    setMockSubmitted(true);
    setView('mock-result');
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  const currentQ = sessionQ[sessionIdx];
  const mockExam = mockId ? MOCK_EXAMS[mockId] : null;
  const mockCurrentQ = mockExam ? mockExam.questions[sessionIdx] : null;

  return (
    <div className="cr-app" data-theme={dark ? 'dark' : 'light'}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="cr-nav">
        <button className="cr-nav-logo" onClick={() => setView('dashboard')}>
          <img className="cr-nav-logo-mark" src={LOGO_URL} alt="CIIReady" />
          <span className="cr-nav-logo-text">CIIReady</span>
          <span className="cr-nav-logo-badge">R01</span>
        </button>
        <div className="cr-nav-actions">
          {todayTotal > 0 && view === 'dashboard' && (
            <button className="cr-nav-due" onClick={() => startSession(null)}>
              {todayTotal} ready →
            </button>
          )}
          <button className="cr-theme-btn" onClick={toggleTheme} title="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* ═══════════════════════ DASHBOARD ═══════════════════════ */}
      {view === 'dashboard' && (
        <div className="cr-main">

          {/* ── FIRST VISIT: Method + Welcome ── */}
          {isFirstVisit && (
            <>
              <div style={{ marginBottom: 28 }}>
                <h1 className="cr-hero-title" style={{ marginBottom: 8 }}>
                  Pass R01 with <em>spaced repetition</em>
                </h1>
                <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 600 }}>
                  The same evidence-based method used by medical students and pilots. Instead of cramming, you review questions at optimised intervals — just as you're about to forget. Stronger recall, less study time.
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10, marginBottom: 28 }}>
                {[
                  { n: '01', t: 'Answer', d: 'Work through R01 questions at your own pace' },
                  { n: '02', t: 'Review', d: 'Got it right? It returns later. Wrong? Tomorrow.' },
                  { n: '03', t: 'Space', d: 'Intervals grow: 1 → 3 → 7 → 14 → 30 → 60 days' },
                  { n: '04', t: 'Master', d: 'Five correct reviews = locked in long-term memory' },
                ].map(s => (
                  <div key={s.n} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', padding: '16px 18px',
                  }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, color: 'var(--accent)', marginBottom: 6 }}>{s.n}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{s.t}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{s.d}</div>
                  </div>
                ))}
              </div>

              <div className="cr-start">
                <div className="cr-start-text">
                  <div className="cr-start-title">Begin with {Math.min(NEW_PER_DAY, QUESTIONS.length)} questions</div>
                  <div className="cr-start-sub">~{Math.ceil(Math.min(NEW_PER_DAY, QUESTIONS.length) * 1.2)} min · we'll introduce new ones each session</div>
                </div>
                <button className="cr-start-btn" onClick={() => startSession(null)}>
                  Start →
                </button>
              </div>
            </>
          )}

          {/* ── RETURNING USER: Session CTA ── */}
          {!isFirstVisit && (
            <>
              <div className="cr-hero">
                <div>
                  <div className="cr-hero-greeting">Today's revision</div>
                  <h1 className="cr-hero-title">
                    {isCaughtUp
                      ? <>All mastered. <em>Incredible.</em></>
                      : reviews.length > 0 && newToday > 0
                        ? <><em>{reviews.length}</em> to review, <em>{newToday}</em> new</>
                        : reviews.length > 0
                          ? <><em>{reviews.length}</em> review{reviews.length !== 1 ? 's' : ''} due</>
                          : <>{newToday} new question{newToday !== 1 ? 's' : ''} <em>ready</em></>
                    }
                  </h1>
                </div>
              </div>

              {/* Progress stats */}
              <div className="cr-stats">
                {[
                  { v: totalSeen, l: 'Seen', accent: false },
                  { v: totalMastered, l: 'Mastered', accent: false },
                  { v: overallPct + '%', l: 'Complete', accent: false },
                  { v: QUESTIONS.length - totalSeen, l: 'Remaining', accent: true },
                ].map(s => (
                  <div className={`cr-stat ${s.accent ? 'cr-stat--accent' : ''}`} key={s.l}>
                    <div className="cr-stat-value">{s.v}</div>
                    <div className="cr-stat-label">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Session start card */}
              {todayTotal > 0 && (
                <div className="cr-start">
                  <div className="cr-start-text">
                    <div className="cr-start-title">
                      {reviews.length > 0 && newToday > 0
                        ? `${reviews.length} review${reviews.length !== 1 ? 's' : ''} + ${newToday} new`
                        : reviews.length > 0
                          ? `${reviews.length} review${reviews.length !== 1 ? 's' : ''} due`
                          : `${newToday} new question${newToday !== 1 ? 's' : ''}`
                      }
                    </div>
                    <div className="cr-start-sub">~{Math.max(5, Math.ceil(Math.min(todayTotal, 20) * 1.2))} min · {reviews.length > 0 ? 'reviews first, then new material' : 'fresh questions from across the syllabus'}</div>
                  </div>
                  <button className="cr-start-btn" onClick={() => startSession(null)}>
                    Start session
                  </button>
                </div>
              )}

              {/* Caught up — nudge toward mock exams */}
              {isCaughtUp && (
                <div className="cr-start" style={{ background: 'var(--success)', boxShadow: '0 4px 16px rgba(18,161,80,0.2)' }}>
                  <div className="cr-start-text">
                    <div className="cr-start-title">You've mastered every question</div>
                    <div className="cr-start-sub">Time to test yourself under exam conditions</div>
                  </div>
                  <button className="cr-start-btn" style={{ color: 'var(--success)' }} onClick={() => startMockExam('A')}>
                    Take Mock A →
                  </button>
                </div>
              )}
            </>
          )}

          {/* MOCK EXAMS */}
          <div className="cr-section-label" style={{ marginTop: isFirstVisit ? 32 : 0 }}>Mock Exams</div>
          <div className="cr-mocks">
            {['A', 'B'].map(id => {
              const results = mockResults[id] || [];
              const best = results.length > 0 ? Math.max(...results.map(r => r.pct)) : null;
              return (
                <div className="cr-mock-card" key={id} onClick={() => startMockExam(id)}>
                  <div className="cr-mock-top">
                    <span className="cr-mock-name">Mock Exam {id}</span>
                    {best === null && <span className="cr-mock-badge cr-mock-badge--new">NEW</span>}
                    {best !== null && best >= MOCK_PASS_MARK && <span className="cr-mock-badge cr-mock-badge--pass">PASSED {best}%</span>}
                    {best !== null && best < MOCK_PASS_MARK && <span className="cr-mock-badge cr-mock-badge--fail">BEST {best}%</span>}
                  </div>
                  <div className="cr-mock-info">50 questions · 60 minutes · 65% to pass</div>
                  <button className="cr-mock-start">{results.length > 0 ? 'Retake' : 'Start'} →</button>
                  {results.length > 0 && (
                    <div className="cr-mock-best">Attempted {results.length} time{results.length !== 1 ? 's' : ''}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MODULES */}
          <div className="cr-section-label">Modules</div>
          <div className="cr-modules">
            {MODULES.map(mod => {
              const modQs = QUESTIONS.filter(q => q.m === mod.num);
              const modMastered = modQs.filter(q => (getState(q.id, progress).level || 0) >= 5).length;
              const modReviews = getReviewsDue(progress, seen, mod.num).length;
              const modNew = Math.min(getNewAvailable(seen, mod.num).length, NEW_PER_DAY);
              const modReady = modReviews + modNew;
              const pct = modQs.length > 0 ? Math.round(modMastered / modQs.length * 100) : 0;
              return (
                <div className="cr-module" key={mod.num} onClick={() => modReady > 0 && startSession(mod.num)} style={{ opacity: modReady === 0 && totalSeen > 0 ? 0.5 : 1, cursor: modReady > 0 ? 'pointer' : 'default' }}>
                  <div className="cr-module-top">
                    <span className="cr-module-num">M{String(mod.num).padStart(2,'0')}</span>
                    {modReviews > 0 && <span className="cr-module-due">{modReviews} review{modReviews !== 1 ? 's' : ''}</span>}
                    {modReviews === 0 && modNew > 0 && <span className="cr-module-due" style={{ background: 'var(--success-soft)', color: 'var(--success)' }}>{modNew} new</span>}
                  </div>
                  <div className="cr-module-name">{mod.name}</div>
                  <div className="cr-module-bar">
                    <div className="cr-module-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="cr-module-meta">
                    <span className="cr-module-pct">{pct}%</span>
                    <span className="cr-module-count">{modMastered}/{modQs.length}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RESOURCES & THOUGHT LEADERS */}
          <div className="cr-section-label">Resources & Community</div>
          <div className="cr-leaders">
            {THOUGHT_LEADERS.map((tl, i) => (
              <a className="cr-leader" key={i} href={tl.url} target="_blank" rel="noopener noreferrer">
                <div className="cr-leader-top">
                  <span className="cr-leader-cat">{tl.cat}</span>
                  <span className="cr-leader-tag">{tl.tag}</span>
                </div>
                <div className="cr-leader-name">{tl.name}</div>
                <div className="cr-leader-desc">{tl.desc}</div>
                <span className="cr-leader-link">Visit →</span>
              </a>
            ))}
          </div>

          {/* METHOD (returning users — compact) */}
          {!isFirstVisit && (
            <>
              <div className="cr-section-label">The method</div>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '20px 24px', marginBottom: 20,
              }}>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Spaced repetition</strong> — you review questions at growing intervals (1 → 3 → 7 → 14 → 30 → 60 days). Get it right and it's scheduled further out. Get it wrong and it returns tomorrow. Five correct reviews = mastered. {QUESTIONS.length} questions across {MODULES.length} modules, introduced {NEW_PER_DAY} at a time.
                </div>
              </div>
            </>
          )}

          {/* DISCLAIMER */}
          <div className="cr-disclaimer">
            <strong>Disclaimer:</strong> CIIReady is an independent revision tool. It is not affiliated with, endorsed by, or derived from CII examination materials. All questions are independently authored and test publicly available regulatory knowledge from the FCA Handbook, UK legislation, and published regulatory guidance.
          </div>
        </div>
      )}

      {/* ═══════════════════════ SPACED REP SESSION ═══════════════════════ */}
      {view === 'session' && currentQ && (
        <div className="cr-main">
          <div className="cr-session-header">
            <button className="cr-back" onClick={() => setView('dashboard')}>←</button>
            <div className="cr-progress-bar">
              <div className="cr-progress-track">
                <div className="cr-progress-fill" style={{ width: `${(sessionIdx / sessionQ.length) * 100}%` }} />
              </div>
              <div className="cr-progress-label">{sessionIdx + 1} / {sessionQ.length}</div>
            </div>
          </div>

          <div className="cr-qcard">
            <div className="cr-qcard-meta">
              <span className="cr-qcard-tag">M{String(currentQ.m).padStart(2,'0')}</span>
              <span className={`cr-qcard-diff cr-diff-${currentQ.d}`}>
                {currentQ.d === 1 ? 'Easy' : currentQ.d === 2 ? 'Medium' : 'Hard'}
              </span>
              <span className="cr-qcard-level">
                Lv {getState(currentQ.id, progress).level || 0}/5
              </span>
            </div>

            <div className="cr-qcard-text">{currentQ.q}</div>

            <div className="cr-options">
              {currentQ.o.map((opt, i) => {
                let cls = 'cr-option';
                if (chosen !== null) {
                  if (i === currentQ.a) cls += ' cr-option--correct';
                  else if (i === chosen && chosen !== currentQ.a) cls += ' cr-option--wrong';
                }
                return (
                  <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={chosen !== null}>
                    <span className="cr-option-letter">{['A','B','C','D'][i]}</span>
                    <span className="cr-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>

            {chosen !== null && (
              <div className="cr-explain">
                <div className={`cr-explain-result ${chosen === currentQ.a ? 'cr-explain-correct' : 'cr-explain-wrong'}`}>
                  {chosen === currentQ.a
                    ? '✓ Correct'
                    : `✗ Incorrect — answer: ${['A','B','C','D'][currentQ.a]}`
                  }
                </div>
                <div className="cr-explain-text">{currentQ.e}</div>
                <button className="cr-next" onClick={nextQuestion}>
                  {sessionIdx + 1 < sessionQ.length ? 'Next →' : 'See results →'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════ SR SUMMARY ═══════════════════════ */}
      {view === 'summary' && (
        <div className="cr-main">
          <div className="cr-summary">
            <div className="cr-summary-score" style={{ color: sessionResults.filter(r=>r.correct).length / sessionResults.length >= 0.7 ? 'var(--success)' : 'var(--danger)' }}>
              {Math.round(sessionResults.filter(r => r.correct).length / sessionResults.length * 100)}%
            </div>
            <div className="cr-summary-title">Session complete</div>
            <div className="cr-summary-meta">
              {sessionResults.filter(r => r.correct).length} correct · {sessionResults.filter(r => !r.correct).length} incorrect · {sessionResults.length} questions
            </div>

            <div className="cr-summary-actions">
              <button className="cr-btn-outline" onClick={() => setView('dashboard')}>Dashboard</button>
              {buildSession(progress, seen, filterModule).length > 0 && (
                <button className="cr-btn-accent" onClick={() => startSession(filterModule)}>
                  Continue
                </button>
              )}
            </div>

            <div className="cr-summary-list">
              {sessionResults.map((r, i) => (
                <div className="cr-summary-row" key={i}>
                  <span className="cr-summary-dot" style={{ background: r.correct ? 'var(--success)' : 'var(--danger)' }} />
                  <span className="cr-summary-q">
                    {r.q.q.length > 65 ? r.q.q.substring(0, 65) + '…' : r.q.q}
                  </span>
                  <span className="cr-summary-interval" style={{ color: r.correct ? 'var(--success)' : 'var(--danger)' }}>
                    {r.correct
                      ? `+${SR_INTERVALS[Math.min(getState(r.q.id, progress).level || 1, 5) - 1] || 1}d`
                      : 'tmrw'
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════ MOCK EXAM SESSION ═══════════════════════ */}
      {view === 'mock-session' && mockCurrentQ && (
        <div className="cr-main">
          <div className="cr-mock-nav">
            <div className="cr-mock-nav-left">
              <button className="cr-back" onClick={() => {
                if (confirm('Leave the mock exam? Your progress will be lost.')) {
                  if (mockTimerRef.current) clearInterval(mockTimerRef.current);
                  setView('dashboard');
                }
              }}>←</button>
              <div className="cr-progress-bar" style={{ minWidth: 120 }}>
                <div className="cr-progress-track">
                  <div className="cr-progress-fill" style={{ width: `${((sessionIdx + 1) / mockExam.questions.length) * 100}%` }} />
                </div>
                <div className="cr-progress-label">{sessionIdx + 1} / {mockExam.questions.length} · {Object.keys(mockAnswers).length} answered</div>
              </div>
            </div>
            <div className="cr-mock-nav-right">
              <div className={`cr-timer ${mockTimeLeft <= 300 ? 'cr-timer--danger' : mockTimeLeft <= 600 ? 'cr-timer--warning' : ''}`}>
                <span className="cr-timer-icon">⏱</span>
                {formatTime(mockTimeLeft)}
              </div>
              {Object.keys(mockAnswers).length === mockExam.questions.length && (
                <button className="cr-mock-submit" onClick={() => {
                  if (confirm('Submit your mock exam? You cannot change answers after submission.')) submitMockExam();
                }}>Submit exam</button>
              )}
            </div>
          </div>

          <div className="cr-qcard">
            <div className="cr-qcard-meta">
              <span className="cr-qcard-tag">M{String(mockCurrentQ.m).padStart(2,'0')}</span>
              <span className={`cr-qcard-diff cr-diff-${mockCurrentQ.d}`}>
                {mockCurrentQ.d === 1 ? 'Easy' : mockCurrentQ.d === 2 ? 'Medium' : 'Hard'}
              </span>
              <span className="cr-qcard-level" style={{ color: 'var(--accent)' }}>
                Mock {mockId} · Q{sessionIdx + 1}
              </span>
            </div>

            <div className="cr-qcard-text">{mockCurrentQ.q}</div>

            <div className="cr-options">
              {mockCurrentQ.o.map((opt, i) => {
                const selected = mockAnswers[sessionIdx] === i;
                return (
                  <button
                    key={i}
                    className={`cr-option ${selected ? 'cr-option--correct' : ''}`}
                    onClick={() => handleMockAnswer(sessionIdx, i)}
                    style={selected ? {} : {}}
                  >
                    <span className="cr-option-letter">{['A','B','C','D'][i]}</span>
                    <span className="cr-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'space-between' }}>
              <button
                className="cr-btn-outline"
                onClick={() => setSessionIdx(i => Math.max(0, i - 1))}
                disabled={sessionIdx === 0}
                style={{ opacity: sessionIdx === 0 ? 0.4 : 1 }}
              >← Previous</button>
              {sessionIdx < mockExam.questions.length - 1 ? (
                <button className="cr-next" onClick={() => setSessionIdx(i => i + 1)}>
                  Next →
                </button>
              ) : (
                <button
                  className="cr-mock-submit"
                  onClick={() => {
                    const unanswered = mockExam.questions.length - Object.keys(mockAnswers).length;
                    const msg = unanswered > 0
                      ? `You have ${unanswered} unanswered question${unanswered !== 1 ? 's' : ''}. Submit anyway?`
                      : 'Submit your mock exam?';
                    if (confirm(msg)) submitMockExam();
                  }}
                >Submit exam</button>
              )}
            </div>
          </div>

          {/* Question navigator dots */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 16, justifyContent: 'center' }}>
            {mockExam.questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setSessionIdx(i)}
                style={{
                  width: 28, height: 28, borderRadius: 6, border: '1px solid var(--border)',
                  background: i === sessionIdx ? 'var(--accent)' : mockAnswers[i] !== undefined ? 'var(--accent-soft)' : 'var(--bg-card)',
                  color: i === sessionIdx ? '#fff' : 'var(--text-secondary)',
                  fontSize: 10, fontFamily: 'var(--mono)', fontWeight: 600,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >{i + 1}</button>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════ MOCK EXAM RESULTS ═══════════════════════ */}
      {view === 'mock-result' && mockExam && (
        <div className="cr-main">
          <div className="cr-summary cr-mock-result">
            {(() => {
              const results = mockResults[mockId] || [];
              const latest = results[results.length - 1];
              if (!latest) return null;
              return (
                <>
                  <div className="cr-mock-result-header">
                    <div className="cr-mock-result-pct" style={{ color: latest.passed ? 'var(--success)' : 'var(--danger)' }}>
                      {latest.pct}%
                    </div>
                    <div className="cr-mock-result-verdict" style={{ color: latest.passed ? 'var(--success)' : 'var(--danger)' }}>
                      {latest.passed ? 'Passed' : 'Not yet'} — Mock Exam {mockId}
                    </div>
                    <div className="cr-mock-result-meta">
                      {latest.correct}/{latest.total} correct · Pass mark: {MOCK_PASS_MARK}%
                    </div>
                    <div className="cr-mock-result-time">
                      Time: {formatTime(latest.timeTaken)} of {formatTime(MOCK_EXAM_TIME)}
                    </div>
                  </div>

                  <div className="cr-summary-actions">
                    <button className="cr-btn-outline" onClick={() => setView('dashboard')}>Dashboard</button>
                    <button className="cr-mock-review-toggle" onClick={() => setMockReviewIdx(mockReviewIdx !== null ? null : 0)}>
                      {mockReviewIdx !== null ? 'Hide review' : 'Review answers'}
                    </button>
                    <button className="cr-btn-accent" onClick={() => startMockExam(mockId)}>Retake</button>
                  </div>

                  {/* Module breakdown */}
                  <div className="cr-section-label" style={{ marginTop: 8 }}>Score by module</div>
                  <div className="cr-summary-list" style={{ marginBottom: 24 }}>
                    {MODULES.map(mod => {
                      const modQs = mockExam.questions.map((q, i) => ({ q, i })).filter(({ q }) => q.m === mod.num);
                      if (modQs.length === 0) return null;
                      const modCorrect = modQs.filter(({ q, i }) => latest.answers[i] === q.a).length;
                      const modPct = Math.round((modCorrect / modQs.length) * 100);
                      return (
                        <div className="cr-summary-row" key={mod.num}>
                          <span className="cr-summary-dot" style={{ background: modPct >= 65 ? 'var(--success)' : 'var(--danger)' }} />
                          <span className="cr-summary-q">M{String(mod.num).padStart(2,'0')} {mod.name}</span>
                          <span className="cr-summary-interval" style={{ color: modPct >= 65 ? 'var(--success)' : 'var(--danger)' }}>
                            {modCorrect}/{modQs.length} ({modPct}%)
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Review questions */}
                  {mockReviewIdx !== null && (
                    <div>
                      <div className="cr-section-label">Question review</div>
                      {mockExam.questions.map((q, i) => {
                        const userAnswer = latest.answers[i];
                        const correct = userAnswer === q.a;
                        return (
                          <div key={i} className="cr-qcard" style={{ marginBottom: 12, padding: '16px 20px' }}>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                              <span className="cr-summary-dot" style={{ background: correct ? 'var(--success)' : 'var(--danger)' }} />
                              <span className="cr-qcard-tag">Q{i + 1}</span>
                              <span className="cr-qcard-tag">M{String(q.m).padStart(2,'0')}</span>
                            </div>
                            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 10, lineHeight: 1.5 }}>{q.q}</div>
                            <div className="cr-options" style={{ gap: 4 }}>
                              {q.o.map((opt, oi) => {
                                let cls = 'cr-option';
                                if (oi === q.a) cls += ' cr-option--correct';
                                else if (oi === userAnswer && userAnswer !== q.a) cls += ' cr-option--wrong';
                                return (
                                  <div key={oi} className={cls} style={{ padding: '8px 12px', fontSize: 13, cursor: 'default' }}>
                                    <span className="cr-option-letter" style={{ width: 22, height: 22, fontSize: 10 }}>{['A','B','C','D'][oi]}</span>
                                    <span className="cr-option-text">{opt}</span>
                                  </div>
                                );
                              })}
                            </div>
                            {!correct && (
                              <div className="cr-explain-text" style={{ marginTop: 8, fontSize: 12 }}>{q.e}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
