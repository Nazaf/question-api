const fs = require('fs');

const dataPath = './data/questions.json';

module.exports = {
  listAll: () => {
    return fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });
  },

  listById: id => {
    const data = fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });
    const values = JSON.parse(data);

    return values[id];
  },

  listAnswer: id => {
    const data = fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });
    const value = JSON.parse(data)[id];

    return value.answers ? value.answers : [];
  },

  addAnswer: (id, answer) => {
    const data = fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });
    const value = JSON.parse(data);
    const answerId = value[id].answers.length + 1;
    answer.id = answerId;
    value[id].answers.push(answer)

    fs.writeFileSync(dataPath, JSON.stringify(value, null, 2), 'utf8', (err) => {
      if(err) {
        throw err;
      }
    });
  },

  create: (question) => {
    const data = fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });

    const values = JSON.parse(data);
    const newQuestionId = Object.keys(values).length + 1;

    values[newQuestionId] = question;

    fs.writeFileSync(dataPath, JSON.stringify(values, null, 2), 'utf8', (err) => {
      if(err) {
        throw err;
      }
    });
  },
};

