const RAW_BETA_QUESTION_BANKS = {
  R02: [
    {
      "id": "R02-001",
      "exam": "R02",
      "topic": "Cash investments",
      "difficulty": "easy",
      "question": "What is the main risk associated with holding cash deposits over the long term?",
      "options": [
        "Currency risk",
        "Inflation risk",
        "Liquidity risk",
        "Credit risk"
      ],
      "answerIndex": 1,
      "explanation": "The main long-term risk of holding cash deposits is inflation risk \u2014 the risk that the real purchasing power of the money is eroded over time because interest rates may not keep pace with inflation."
    },
    {
      "id": "R02-002",
      "exam": "R02",
      "topic": "Fixed-interest securities",
      "difficulty": "medium",
      "question": "What happens to the price of an existing fixed-interest bond when market interest rates rise?",
      "options": [
        "The price becomes more volatile but does not change direction",
        "The price stays the same",
        "The price rises",
        "The price falls"
      ],
      "answerIndex": 3,
      "explanation": "Bond prices and interest rates have an inverse relationship. When market interest rates rise, existing bonds with lower fixed coupons become less attractive, so their price falls to bring the yield in line with the new higher rates."
    },
    {
      "id": "R02-003",
      "exam": "R02",
      "topic": "Gilts",
      "difficulty": "easy",
      "question": "What is a 'gilt' in the context of UK investments?",
      "options": [
        "A bond issued by the UK Government",
        "A certificate of deposit issued by the Bank of England",
        "A share in a gold exchange-traded fund",
        "A bond issued by a UK-listed company"
      ],
      "answerIndex": 0,
      "explanation": "Gilts (or gilt-edged securities) are bonds issued by the UK Government. They are considered very low risk because they are backed by the government's ability to raise taxes."
    },
    {
      "id": "R02-004",
      "exam": "R02",
      "topic": "Equities",
      "difficulty": "medium",
      "question": "Which of the following is a characteristic of ordinary shares?",
      "options": [
        "They rank ahead of preference shares for dividend payments",
        "They carry voting rights at general meetings",
        "They guarantee a fixed annual dividend",
        "They have a guaranteed return of capital on winding up"
      ],
      "answerIndex": 1,
      "explanation": "Ordinary shareholders typically have voting rights at general meetings. Dividends on ordinary shares are not guaranteed and rank behind preference shares. On winding up, ordinary shareholders are last in line after all other creditors and preference shareholders."
    },
    {
      "id": "R02-005",
      "exam": "R02",
      "topic": "Collective investments",
      "difficulty": "easy",
      "question": "What is the key structural difference between a unit trust and an investment trust company?",
      "options": [
        "Investment trust companies are open-ended funds",
        "Unit trusts are open-ended; investment trust companies are closed-ended",
        "Investment trust companies cannot invest in equities",
        "Unit trusts are only available to institutional investors"
      ],
      "answerIndex": 1,
      "explanation": "Unit trusts are open-ended, meaning new units can be created or cancelled to meet demand. Investment trust companies are closed-ended, with a fixed number of shares traded on a stock exchange, so their share price can trade at a premium or discount to net asset value."
    },
    {
      "id": "R02-006",
      "exam": "R02",
      "topic": "OEICs",
      "difficulty": "medium",
      "question": "How is an OEIC (Open-Ended Investment Company) structured?",
      "options": [
        "As a company with a single share price for buying and selling",
        "As a limited partnership with general and limited partners",
        "As a closed-ended fund listed on the London Stock Exchange",
        "As a trust with a trustee and manager"
      ],
      "answerIndex": 0,
      "explanation": "An OEIC is structured as a company rather than a trust. Unlike unit trusts, which have a dual-price (bid/offer) structure, OEICs have a single share price at which investors both buy and sell. They are open-ended, so new shares are created or cancelled to meet demand."
    },
    {
      "id": "R02-007",
      "exam": "R02",
      "topic": "Investment theory",
      "difficulty": "hard",
      "question": "According to Modern Portfolio Theory (MPT), what is the 'efficient frontier'?",
      "options": [
        "The point at which adding more securities to a portfolio no longer reduces risk",
        "The set of portfolios offering the highest expected return for each level of risk",
        "The minimum amount of capital required to build a diversified portfolio",
        "The boundary between systematic and non-systematic risk"
      ],
      "answerIndex": 1,
      "explanation": "The efficient frontier represents the set of optimal portfolios that offer the highest expected return for a given level of risk, or equivalently, the lowest risk for a given expected return. Portfolios below the efficient frontier are sub-optimal because they do not provide enough return for the risk taken."
    },
    {
      "id": "R02-008",
      "exam": "R02",
      "topic": "Risk",
      "difficulty": "medium",
      "question": "What does 'beta' measure in the context of investment risk?",
      "options": [
        "The sensitivity of a security's returns relative to the market as a whole",
        "The correlation between two different asset classes",
        "The total risk of an individual security",
        "The standard deviation of a portfolio's returns"
      ],
      "answerIndex": 0,
      "explanation": "Beta measures the sensitivity of a security's returns to movements in the overall market (systematic risk). A beta of 1 means the security moves in line with the market; greater than 1 means more volatile than the market; less than 1 means less volatile."
    },
    {
      "id": "R02-009",
      "exam": "R02",
      "topic": "Risk",
      "difficulty": "hard",
      "question": "Which type of risk can be reduced through diversification?",
      "options": [
        "Systematic risk",
        "Non-systematic risk",
        "Market risk",
        "Interest rate risk"
      ],
      "answerIndex": 1,
      "explanation": "Non-systematic (or specific/unsystematic) risk relates to individual investments or sectors and can be reduced through diversification. Systematic risk (also called market risk) affects the entire market and cannot be diversified away."
    },
    {
      "id": "R02-010",
      "exam": "R02",
      "topic": "Time value of money",
      "difficulty": "easy",
      "question": "An investor places \u00a310,000 in a savings account paying 5% per annum compound interest. What will it be worth after 2 years (to the nearest pound)?",
      "options": [
        "\u00a311,000",
        "\u00a311,025",
        "\u00a310,500",
        "\u00a310,250"
      ],
      "answerIndex": 1,
      "explanation": "With compound interest, the calculation is \u00a310,000 \u00d7 1.05 \u00d7 1.05 = \u00a311,025. In the first year, interest of \u00a3500 is earned. In the second year, interest is earned on the original sum plus the first year's interest, giving \u00a3525, for a total of \u00a311,025."
    },
    {
      "id": "R02-011",
      "exam": "R02",
      "topic": "Time value of money",
      "difficulty": "medium",
      "question": "If inflation is 4% and a savings account pays 6% nominal interest, what is the approximate real rate of return?",
      "options": [
        "2%",
        "4%",
        "6%",
        "10%"
      ],
      "answerIndex": 0,
      "explanation": "The approximate real rate of return is the nominal rate minus the inflation rate: 6% \u2212 4% = 2%. The real return represents the actual increase in purchasing power after accounting for inflation."
    },
    {
      "id": "R02-012",
      "exam": "R02",
      "topic": "Economic environment",
      "difficulty": "medium",
      "question": "Which of the following is an example of fiscal policy?",
      "options": [
        "The Monetary Policy Committee setting inflation targets",
        "The Bank of England conducting quantitative easing",
        "The government increasing income tax rates",
        "The Bank of England raising the base rate"
      ],
      "answerIndex": 2,
      "explanation": "Fiscal policy relates to government spending and taxation decisions. Raising income tax is a fiscal policy action. Changes to interest rates and quantitative easing are monetary policy tools used by the Bank of England."
    },
    {
      "id": "R02-013",
      "exam": "R02",
      "topic": "Economic environment",
      "difficulty": "hard",
      "question": "What is the typical relationship between unemployment and inflation, as described by the Phillips Curve?",
      "options": [
        "Unemployment and inflation always move in the same direction",
        "There is no relationship between unemployment and inflation",
        "High unemployment tends to be associated with high inflation",
        "High unemployment tends to be associated with low inflation"
      ],
      "answerIndex": 3,
      "explanation": "The Phillips Curve suggests an inverse relationship between unemployment and inflation. When unemployment is high, there is less pressure on wages, which tends to keep inflation low. When unemployment falls, wage pressure increases and inflation tends to rise."
    },
    {
      "id": "R02-014",
      "exam": "R02",
      "topic": "Property",
      "difficulty": "easy",
      "question": "Which of the following is a disadvantage of direct property investment compared to equities?",
      "options": [
        "Property is relatively illiquid",
        "Property income is always tax-free",
        "Property has no potential for capital growth",
        "Property cannot be used as security for borrowing"
      ],
      "answerIndex": 0,
      "explanation": "Direct property is relatively illiquid compared to equities \u2014 it can take months to buy or sell a property, involves significant transaction costs, and cannot be partially sold. Equities traded on a stock exchange can typically be bought or sold within seconds."
    },
    {
      "id": "R02-015",
      "exam": "R02",
      "topic": "Alternative investments",
      "difficulty": "medium",
      "question": "What is a Venture Capital Trust (VCT)?",
      "options": [
        "A closed-ended fund listed on a stock exchange that invests in small unquoted companies",
        "An open-ended fund that only invests in government bonds",
        "A type of unit trust that invests exclusively in technology companies",
        "A savings account specifically for start-up businesses"
      ],
      "answerIndex": 0,
      "explanation": "A VCT is a listed, closed-ended company that invests in small, unquoted (or AIM-listed) trading companies. VCTs offer tax incentives including income tax relief at 30% on subscriptions for new shares, tax-free dividends, and exemption from CGT on disposal of VCT shares."
    },
    {
      "id": "R02-016",
      "exam": "R02",
      "topic": "Investment theory",
      "difficulty": "hard",
      "question": "Which form of the Efficient Market Hypothesis (EMH) states that share prices reflect all publicly available information?",
      "options": [
        "Ultra-strong form",
        "Weak form",
        "Strong form",
        "Semi-strong form"
      ],
      "answerIndex": 3,
      "explanation": "The semi-strong form of EMH states that share prices reflect all publicly available information, so fundamental analysis cannot consistently produce excess returns. The weak form says prices reflect past trading data only. The strong form says prices reflect all information, including insider knowledge."
    },
    {
      "id": "R02-017",
      "exam": "R02",
      "topic": "Behavioural finance",
      "difficulty": "medium",
      "question": "In behavioural finance, what is 'loss aversion'?",
      "options": [
        "The tendency to feel losses more strongly than equivalent gains",
        "The habit of selling winning investments too late",
        "The preference for guaranteed returns over uncertain ones",
        "The tendency to avoid all types of investment risk"
      ],
      "answerIndex": 0,
      "explanation": "Loss aversion, a key concept in prospect theory, describes the tendency for people to feel the pain of a loss more acutely than the pleasure of an equivalent gain. Research suggests losses are felt approximately twice as strongly as equivalent gains."
    },
    {
      "id": "R02-018",
      "exam": "R02",
      "topic": "Investment advice process",
      "difficulty": "easy",
      "question": "What is the purpose of an 'attitude to risk' assessment in the financial advice process?",
      "options": [
        "To establish how much risk the client is willing and able to take with their investments",
        "To decide which specific funds to recommend",
        "To determine the client's credit rating",
        "To calculate the client's expected investment returns"
      ],
      "answerIndex": 0,
      "explanation": "An attitude to risk assessment helps an adviser understand both the client's willingness to accept risk (their risk tolerance) and their capacity for loss (the financial ability to withstand losses). This is a key part of the suitability assessment required under FCA rules."
    },
    {
      "id": "R02-019",
      "exam": "R02",
      "topic": "Platforms",
      "difficulty": "medium",
      "question": "What is a key benefit of using an investment platform for a retail client?",
      "options": [
        "Platforms are only available to high-net-worth individuals",
        "Platforms eliminate all investment charges",
        "Platforms provide access to a wide range of investments in one place with consolidated reporting",
        "Platforms guarantee a minimum investment return"
      ],
      "answerIndex": 2,
      "explanation": "Investment platforms allow clients and advisers to access a wide range of funds and investments through a single portal, with consolidated reporting and administration. They do not guarantee returns, and they have their own charges (platform fees)."
    },
    {
      "id": "R02-020",
      "exam": "R02",
      "topic": "Performance measurement",
      "difficulty": "hard",
      "question": "What does a portfolio's 'Sharpe ratio' measure?",
      "options": [
        "The portfolio's total return over one year",
        "The excess return per unit of total risk (standard deviation)",
        "The portfolio's beta relative to its benchmark",
        "The difference between the portfolio's return and the risk-free rate"
      ],
      "answerIndex": 1,
      "explanation": "The Sharpe ratio measures risk-adjusted return by dividing the portfolio's excess return (return above the risk-free rate) by its standard deviation. A higher Sharpe ratio indicates better risk-adjusted performance \u2014 more return per unit of risk taken."
    },
    {
      "id": "R02-021",
      "exam": "R02",
      "topic": "Fixed-interest securities",
      "difficulty": "medium",
      "question": "Which of the following best describes a 'zero-coupon bond'?",
      "options": [
        "A bond that pays interest monthly instead of annually",
        "A bond with a variable coupon linked to SONIA",
        "A bond that can be converted into ordinary shares",
        "A bond issued at a discount to its face value that pays no interest but is redeemed at par"
      ],
      "answerIndex": 3,
      "explanation": "A zero-coupon bond pays no periodic interest (coupon). Instead, it is issued at a discount to its face (par) value and redeemed at par on maturity. The investor's return is the difference between the purchase price and the redemption value."
    },
    {
      "id": "R02-022",
      "exam": "R02",
      "topic": "Life assurance products",
      "difficulty": "medium",
      "question": "What is the key difference between a 'with-profits' fund and a 'unit-linked' fund?",
      "options": [
        "With-profits funds invest only in gilts, while unit-linked funds invest only in equities",
        "With-profits funds have no charges, while unit-linked funds carry annual management charges",
        "Unit-linked funds guarantee capital, while with-profits funds do not",
        "With-profits funds smooth returns using bonuses, while unit-linked fund values directly reflect underlying asset performance"
      ],
      "answerIndex": 3,
      "explanation": "With-profits funds smooth investment returns by holding back some gains in good years (as reserves) and adding bonuses in poor years. Unit-linked funds directly reflect the value of the underlying assets, so the investor's return moves in line with market performance."
    },
    {
      "id": "R02-023",
      "exam": "R02",
      "topic": "Risk",
      "difficulty": "easy",
      "question": "What is 'counterparty risk'?",
      "options": [
        "The risk that the other party to a financial contract will default on their obligations",
        "The risk that an investment cannot be sold quickly",
        "The risk that inflation will reduce investment returns",
        "The risk that the stock market will fall"
      ],
      "answerIndex": 0,
      "explanation": "Counterparty risk (also known as default or credit risk) is the risk that the other party in a financial transaction will fail to meet their obligations. For example, a corporate bond investor faces the risk that the issuing company may fail to pay interest or repay the capital."
    },
    {
      "id": "R02-024",
      "exam": "R02",
      "topic": "Investment planning",
      "difficulty": "hard",
      "question": "An adviser is constructing a portfolio for a client with a medium risk tolerance and a 10-year time horizon. Which approach to asset allocation is most appropriate?",
      "options": [
        "A diversified mix across asset classes aligned to the client's risk profile and objectives",
        "100% in gilts because they are backed by the UK Government",
        "100% in cash deposits to eliminate all risk",
        "100% in a single high-performing equity fund"
      ],
      "answerIndex": 0,
      "explanation": "A diversified portfolio across multiple asset classes is most appropriate for a medium-risk client with a 10-year horizon. Concentrating in a single asset class (whether cash, gilts, or equities) fails to provide the risk-return balance that diversification offers, and does not reflect the client's risk profile and objectives."
    }
  ],
  R03: [
    {
      "id": "R03-001",
      "exam": "R03",
      "topic": "Income tax",
      "difficulty": "easy",
      "question": "What is the personal allowance for the 2025/26 tax year?",
      "options": [
        "\u00a312,570",
        "\u00a311,500",
        "\u00a312,500",
        "\u00a313,000"
      ],
      "answerIndex": 0,
      "explanation": "The personal allowance for 2025/26 is \u00a312,570. This has been frozen at this level since 2021/22 and is due to remain frozen until at least April 2028."
    },
    {
      "id": "R03-002",
      "exam": "R03",
      "topic": "Income tax",
      "difficulty": "medium",
      "question": "At what income level does the personal allowance begin to be reduced?",
      "options": [
        "\u00a3100,000",
        "\u00a3150,000",
        "\u00a350,270",
        "\u00a3125,140"
      ],
      "answerIndex": 0,
      "explanation": "The personal allowance is reduced by \u00a31 for every \u00a32 of adjusted net income above \u00a3100,000. This means it is fully eroded at \u00a3125,140 (\u00a3100,000 + (\u00a312,570 \u00d7 2))."
    },
    {
      "id": "R03-003",
      "exam": "R03",
      "topic": "Income tax",
      "difficulty": "medium",
      "question": "What is the higher rate of income tax for 2025/26 and at what threshold does it apply?",
      "options": [
        "40% on income above \u00a3100,000",
        "45% on income above \u00a350,270",
        "40% on taxable income above \u00a337,700 (total income above \u00a350,270)",
        "40% on income above \u00a337,700"
      ],
      "answerIndex": 2,
      "explanation": "The higher rate of income tax is 40%, applying to taxable income between \u00a337,701 and \u00a3125,140 (i.e., total income between \u00a350,271 and \u00a3125,140 for someone with the full personal allowance). The basic rate band is \u00a337,700."
    },
    {
      "id": "R03-004",
      "exam": "R03",
      "topic": "Dividends",
      "difficulty": "easy",
      "question": "What is the dividend allowance for the 2025/26 tax year?",
      "options": [
        "\u00a31,000",
        "\u00a35,000",
        "\u00a3500",
        "\u00a32,000"
      ],
      "answerIndex": 2,
      "explanation": "The dividend allowance for 2025/26 is \u00a3500 (reduced from \u00a31,000 in 2023/24 and \u00a32,000 in 2022/23). Dividend income within this allowance is taxed at 0%, but it still counts towards the basic and higher rate thresholds."
    },
    {
      "id": "R03-005",
      "exam": "R03",
      "topic": "Dividends",
      "difficulty": "medium",
      "question": "What rate of tax does a higher rate taxpayer pay on dividend income above the dividend allowance in 2025/26?",
      "options": [
        "39.35%",
        "32.5%",
        "20%",
        "33.75%"
      ],
      "answerIndex": 3,
      "explanation": "Higher rate taxpayers pay 33.75% on dividend income above the dividend allowance in 2025/26. Basic rate taxpayers pay 8.75%, and additional rate taxpayers pay 39.35%. These rates are set to increase from April 2026."
    },
    {
      "id": "R03-006",
      "exam": "R03",
      "topic": "National Insurance",
      "difficulty": "medium",
      "question": "What is the main rate of employee Class 1 National Insurance contributions for 2025/26?",
      "options": [
        "12%",
        "10%",
        "8%",
        "13.8%"
      ],
      "answerIndex": 2,
      "explanation": "The main rate of employee Class 1 NICs for 2025/26 is 8%, applying to earnings between the primary threshold and the upper earnings limit. This was reduced from 12% to 10% in January 2024, and then to 8% from April 2024."
    },
    {
      "id": "R03-007",
      "exam": "R03",
      "topic": "Capital gains tax",
      "difficulty": "easy",
      "question": "What is the CGT annual exempt amount for individuals in 2025/26?",
      "options": [
        "\u00a33,000",
        "\u00a36,000",
        "\u00a31,000",
        "\u00a312,300"
      ],
      "answerIndex": 0,
      "explanation": "The CGT annual exempt amount for individuals in 2025/26 is \u00a33,000. It was reduced from \u00a36,000 in 2023/24 and from \u00a312,300 in 2022/23. Unlike the ISA allowance, it cannot be carried forward to future years."
    },
    {
      "id": "R03-008",
      "exam": "R03",
      "topic": "Capital gains tax",
      "difficulty": "medium",
      "question": "At what rates is CGT charged on gains from the disposal of listed shares in 2025/26?",
      "options": [
        "10% for basic rate taxpayers; 20% for higher/additional rate taxpayers",
        "18% for basic rate taxpayers; 28% for higher/additional rate taxpayers",
        "20% for all taxpayers",
        "18% for basic rate taxpayers; 24% for higher/additional rate taxpayers"
      ],
      "answerIndex": 3,
      "explanation": "From 30 October 2024, CGT on most assets including listed shares is charged at 18% for basic rate taxpayers and 24% for higher and additional rate taxpayers. The previous rates of 10% and 20% were increased at the 2024 Autumn Budget."
    },
    {
      "id": "R03-009",
      "exam": "R03",
      "topic": "Capital gains tax",
      "difficulty": "medium",
      "question": "Which of the following disposals is exempt from CGT?",
      "options": [
        "Selling a buy-to-let property at a profit",
        "Selling shares held in an ISA",
        "Selling a painting worth \u00a310,000",
        "Selling a second home"
      ],
      "answerIndex": 1,
      "explanation": "Gains on investments held within an ISA are exempt from CGT. Other exempt assets include your main residence (subject to conditions), cars, and personal possessions ('chattels') sold for \u00a36,000 or less."
    },
    {
      "id": "R03-010",
      "exam": "R03",
      "topic": "Inheritance tax",
      "difficulty": "easy",
      "question": "What is the nil rate band for inheritance tax in 2025/26?",
      "options": [
        "\u00a3325,000",
        "\u00a3175,000",
        "\u00a3250,000",
        "\u00a3500,000"
      ],
      "answerIndex": 0,
      "explanation": "The IHT nil rate band is \u00a3325,000 for 2025/26. It has been frozen at this level since 2009 and is due to remain frozen until at least April 2030. Estates below this threshold pay no IHT."
    },
    {
      "id": "R03-011",
      "exam": "R03",
      "topic": "Inheritance tax",
      "difficulty": "medium",
      "question": "What is the residence nil rate band (RNRB) and when does it apply?",
      "options": [
        "An additional \u00a3100,000 allowance when any property is left to a spouse",
        "A \u00a3325,000 allowance that applies to residential property only",
        "An additional \u00a3175,000 allowance when a main residence is left to direct descendants",
        "An additional \u00a3175,000 allowance available to all estates regardless of beneficiaries"
      ],
      "answerIndex": 2,
      "explanation": "The RNRB provides an additional \u00a3175,000 IHT-free allowance when a main residence (or proceeds from its sale) is passed to direct descendants such as children, stepchildren, or grandchildren. It tapers for estates over \u00a32 million."
    },
    {
      "id": "R03-012",
      "exam": "R03",
      "topic": "Inheritance tax",
      "difficulty": "hard",
      "question": "James made a potentially exempt transfer (PET) of \u00a3400,000 and died 5 years later. Assuming he had not used any of his nil rate band, how much of the PET is subject to IHT?",
      "options": [
        "\u00a375,000, but taper relief may reduce the tax payable",
        "\u00a3400,000 at the full 40% rate",
        "\u00a375,000 at the full 40% rate with no taper relief",
        "Nothing \u2014 the PET falls out of the estate after 3 years"
      ],
      "answerIndex": 0,
      "explanation": "As James died within 7 years, the PET becomes chargeable. The first \u00a3325,000 is covered by the nil rate band, leaving \u00a375,000 subject to IHT. However, because he survived more than 3 years, taper relief reduces the percentage of tax payable (not the value of the gift)."
    },
    {
      "id": "R03-013",
      "exam": "R03",
      "topic": "ISAs",
      "difficulty": "easy",
      "question": "What is the total annual ISA subscription limit for 2025/26?",
      "options": [
        "\u00a320,000",
        "\u00a315,240",
        "\u00a325,000",
        "\u00a312,000"
      ],
      "answerIndex": 0,
      "explanation": "The total annual ISA allowance for 2025/26 is \u00a320,000. This can be split between cash ISAs, stocks and shares ISAs, innovative finance ISAs, and Lifetime ISAs (subject to individual limits). The allowance cannot be carried forward."
    },
    {
      "id": "R03-014",
      "exam": "R03",
      "topic": "Savings income",
      "difficulty": "medium",
      "question": "What is the personal savings allowance for a basic rate taxpayer in 2025/26?",
      "options": [
        "\u00a3500",
        "\u00a32,000",
        "\u00a31,000",
        "\u00a35,000"
      ],
      "answerIndex": 2,
      "explanation": "Basic rate taxpayers receive a \u00a31,000 personal savings allowance, meaning the first \u00a31,000 of savings interest is tax-free. Higher rate taxpayers receive \u00a3500. Additional rate taxpayers do not receive a personal savings allowance."
    },
    {
      "id": "R03-015",
      "exam": "R03",
      "topic": "Marriage allowance",
      "difficulty": "medium",
      "question": "What is the marriage allowance and who can claim it?",
      "options": [
        "A \u00a32,520 additional allowance for all married couples",
        "A \u00a31,260 transfer of personal allowance from a non-taxpayer to a basic rate taxpaying spouse or civil partner",
        "An additional personal allowance of \u00a31,260 for both spouses",
        "A \u00a31,260 tax credit available to all married couples regardless of income"
      ],
      "answerIndex": 1,
      "explanation": "The marriage allowance allows a person whose income is below the personal allowance to transfer \u00a31,260 (10% of \u00a312,570) to their spouse or civil partner. The recipient must be a basic rate taxpayer \u2014 it cannot be claimed if the recipient pays higher or additional rate tax."
    },
    {
      "id": "R03-016",
      "exam": "R03",
      "topic": "Gift Aid",
      "difficulty": "medium",
      "question": "How does Gift Aid work for a higher rate taxpayer donating \u00a3100 to charity?",
      "options": [
        "The charity receives \u00a3100 and HMRC pays the charity an additional \u00a325",
        "The charity claims back basic rate tax to receive \u00a3125, and the taxpayer claims higher rate relief of \u00a325",
        "The taxpayer receives \u00a340 back from HMRC",
        "The charity receives \u00a3100 and the taxpayer gets no additional relief"
      ],
      "answerIndex": 1,
      "explanation": "Under Gift Aid, the charity grosses up the \u00a3100 donation to \u00a3125 (\u00a3100 \u00f7 0.80) and reclaims \u00a325 basic rate tax from HMRC. The higher rate taxpayer can claim the difference between higher rate (40%) and basic rate (20%) on the gross amount: \u00a3125 \u00d7 20% = \u00a325 additional relief through their tax return."
    },
    {
      "id": "R03-017",
      "exam": "R03",
      "topic": "Residence and domicile",
      "difficulty": "hard",
      "question": "What is the Statutory Residence Test (SRT) used to determine?",
      "options": [
        "Whether an individual qualifies for the remittance basis of taxation",
        "Whether an individual is UK resident for tax purposes in a given tax year",
        "Whether an individual's main home qualifies for principal private residence relief",
        "Whether an individual is domiciled in the UK"
      ],
      "answerIndex": 1,
      "explanation": "The Statutory Residence Test (SRT), introduced in 2013, is used to determine whether an individual is UK resident for tax purposes. It uses a combination of automatic tests (days present, leaving the UK, arriving) and a sufficient ties test to establish residence status."
    },
    {
      "id": "R03-018",
      "exam": "R03",
      "topic": "Stamp duty",
      "difficulty": "easy",
      "question": "What is Stamp Duty Reserve Tax (SDRT) charged on?",
      "options": [
        "The sale of gilts",
        "The electronic transfer of shares",
        "The purchase of residential property",
        "Inheritance of investments"
      ],
      "answerIndex": 1,
      "explanation": "Stamp Duty Reserve Tax (SDRT) is charged at 0.5% on the electronic purchase of shares and securities in UK companies. It applies to paperless transactions settled through CREST. Physical share transfers are subject to stamp duty instead."
    },
    {
      "id": "R03-019",
      "exam": "R03",
      "topic": "Self assessment",
      "difficulty": "medium",
      "question": "What is the deadline for submitting an online self assessment tax return for the 2024/25 tax year?",
      "options": [
        "31 March 2026",
        "5 April 2025",
        "31 January 2026",
        "31 October 2025"
      ],
      "answerIndex": 2,
      "explanation": "The deadline for online self assessment tax returns is 31 January following the end of the tax year. For 2024/25, this is 31 January 2026. Paper returns have an earlier deadline of 31 October. Any tax owed must also be paid by 31 January."
    },
    {
      "id": "R03-020",
      "exam": "R03",
      "topic": "Trusts",
      "difficulty": "hard",
      "question": "How is income within a discretionary trust taxed?",
      "options": [
        "At the beneficiary's marginal rate of tax",
        "At the basic rate of 20% only",
        "Tax-free, as trusts are exempt from income tax",
        "At the trust rate of 45% (after a standard rate band of \u00a31,000)"
      ],
      "answerIndex": 3,
      "explanation": "Income within a discretionary trust is taxed at the trust rate of 45% (39.35% for dividend income) after the first \u00a31,000, which is taxed at the standard rate of 20% (8.75% for dividends). When distributions are made to beneficiaries, a tax credit is given for tax already paid by the trust."
    },
    {
      "id": "R03-021",
      "exam": "R03",
      "topic": "VAT",
      "difficulty": "easy",
      "question": "What is the standard rate of VAT in the UK?",
      "options": [
        "17.5%",
        "15%",
        "25%",
        "20%"
      ],
      "answerIndex": 3,
      "explanation": "The standard rate of VAT in the UK is 20%. There is also a reduced rate of 5% (applying to items such as domestic fuel and power) and a zero rate (0%) for items such as most food and children's clothing."
    },
    {
      "id": "R03-022",
      "exam": "R03",
      "topic": "Capital gains tax",
      "difficulty": "hard",
      "question": "Sarah transfers shares worth \u00a350,000 to her husband James. She originally paid \u00a320,000 for them. What is the CGT position on this transfer?",
      "options": [
        "James is deemed to have acquired them at market value of \u00a350,000",
        "Sarah pays CGT on the \u00a330,000 gain",
        "The gain is split equally between them",
        "The transfer is at no gain/no loss \u2014 James inherits Sarah's base cost of \u00a320,000"
      ],
      "answerIndex": 3,
      "explanation": "Transfers between spouses and civil partners are treated as taking place at no gain/no loss for CGT purposes. James inherits Sarah's original base cost of \u00a320,000. If James later sells the shares, his gain will be calculated from this \u00a320,000 base cost."
    },
    {
      "id": "R03-023",
      "exam": "R03",
      "topic": "Pension tax relief",
      "difficulty": "medium",
      "question": "Under the relief at source method of pension tax relief, what happens when a basic rate taxpayer contributes \u00a380 to a personal pension?",
      "options": [
        "The employer adds \u00a320 to match the contribution",
        "The pension provider claims \u00a320 from HMRC, so \u00a3100 is invested in the pension",
        "The member receives \u00a320 back from HMRC directly",
        "The pension provider adds nothing \u2014 the member must claim relief via self assessment"
      ],
      "answerIndex": 1,
      "explanation": "Under relief at source, the member pays their contribution net of basic rate tax. So a \u00a3100 gross contribution means the member pays \u00a380 and the pension provider claims \u00a320 from HMRC. Higher and additional rate taxpayers can claim further relief through their tax return."
    },
    {
      "id": "R03-024",
      "exam": "R03",
      "topic": "National Insurance",
      "difficulty": "hard",
      "question": "What rate of employer NICs applies for 2025/26, and at what threshold?",
      "options": [
        "15% on earnings above \u00a396 per week",
        "15% on earnings above \u00a3175 per week",
        "13.8% on earnings above \u00a3175 per week",
        "13.8% on earnings above \u00a396 per week"
      ],
      "answerIndex": 0,
      "explanation": "From April 2025, the employer NICs rate is 15% on earnings above the secondary threshold of \u00a396 per week (\u00a35,000 per year). Both changes were announced in the 2024 Autumn Budget \u2014 the rate increased from 13.8% and the threshold decreased from \u00a3175 per week."
    }
  ],
  R04: [
    {
      "id": "R04-001",
      "exam": "R04",
      "topic": "Pensions context",
      "difficulty": "easy",
      "question": "What is the primary purpose of auto-enrolment?",
      "options": [
        "To replace the need for personal pension plans",
        "To provide a State Pension to all UK residents",
        "To ensure eligible workers are automatically enrolled into a qualifying workplace pension scheme",
        "To guarantee a minimum level of retirement income"
      ],
      "answerIndex": 2,
      "explanation": "Auto-enrolment requires employers to automatically enrol eligible workers into a qualifying workplace pension scheme and make contributions. It was introduced to increase private pension saving, as many people were not saving enough for retirement."
    },
    {
      "id": "R04-002",
      "exam": "R04",
      "topic": "Contributions",
      "difficulty": "medium",
      "question": "What is the pension annual allowance for most individuals in 2025/26?",
      "options": [
        "\u00a350,000",
        "\u00a360,000",
        "\u00a380,000",
        "\u00a340,000"
      ],
      "answerIndex": 1,
      "explanation": "The pension annual allowance for 2025/26 is \u00a360,000 (or 100% of relevant UK earnings, whichever is lower). This is the maximum total contribution from all sources (individual, employer, and third party) that can benefit from tax relief without incurring an annual allowance charge."
    },
    {
      "id": "R04-003",
      "exam": "R04",
      "topic": "Contributions",
      "difficulty": "hard",
      "question": "What is the tapered annual allowance, and when does it apply?",
      "options": [
        "The annual allowance reduces by \u00a31 for every \u00a32 of adjusted income above \u00a3200,000, to a minimum of \u00a34,000",
        "The annual allowance reduces by \u00a31 for every \u00a32 of adjusted income above \u00a3260,000, to a minimum of \u00a310,000",
        "The annual allowance halves for anyone earning above \u00a3150,000",
        "The annual allowance reduces by \u00a31 for every \u00a31 of income above \u00a3200,000, to a minimum of \u00a310,000"
      ],
      "answerIndex": 1,
      "explanation": "The tapered annual allowance applies where an individual's adjusted income exceeds \u00a3260,000 and their threshold income exceeds \u00a3200,000. The \u00a360,000 annual allowance is reduced by \u00a31 for every \u00a32 of adjusted income above \u00a3260,000, down to a minimum of \u00a310,000."
    },
    {
      "id": "R04-004",
      "exam": "R04",
      "topic": "Contributions",
      "difficulty": "medium",
      "question": "What is the carry forward rule for pension contributions?",
      "options": [
        "Unused annual allowance from the previous 3 years can be carried forward, provided the individual was a member of a registered pension scheme in those years",
        "Carry forward is only available if total contributions exceed \u00a340,000",
        "Unused annual allowance from any previous year can be carried forward indefinitely",
        "Unused annual allowance from the previous 5 years can be carried forward"
      ],
      "answerIndex": 0,
      "explanation": "Individuals can carry forward unused annual allowance from the three previous tax years, using the earliest year first. To use carry forward, the individual must have been a member of a registered pension scheme in the relevant tax year. The current year's allowance is used first."
    },
    {
      "id": "R04-005",
      "exam": "R04",
      "topic": "MPAA",
      "difficulty": "hard",
      "question": "What triggers the Money Purchase Annual Allowance (MPAA)?",
      "options": [
        "Making any contribution to a defined contribution pension scheme",
        "Reaching the age of 55",
        "Flexibly accessing taxable income from a defined contribution pension (e.g., drawdown income or UFPLS)",
        "Taking a pension commencement lump sum (tax-free cash)"
      ],
      "answerIndex": 2,
      "explanation": "The MPAA of \u00a310,000 is triggered when an individual flexibly accesses taxable income from a defined contribution pension, such as taking income through flexi-access drawdown or an uncrystallised funds pension lump sum (UFPLS). Taking only tax-free cash does not trigger it."
    },
    {
      "id": "R04-006",
      "exam": "R04",
      "topic": "Tax-free cash",
      "difficulty": "easy",
      "question": "What is the maximum tax-free lump sum (pension commencement lump sum) that can normally be taken from a defined contribution pension?",
      "options": [
        "25% of the fund value, subject to a maximum of \u00a3268,275",
        "A flat \u00a3100,000",
        "25% of the fund value with no upper limit",
        "50% of the fund value"
      ],
      "answerIndex": 0,
      "explanation": "The pension commencement lump sum (PCLS) is normally 25% of the fund being crystallised, subject to an overall maximum of \u00a3268,275 (25% of the previous standard lifetime allowance of \u00a31,073,100). Some individuals may have protection entitling them to a higher amount."
    },
    {
      "id": "R04-007",
      "exam": "R04",
      "topic": "Defined benefit",
      "difficulty": "medium",
      "question": "In a defined benefit pension scheme, how is the member's retirement benefit typically calculated?",
      "options": [
        "Based on the investment returns achieved by the fund",
        "Based on the value of the member's individual pension fund",
        "Based on the contributions made by the employer only",
        "Based on a formula linked to salary and years of service"
      ],
      "answerIndex": 3,
      "explanation": "Defined benefit (DB) pensions provide a retirement income based on a formula, typically linked to the member's salary (final salary or career average) and years of pensionable service. The investment risk is borne by the employer, not the member."
    },
    {
      "id": "R04-008",
      "exam": "R04",
      "topic": "Defined contribution",
      "difficulty": "easy",
      "question": "Who bears the investment risk in a defined contribution pension scheme?",
      "options": [
        "The employer",
        "The government",
        "The scheme trustees",
        "The member"
      ],
      "answerIndex": 3,
      "explanation": "In a defined contribution (DC) scheme, the retirement benefit depends on contributions paid in and the investment returns achieved. The member bears the investment risk \u2014 if investments perform poorly, the pension fund and resulting income will be lower."
    },
    {
      "id": "R04-009",
      "exam": "R04",
      "topic": "Flexi-access drawdown",
      "difficulty": "medium",
      "question": "What is flexi-access drawdown?",
      "options": [
        "A type of annuity that provides a fixed income for life",
        "An arrangement where the pension fund remains invested and the member can take any amount of income with no upper limit",
        "A method of taking the entire pension fund as a single lump sum",
        "A defined benefit pension with flexible retirement dates"
      ],
      "answerIndex": 1,
      "explanation": "Flexi-access drawdown allows the member to keep their pension fund invested while withdrawing income as and when needed, with no upper limit on withdrawals. It provides flexibility but carries the risk of running out of money if too much is withdrawn or investments perform poorly."
    },
    {
      "id": "R04-010",
      "exam": "R04",
      "topic": "UFPLS",
      "difficulty": "medium",
      "question": "How is an Uncrystallised Funds Pension Lump Sum (UFPLS) taxed?",
      "options": [
        "100% is taxed as income",
        "25% is tax-free and 75% is taxed as income",
        "75% is tax-free and 25% is taxed as income",
        "100% is tax-free"
      ],
      "answerIndex": 1,
      "explanation": "A UFPLS is a lump sum taken directly from an uncrystallised defined contribution fund. 25% of each UFPLS payment is tax-free, and the remaining 75% is taxed as pension income at the member's marginal rate. Taking a UFPLS triggers the Money Purchase Annual Allowance."
    },
    {
      "id": "R04-011",
      "exam": "R04",
      "topic": "Annuities",
      "difficulty": "easy",
      "question": "What is the main advantage of purchasing a lifetime annuity?",
      "options": [
        "The annuity fund can be passed to beneficiaries on death",
        "The income is entirely tax-free",
        "It provides a guaranteed income for life, removing longevity risk",
        "The income can be varied depending on market conditions"
      ],
      "answerIndex": 2,
      "explanation": "A lifetime annuity provides a guaranteed income for the rest of the annuitant's life, eliminating the risk of outliving their pension savings (longevity risk). Once purchased, the terms are fixed and the capital used to buy it is not recoverable."
    },
    {
      "id": "R04-012",
      "exam": "R04",
      "topic": "Annuities",
      "difficulty": "medium",
      "question": "What is an 'enhanced annuity'?",
      "options": [
        "An annuity linked to investment performance",
        "An annuity that increases in line with inflation each year",
        "An annuity that guarantees payments for a minimum of 10 years",
        "An annuity that pays a higher rate to individuals with a reduced life expectancy due to health conditions or lifestyle factors"
      ],
      "answerIndex": 3,
      "explanation": "An enhanced (or impaired life) annuity pays a higher income to individuals whose life expectancy is reduced due to medical conditions, lifestyle factors (e.g., smoking), or other health-related circumstances. The higher rate reflects the shorter expected payment period."
    },
    {
      "id": "R04-013",
      "exam": "R04",
      "topic": "State Pension",
      "difficulty": "easy",
      "question": "How many qualifying years of National Insurance contributions are needed for the full new State Pension?",
      "options": [
        "35 years",
        "40 years",
        "45 years",
        "30 years"
      ],
      "answerIndex": 0,
      "explanation": "35 qualifying years of National Insurance contributions (or credits) are needed to receive the full new State Pension. A minimum of 10 qualifying years is required to receive any State Pension at all."
    },
    {
      "id": "R04-014",
      "exam": "R04",
      "topic": "State Pension",
      "difficulty": "medium",
      "question": "What is the current State Pension age for men and women?",
      "options": [
        "65 for both men and women",
        "67 for both men and women",
        "65 for men, 63 for women",
        "66 for both men and women"
      ],
      "answerIndex": 3,
      "explanation": "The State Pension age is currently 66 for both men and women. It is scheduled to increase to 67 between 2026 and 2028, and a further increase to 68 is planned for a later date (the government is reviewing the timetable)."
    },
    {
      "id": "R04-015",
      "exam": "R04",
      "topic": "Death benefits",
      "difficulty": "hard",
      "question": "How are defined contribution death benefits treated if the member dies before age 75 and the benefits are paid within two years?",
      "options": [
        "Taxed at the beneficiary's marginal income tax rate",
        "Subject to inheritance tax only",
        "Taxed at 40% as part of the estate",
        "Paid tax-free as a lump sum or as tax-free income"
      ],
      "answerIndex": 3,
      "explanation": "If a DC pension member dies before age 75 and benefits are designated or paid within two years, the benefits can be paid tax-free \u2014 whether as a lump sum or as income through a beneficiary's drawdown arrangement. If the member dies at 75 or over, benefits are taxed as income at the beneficiary's marginal rate."
    },
    {
      "id": "R04-016",
      "exam": "R04",
      "topic": "Pensions regulation",
      "difficulty": "medium",
      "question": "What is the role of The Pensions Regulator (TPR)?",
      "options": [
        "To provide financial advice on pension products to consumers",
        "To regulate workplace pension schemes, protect members' benefits, and oversee compliance with auto-enrolment duties",
        "To administer the State Pension on behalf of the government",
        "To set interest rates for pension investments"
      ],
      "answerIndex": 1,
      "explanation": "The Pensions Regulator (TPR) is responsible for regulating workplace pension schemes, protecting members' benefits, and ensuring employers comply with their auto-enrolment duties. It has powers to issue improvement and third-party notices, and can impose penalties."
    },
    {
      "id": "R04-017",
      "exam": "R04",
      "topic": "Pension Protection Fund",
      "difficulty": "medium",
      "question": "What does the Pension Protection Fund (PPF) provide?",
      "options": [
        "Free financial advice to pension scheme members",
        "A guaranteed minimum investment return on all pension funds",
        "Tax relief on pension contributions above the annual allowance",
        "Compensation to members of eligible defined benefit schemes where the sponsoring employer becomes insolvent"
      ],
      "answerIndex": 3,
      "explanation": "The PPF provides compensation to members of eligible defined benefit pension schemes when the sponsoring employer becomes insolvent and the scheme cannot meet its obligations. Members at or above normal pension age receive 100% of their pension; those below receive 90%, subject to a cap."
    },
    {
      "id": "R04-018",
      "exam": "R04",
      "topic": "Pension sharing",
      "difficulty": "hard",
      "question": "How does a pension sharing order work on divorce?",
      "options": [
        "The ex-spouse receives a share of the member's pension income when it is paid",
        "A percentage of the member's pension rights is transferred to the ex-spouse as a pension credit, creating an independent pension right",
        "The pension fund is split and the ex-spouse receives a cash lump sum",
        "The pension is frozen until both parties reach retirement age"
      ],
      "answerIndex": 1,
      "explanation": "A pension sharing order transfers a specified percentage of the member's pension rights to the ex-spouse as a pension credit. The ex-spouse then has an independent pension right \u2014 either within the same scheme (an internal transfer) or transferred to their own pension arrangement (an external transfer)."
    },
    {
      "id": "R04-019",
      "exam": "R04",
      "topic": "Tax relief",
      "difficulty": "easy",
      "question": "A non-earner can still contribute to a personal pension. What is the maximum gross contribution they can receive tax relief on?",
      "options": [
        "\u00a33,600",
        "\u00a310,000",
        "\u00a32,880",
        "\u00a360,000"
      ],
      "answerIndex": 0,
      "explanation": "Non-earners or those with very low earnings can contribute up to \u00a33,600 gross per year to a personal pension (paying \u00a32,880 net, with the pension provider claiming \u00a3720 basic rate tax relief from HMRC). This applies regardless of the individual's actual earnings."
    },
    {
      "id": "R04-020",
      "exam": "R04",
      "topic": "Small pots",
      "difficulty": "medium",
      "question": "What are the 'small pots' rules for pension benefits?",
      "options": [
        "The rules allow unlimited small withdrawals from any pension fund",
        "Up to three pension pots of \u00a310,000 or less each can be taken as a lump sum (25% tax-free, 75% taxed), regardless of total pension wealth",
        "Small pension pots are exempt from income tax entirely",
        "Any pension fund under \u00a3100,000 can be taken as a tax-free lump sum"
      ],
      "answerIndex": 1,
      "explanation": "The small pots rules allow individuals to take up to three personal pension pots of \u00a310,000 or less each as a lump sum, with 25% tax-free and 75% taxed as income. This does not trigger the MPAA and is available regardless of total pension wealth. Occupational scheme trivial commutation rules are separate."
    },
    {
      "id": "R04-021",
      "exam": "R04",
      "topic": "Pension Credit",
      "difficulty": "easy",
      "question": "What is Pension Credit designed to do?",
      "options": [
        "Provide additional tax relief on pension contributions",
        "Provide a lump sum to pensioners on their 75th birthday",
        "Top up the income of pensioners who have limited retirement income to a guaranteed minimum level",
        "Increase the State Pension for people who defer claiming"
      ],
      "answerIndex": 2,
      "explanation": "Pension Credit is a means-tested state benefit designed to top up the income of pensioners to a guaranteed minimum level (the Guarantee Credit). There is also a Savings Credit element for those who have made some provision for retirement beyond the State Pension."
    },
    {
      "id": "R04-022",
      "exam": "R04",
      "topic": "Retirement planning",
      "difficulty": "hard",
      "question": "Why might 'sequencing risk' be a concern for someone in flexi-access drawdown?",
      "options": [
        "Because poor investment returns in the early years of drawdown, combined with withdrawals, can permanently reduce the fund and the income it can sustain",
        "Because the order in which they take their tax-free cash affects the tax position",
        "Because the sequence of pension providers they have used affects their total fund",
        "Because HMRC requires withdrawals to be taken in a specific order"
      ],
      "answerIndex": 0,
      "explanation": "Sequencing risk (or pound-cost ravaging) means that if a drawdown investor experiences poor investment returns early in retirement while also making withdrawals, the fund is depleted more rapidly. Even if markets recover later, the fund may not recover because fewer units remain to benefit from the growth."
    },
    {
      "id": "R04-023",
      "exam": "R04",
      "topic": "Contributions",
      "difficulty": "medium",
      "question": "What is the tax treatment of employer contributions to a registered pension scheme?",
      "options": [
        "They are tax-free for the employer but taxable on the employee",
        "They receive tax relief for the employer as a business expense and are not treated as a benefit in kind for the employee",
        "They are only tax-deductible if the employer is a limited company",
        "They are treated as a benefit in kind and taxed on the employee"
      ],
      "answerIndex": 1,
      "explanation": "Employer contributions to a registered pension scheme are deductible as a business expense for the employer (subject to being wholly and exclusively for the purposes of the trade). They are not treated as a benefit in kind for the employee and do not attract employee NICs."
    },
    {
      "id": "R04-024",
      "exam": "R04",
      "topic": "Phased retirement",
      "difficulty": "medium",
      "question": "What is phased retirement?",
      "options": [
        "Crystallising pension benefits in stages over time, taking tax-free cash and income from each tranche",
        "Moving pension investments from equities to bonds as retirement approaches",
        "Gradually increasing pension contributions in the years before retirement",
        "Reducing working hours gradually while claiming the State Pension"
      ],
      "answerIndex": 0,
      "explanation": "Phased retirement involves crystallising a defined contribution pension fund in stages rather than all at once. Each tranche allows the member to take 25% tax-free cash and use the remainder for drawdown income or an annuity. This can help manage tax liabilities and keep the uncrystallised portion invested."
    }
  ],
  R05: [
    {
      "id": "R05-001",
      "exam": "R05",
      "topic": "Market factors",
      "difficulty": "easy",
      "question": "What is the 'protection gap'?",
      "options": [
        "The difference between term assurance and whole of life premiums",
        "The gap in cover during a deferred period",
        "The difference between the cover provided by the State and the cover needed by an individual to maintain their standard of living",
        "The time between applying for and receiving a protection policy"
      ],
      "answerIndex": 2,
      "explanation": "The protection gap is the difference between the financial protection people have (through state benefits and existing policies) and the amount they would actually need to maintain their standard of living following death, illness, or disability."
    },
    {
      "id": "R05-002",
      "exam": "R05",
      "topic": "Life assurance",
      "difficulty": "easy",
      "question": "What is the key difference between term assurance and whole of life assurance?",
      "options": [
        "Whole of life policies never build up a cash value",
        "Term assurance covers the policyholder for a specified period; whole of life covers them for their entire lifetime",
        "Term assurance pays out on survival, whole of life on death only",
        "Term assurance is cheaper but provides less cover"
      ],
      "answerIndex": 1,
      "explanation": "Term assurance provides cover for a specified period (e.g., 20 years) and only pays out if the life assured dies during that term. Whole of life assurance provides cover for the policyholder's entire lifetime and will always pay out on death, whenever that occurs."
    },
    {
      "id": "R05-003",
      "exam": "R05",
      "topic": "Life assurance",
      "difficulty": "medium",
      "question": "What is a 'relevant life policy' (RLP)?",
      "options": [
        "A life policy taken out on a key person in a business",
        "A personal life insurance policy that qualifies for tax relief",
        "An employer-paid death-in-service policy for an individual employee, set up under a discretionary trust, where premiums are a deductible business expense",
        "A group life scheme that covers all employees equally"
      ],
      "answerIndex": 2,
      "explanation": "A relevant life policy is an individual death-in-service benefit arranged by an employer for an employee. Premiums are a tax-deductible business expense for the employer and are not treated as a benefit in kind for the employee. The policy is written under a discretionary trust, so the benefit falls outside the employee's estate."
    },
    {
      "id": "R05-004",
      "exam": "R05",
      "topic": "Life assurance",
      "difficulty": "medium",
      "question": "What is the purpose of writing a life assurance policy in trust?",
      "options": [
        "To guarantee the policy will pay out",
        "To make the policy eligible for tax relief on premiums",
        "To ensure the proceeds are paid quickly to the intended beneficiaries and fall outside the policyholder's estate for IHT purposes",
        "To reduce the premium payable"
      ],
      "answerIndex": 2,
      "explanation": "Writing a life policy in trust means the proceeds are owned by the trust rather than the policyholder's estate. This speeds up payment to beneficiaries (no need to wait for probate) and keeps the proceeds outside the estate for inheritance tax purposes."
    },
    {
      "id": "R05-005",
      "exam": "R05",
      "topic": "Underwriting",
      "difficulty": "medium",
      "question": "What is the 'principle of utmost good faith' (uberrima fides) in insurance?",
      "options": [
        "Both parties to the insurance contract must act honestly, and the proposer must disclose all material facts",
        "The insurer must offer the lowest available premium",
        "The policyholder must pay premiums in advance of the cover starting",
        "The insurer must always pay claims without investigation"
      ],
      "answerIndex": 0,
      "explanation": "The principle of utmost good faith requires both parties to act honestly. The proposer must disclose all material facts that could influence the insurer's decision to accept the risk or the terms offered. Failure to disclose material facts could allow the insurer to void the contract."
    },
    {
      "id": "R05-006",
      "exam": "R05",
      "topic": "Income protection",
      "difficulty": "easy",
      "question": "What does an income protection insurance policy provide?",
      "options": [
        "A regular replacement income if the policyholder is unable to work due to illness or disability",
        "A guaranteed return on investment",
        "Cover for redundancy and unemployment",
        "A lump sum payment if the policyholder is diagnosed with a critical illness"
      ],
      "answerIndex": 0,
      "explanation": "Income protection insurance provides a regular replacement income (typically up to 50-70% of pre-disability earnings) if the policyholder is unable to work due to illness or disability. Benefits are usually paid until the policyholder recovers, reaches retirement age, or dies."
    },
    {
      "id": "R05-007",
      "exam": "R05",
      "topic": "Income protection",
      "difficulty": "medium",
      "question": "What is the 'deferred period' in an income protection policy?",
      "options": [
        "The time between the policy starting and the first premium being collected",
        "The period after which the policy can be cancelled",
        "The waiting period between the start of incapacity and the first benefit payment",
        "The notice period required before making a claim"
      ],
      "answerIndex": 2,
      "explanation": "The deferred period is the waiting time between the policyholder becoming incapacitated and the first benefit payment being made. Common deferred periods are 4, 8, 13, 26, or 52 weeks. A longer deferred period reduces the premium because the insurer pays out for a shorter period."
    },
    {
      "id": "R05-008",
      "exam": "R05",
      "topic": "Income protection",
      "difficulty": "hard",
      "question": "How are benefits from an individual income protection policy taxed?",
      "options": [
        "Taxed at a flat rate of 20%",
        "Tax-free, because premiums are paid from taxed income",
        "Tax-free for the first 12 months, then taxed as income",
        "Taxed as earned income at the policyholder's marginal rate"
      ],
      "answerIndex": 1,
      "explanation": "Benefits from an individual income protection policy (where the individual pays the premiums from their own taxed income) are received tax-free. However, if an employer pays the premiums and the premiums are not treated as a benefit in kind, the benefits are taxable as employment income."
    },
    {
      "id": "R05-009",
      "exam": "R05",
      "topic": "Critical illness",
      "difficulty": "easy",
      "question": "What does a critical illness insurance policy typically provide?",
      "options": [
        "Reimbursement of medical treatment costs",
        "A regular income during illness",
        "A death benefit payable to the policyholder's estate",
        "A tax-free lump sum on diagnosis of a specified critical illness"
      ],
      "answerIndex": 3,
      "explanation": "Critical illness insurance pays a tax-free lump sum upon diagnosis of a specified serious illness (such as cancer, heart attack, or stroke) that meets the policy definition. It does not provide ongoing income \u2014 it is a one-off payment."
    },
    {
      "id": "R05-010",
      "exam": "R05",
      "topic": "Critical illness",
      "difficulty": "medium",
      "question": "What is a key limitation that a client should be aware of regarding critical illness cover?",
      "options": [
        "It does not cover pre-existing conditions known at the time of application",
        "Benefits are always taxed at the basic rate",
        "The policy only covers illnesses listed in the policy definition, and the condition must meet the specific severity criteria to trigger a claim",
        "The policy automatically expires after 10 years"
      ],
      "answerIndex": 2,
      "explanation": "CIC policies only pay out if the diagnosed condition matches the policy's specific definitions and severity criteria. A diagnosis alone is not always sufficient \u2014 for example, some cancers must be of a certain stage. Conditions not listed in the policy are not covered."
    },
    {
      "id": "R05-011",
      "exam": "R05",
      "topic": "State benefits",
      "difficulty": "medium",
      "question": "What is Statutory Sick Pay (SSP) and who pays it?",
      "options": [
        "A state benefit paid by the DWP to anyone who is ill",
        "A tax credit for self-employed people unable to work",
        "A payment made by the employer to employees who are off sick, for up to 28 weeks",
        "An insurance benefit paid by the employee's union"
      ],
      "answerIndex": 2,
      "explanation": "Statutory Sick Pay is paid by the employer to eligible employees who are unable to work due to illness for at least four or more consecutive days. It is payable for up to 28 weeks. Employees must earn at least the Lower Earnings Limit to qualify."
    },
    {
      "id": "R05-012",
      "exam": "R05",
      "topic": "State benefits",
      "difficulty": "medium",
      "question": "What replaced the old Bereavement Payment and Bereavement Allowance for deaths on or after 6 April 2017?",
      "options": [
        "Universal Credit",
        "Pension Credit",
        "Widowed Parent's Allowance",
        "Bereavement Support Payment"
      ],
      "answerIndex": 3,
      "explanation": "Bereavement Support Payment (BSP) replaced the former Bereavement Payment, Bereavement Allowance, and Widowed Parent's Allowance for deaths on or after 6 April 2017. BSP consists of an initial lump sum plus up to 18 monthly payments, and is not taxable."
    },
    {
      "id": "R05-013",
      "exam": "R05",
      "topic": "Long-term care",
      "difficulty": "medium",
      "question": "What is an 'immediate needs annuity' in the context of long-term care?",
      "options": [
        "A short-term insurance policy covering the first year of care",
        "A state benefit that covers nursing home fees",
        "A regular savings plan to fund future care costs",
        "A single premium annuity that provides a guaranteed income paid directly to a care provider for the remainder of the annuitant's life"
      ],
      "answerIndex": 3,
      "explanation": "An immediate needs annuity is purchased with a single lump sum when a person is already in need of care. It pays a guaranteed income directly to the care provider for the rest of the annuitant's life. Payments made directly to the care provider are exempt from income tax."
    },
    {
      "id": "R05-014",
      "exam": "R05",
      "topic": "Taxation of life assurance",
      "difficulty": "hard",
      "question": "Under what circumstances might a chargeable event gain arise on a life assurance policy?",
      "options": [
        "When a qualifying policy matures after 10 years or more",
        "Whenever any premium is paid into the policy",
        "When the life assured dies and the death benefit is paid",
        "On the surrender, part-surrender, or maturity of a non-qualifying policy, or when a policy loan exceeds cumulative premiums paid"
      ],
      "answerIndex": 3,
      "explanation": "Chargeable event gains can arise on non-qualifying life assurance policies upon full surrender, part-surrender (if cumulative withdrawals exceed the 5% annual allowance), maturity, death, or assignment for money. Qualifying policies (e.g., eligible endowments held for 10+ years or 75% of the term) are generally exempt."
    },
    {
      "id": "R05-015",
      "exam": "R05",
      "topic": "Taxation of life assurance",
      "difficulty": "medium",
      "question": "What is the '5% tax-deferred withdrawal' allowance on a non-qualifying investment bond?",
      "options": [
        "The bondholder can withdraw up to 5% of the original investment each year without triggering an immediate chargeable event gain",
        "The bond grows at a guaranteed 5% per year",
        "5% of any gain is tax-free on encashment",
        "The bondholder receives a 5% annual dividend"
      ],
      "answerIndex": 0,
      "explanation": "Bondholders can withdraw up to 5% of the original premium each policy year on a cumulative basis without triggering an immediate chargeable event gain. This is a deferral of tax, not an exemption \u2014 the withdrawals reduce the base cost and will be accounted for when a chargeable event eventually arises."
    },
    {
      "id": "R05-016",
      "exam": "R05",
      "topic": "Business protection",
      "difficulty": "medium",
      "question": "What is 'key person' insurance?",
      "options": [
        "Insurance taken out by a business on the life or health of a person whose death or incapacity would cause the business significant financial loss",
        "A personal life policy owned by a business partner",
        "Insurance that all company directors are legally required to hold",
        "Insurance that covers the business against the loss of any employee"
      ],
      "answerIndex": 0,
      "explanation": "Key person insurance is taken out by a business on the life and/or health of an individual whose absence (due to death or serious illness) would have a significant financial impact on the business. The business pays the premiums and receives the benefit."
    },
    {
      "id": "R05-017",
      "exam": "R05",
      "topic": "Business protection",
      "difficulty": "hard",
      "question": "What is the difference between a 'buy-and-sell agreement' and a 'cross-option agreement' for shareholder protection?",
      "options": [
        "A buy-and-sell agreement is tax-free; a cross-option agreement is not",
        "A cross-option agreement is only available to partnerships",
        "There is no difference \u2014 they are the same arrangement",
        "A buy-and-sell agreement creates a binding obligation to buy and sell; a cross-option agreement gives surviving shareholders and the deceased's estate the option but not the obligation"
      ],
      "answerIndex": 3,
      "explanation": "A buy-and-sell agreement creates a binding obligation \u2014 the deceased's estate must sell and the surviving shareholders must buy. A cross-option agreement is more flexible: it gives the surviving shareholders an option to buy and the deceased's estate an option to sell, but neither is obligated. The cross-option approach can have IHT advantages as it preserves business property relief."
    },
    {
      "id": "R05-018",
      "exam": "R05",
      "topic": "Business protection",
      "difficulty": "medium",
      "question": "How are premiums for a key person life insurance policy typically treated for tax purposes?",
      "options": [
        "They are never tax-deductible",
        "They are always tax-deductible as a business expense",
        "They are only deductible for sole traders, not limited companies",
        "They may be tax-deductible if the policy is to cover loss of profits and certain HMRC conditions are met"
      ],
      "answerIndex": 3,
      "explanation": "Key person insurance premiums may be tax-deductible as a business expense if the policy is intended to compensate for loss of profits (not to provide capital) and certain conditions are met (the sole relationship is employer/employee, the policy is for a fixed term, etc.). If premiums are deductible, benefits received are taxable trading income."
    },
    {
      "id": "R05-019",
      "exam": "R05",
      "topic": "Financial protection needs",
      "difficulty": "easy",
      "question": "When assessing a client's financial protection needs, which of the following should be considered first?",
      "options": [
        "Whether the client has a will in place",
        "The cheapest available premium",
        "The provider's financial strength rating",
        "The client's existing cover (state benefits, employer benefits, and personal policies) and any shortfall against their needs"
      ],
      "answerIndex": 3,
      "explanation": "A thorough needs analysis should first establish what existing cover the client already has (from state benefits, employer schemes, and personal policies) and compare this to their actual financial needs. The gap between existing cover and needs determines what additional protection is required."
    },
    {
      "id": "R05-020",
      "exam": "R05",
      "topic": "Life assurance",
      "difficulty": "medium",
      "question": "What is 'terminal illness benefit' on a life assurance policy?",
      "options": [
        "A waiver of premiums during the terminal illness period",
        "A benefit that covers end-of-life care costs",
        "An advance payment of the sum assured if the life assured is diagnosed with a terminal illness and expected to die within 12 months",
        "An additional lump sum paid on top of the death benefit"
      ],
      "answerIndex": 2,
      "explanation": "Terminal illness benefit allows the sum assured to be paid out early if the life assured is diagnosed with a terminal illness and their life expectancy is 12 months or less. This is an acceleration of the death benefit, not an additional payment, and is typically paid tax-free."
    },
    {
      "id": "R05-021",
      "exam": "R05",
      "topic": "Underwriting",
      "difficulty": "easy",
      "question": "What is the purpose of medical underwriting in life assurance?",
      "options": [
        "To determine how much cover the applicant needs",
        "To assess the risk presented by the applicant so the insurer can offer appropriate terms and premiums",
        "To diagnose the applicant's medical conditions",
        "To ensure the applicant qualifies for NHS treatment"
      ],
      "answerIndex": 1,
      "explanation": "Medical underwriting assesses the health and lifestyle risk of the applicant so the insurer can decide whether to offer cover, and if so, on what terms and at what premium. Higher-risk applicants may face increased premiums, exclusions, or in some cases, a decline."
    },
    {
      "id": "R05-022",
      "exam": "R05",
      "topic": "Other insurance",
      "difficulty": "medium",
      "question": "What does 'waiver of premium' provide on a protection policy?",
      "options": [
        "A refund of all premiums paid if no claim is made",
        "A premium discount for healthy policyholders",
        "A guarantee that premiums will never increase",
        "The insurer waives future premiums if the policyholder becomes unable to work due to illness or disability"
      ],
      "answerIndex": 3,
      "explanation": "Waiver of premium is an optional benefit that means the insurer will pay the policy premiums on the policyholder's behalf if they are unable to work due to illness or disability, typically after a deferred period. This keeps the policy in force without the policyholder having to pay."
    },
    {
      "id": "R05-023",
      "exam": "R05",
      "topic": "Partnership protection",
      "difficulty": "hard",
      "question": "Why is partnership protection insurance important when a partner dies?",
      "options": [
        "The partnership automatically dissolves and all assets are frozen",
        "HMRC requires it as a condition of partnership registration",
        "The remaining partners automatically inherit the deceased's share",
        "The deceased partner's estate has a legal right to the value of their share of the partnership, which may need to be funded quickly to avoid the business being sold or disrupted"
      ],
      "answerIndex": 3,
      "explanation": "When a partner dies, their estate is entitled to the value of their share of the partnership. Without protection insurance, the surviving partners may need to use business funds, take out loans, or sell assets to fund the purchase. Partnership protection insurance provides a lump sum to fund this, protecting the business from disruption."
    },
    {
      "id": "R05-024",
      "exam": "R05",
      "topic": "Life assurance",
      "difficulty": "hard",
      "question": "A 'decreasing term assurance' policy is most commonly used for which purpose?",
      "options": [
        "Funding a child's university education",
        "Providing a level death benefit to cover funeral costs",
        "Protecting a repayment mortgage, where the sum assured reduces broadly in line with the outstanding mortgage balance",
        "Providing increasing cover to keep pace with inflation"
      ],
      "answerIndex": 2,
      "explanation": "Decreasing term assurance is typically used to protect a capital repayment mortgage. As the mortgage balance reduces over time with each repayment, the sum assured decreases broadly in line. This makes it cheaper than level term assurance for this specific purpose."
    }
  ],
};

const DIFFICULTY_MAP = {
  easy: 1,
  medium: 2,
  hard: 3,
};

function hashString(value) {
  let hash = 0;
  const text = String(value);
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash || 1);
}

function normalizeQuestion(raw) {
  return {
    ...raw,
    seedId: hashString(raw.id),
    d: DIFFICULTY_MAP[raw.difficulty] || 2,
    q: raw.question,
    o: raw.options,
    a: raw.answerIndex,
    e: raw.explanation,
  };
}

export const BETA_QUESTION_BANKS = Object.fromEntries(
  Object.entries(RAW_BETA_QUESTION_BANKS).map(([examId, questions]) => [
    examId,
    questions.map(normalizeQuestion),
  ])
);

export const BETA_MOCK_TIME = 30 * 60;
export const BETA_PASS_MARK = 65;

export function buildBetaMockExam(examId) {
  const questions = BETA_QUESTION_BANKS[examId] || [];
  return [...questions].sort(
    (a, b) => ((a.seedId * 3571) % 99991) - ((b.seedId * 3571) % 99991)
  );
}
