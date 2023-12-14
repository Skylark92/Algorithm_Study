const case_1 = new Array(20).fill(0).map((v, i) => i + 1);

for (let i = case_1.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));

  [case_1[i], case_1[j]] = [case_1[j], case_1[i]];
}

const case_2 = new Array(20).fill(0).map((v, i) => Math.floor((Math.random() * i) + 1));

const case_3 = new Array(0);

const case_4 = new Array(1).fill(1);

module.exports = { case_1, case_2, case_3, case_4 };