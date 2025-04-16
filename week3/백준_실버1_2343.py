n, m = map(int, input().split())
lectures = list(map(int, input().split()))

def binary_search():
    start = max(lectures)
    end = sum(lectures)
    answer = end

    while start <= end:
        mid = (start + end) // 2
        count = 1
        current_sum = 0

        for lecture in lectures:
            if current_sum + lecture > mid:
                count += 1
                current_sum = lecture
            else:
                current_sum += lecture

        if count <= m:
            answer = mid
            end = mid - 1 
        else:
            start = mid + 1  
    return answer
    
print(binary_search())