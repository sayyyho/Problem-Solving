m, n = map(int, input().split())

if (n==1):
    print(1)
else:
    count = 0
    result = 0
    for i in range(1,m+1):
        if m % i == 0:
            count +=1
            if count == n:
                result = i
                break
    if count < n:
        print(0)
    else:
        print(result)
                