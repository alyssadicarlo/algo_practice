def primes(n):
    primes = []
    for num in range(2,n):
        current_number = num
        factors = []
        for factor in range(2,current_number):
            if current_number % factor == 0:
                factors.append(factor)
        
        if factors == []:
            primes.append(current_number)
    
    return primes
        
        
        
print(primes(12))