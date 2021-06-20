matrix = [
    [2, 5, 2],
    [1, 3, 3],
]

vector = [1, 2, 3]


def col_mul(matrix, vector):
    temp_matrix = []

    for i in range(len(vector)):
        vec = [item[i] * vector[i] for item in matrix]
        temp_matrix.append(vec)
    temp = []
    print("Columns by num -> ", temp_matrix)
    for i in range(len(temp_matrix[0])):
        temp.append(sum([item[i] for item in temp_matrix]))
    return temp

# print(col_mul(matrix, vector))


def row_mul(matrix, vector):
    def rows_mul(row_1, row_2): return sum(
        [num_1*num_2 for num_1, num_2 in zip(row_1, row_2)])
    return [rows_mul(item, vector) for item in matrix]


print(row_mul(matrix, vector) == col_mul(matrix, vector))
