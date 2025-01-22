import React from 'react';

const Research = () => {
    return (
        <div className="max-w-[95%] mx-auto dark:text-gray-50">
            {/* Google Analytics Script */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-LEJ614GTC5"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-LEJ614GTC5");
                `}
            </script>

            <main className="max-w-[90%] mx-auto">
                
                <div className="mt-20">
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">
                        Government Spending Multipliers: The Size of the Fiscal Shock Matters
                    </h4>
                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                        Abstract: <br />
                        Do all types of government spending generate similar multiplier effects? A standard non-linear DSGE model predicts that both government
                        consumption and government investment multipliers are much smaller than one in the short run. I test those predictions on US data using
                        Structural Vector Auto Regression (SVAR) and Local Projections (LP) methods. In order to estimate multipliers accurately, I isolate
                        unanticipated changes in government spending. For transitory spending shocks, I find that the government investment multiplier is larger
                        than one in the short run, and the government consumption multiplier is near zero. I explore a few possible reasons for this difference.
                        First, private investment gets crowded out substantially after a government consumption shock but not after a government investment shock.
                        Second, linear and symmetric regression methods fail to capture the non-linear and asymmetric effects of consumption shocks, leading to an
                        underestimation of the consumption multiplier. I also find evidence that additional spending by state and local governments is more
                        effective in raising output than that by the federal government. This finding is related to the non-linear effects of consumption shocks.
                    </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div className="mt-4">
                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">
                        Federal Stimulus & Missing Payments: Insights from a Heterogeneous Agents Model
                    </h4>
                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                        Abstract: <br />
                        When the US federal government undertakes a stimulus program, most eligible individuals receive their stimulus checks, but some miss their
                        payments. Evidence suggests such occurrences are non-random and mostly concentrated at the bottom of the asset distribution. I use an
                        economic model with a lump-sum tax-transfer system to study the effects of missing payments. If the unused funds are not returned to
                        taxpayers or are delayed, missing payments can lower aggregate consumption, savings, and output in the short run. However, I show that if
                        the tax refunds are processed sooner, missing payments do not reduce output in the short run. Rather, the positive effect on output gets
                        stronger in the medium run than when all recipients get their payments. Since taxpayers are wealthier than those who miss payments and have
                        a higher marginal propensity to save (MPS), they save a higher share of the total tax refunds. As a result, aggregate savings will increase
                        and eventually translate into higher capital stock and output.
                    </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div className="mt-4">
                    <h4 className="leading-loose text-black dark:text-white font-semibold uppercase">Publications</h4>
                    <p className="leading-loose text-gray-600 dark:text-gray-300 mt-4">
                        Ervin, D. E., Breshears, E. H., Frisvold, G. B., Hurley, T., Dentzman, K. E., Gunsolus, J. L., Jussaume, R. A., Owen, M. D. K., Norsworthy,
                        J. K., Al Mamun, M. M., & Everman, W. (2019). Farmer Attitudes Toward Cooperative Approaches to Herbicide Resistance Management: A Common
                        Pool Ecosystem Service Challenge. <i>Ecological Economics</i>, 157, 237–245. https://doi.org/10.1016/j.ecolecon.2018.11.023 ‌
                    </p>
                    <p className="leading-loose text-gray-600 dark:text-gray-300 mt-4 mb-8">
                        Mohiuddin, Hossain and Bhuiya, Md Musfiqur Rahman and Mamun, Mustofa Mahmud Al, An Analysis of the Temperature Change of Dhaka City
                        (September 14, 2014). Proceedings of 5th International Conference on Environmental Aspects of Bangladesh, ICEAB 2014 , Available at SSRN:
                        https://ssrn.com/abstract=3522186
                    </p>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Research;