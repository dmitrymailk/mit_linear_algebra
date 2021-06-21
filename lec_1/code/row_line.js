let matrix = [
  [2, 5],
  [1, 3],
];

let vector = [1, 2];

function col_mul(matrix, vector) {
  let cols = [];

  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let j = 0; j < matrix[0].length; j++)
      temp.push(matrix[j][i] * vector[i]);
    cols.push(temp);
  }

  matrix = [];
  for (let i = 0; i < cols.length; i++) {
    let row_sum = 0;
    for (let j = 0; j < cols.length; j++) row_sum += cols[j][i];
    matrix.push(row_sum);
  }

  return matrix;
}

function row_mul(matrix, vector) {
  let temp_matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let num_sum = 0;
    for (let j = 0; j < vector.length; j++) {
      num_sum += matrix[i][j] * vector[j];
    }
    temp_matrix.push(num_sum);
  }
  console.log(temp_matrix);
  return temp_matrix;
}

// col_mul(matrix, vector);
row_mul(matrix, vector);
