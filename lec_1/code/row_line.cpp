#include <iostream>
using namespace std;

int *row_mul(int matrix[2][2], int *vector)
{
  int rows[2] = {0, 0};
  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 2; j++)
    {
      int num = matrix[j][i] * vector[i];
      rows[j] = rows[j] + num;
    }
  }
  for (int i = 0; i < 2; i++)
    cout << rows[i] << "\n";
  return rows;
}
/*
[
  [2, 5],
  [1, 3]
]
x
[1, 2]
*/

int main()
{
  int matrix[2][2] = {
      {2, 5},
      {1, 3}};
  int vector[] = {1, 2};

  int *result = row_mul(matrix, vector);
  int len = sizeof(result) / sizeof(result[0]);
  for (int i = 0; i < len; i++)
    cout << result[i] << " ";
  return 0;
}