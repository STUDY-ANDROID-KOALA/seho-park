n = int(input())
check_list = sorted(list(map(int, input().split())))
m = int(input())
target_list = list(map(int, input().split()))
result = []

def binary_search(target):
    start = 0
    end = n-1
    while start <= end:
        mid = (start + end) // 2
        if target == check_list[mid]:
            return 1
        elif target > check_list[mid]:
            start = mid + 1
        else:
            end = mid - 1
    return 0

for target in target_list:
    result.append(binary_search(target))

print(*result)