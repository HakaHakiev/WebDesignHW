const students = {
  studentsNames: ["Ivan", "Pesho", "Maria"],
  scores: [5, 4, 6],

  higherScoreIndex: function () {
    let max = 0;
    let index = 0;
    for (let i = 0; i < this.scores.length; i++) {
      if (this.scores[i] > max) {
        max = this.scores[i];
        index = i;
      }
    }
    console.log(`${this.studentsNames[index]} has the higest score: ${max}`);
  },
};
students.higherScoreIndex();
// Maria has the higest score: 6
