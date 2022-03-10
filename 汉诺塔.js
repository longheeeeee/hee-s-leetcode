var hanota = function(A, B, C) {
    // 把a的前n个，通过b，走到c
    const move = (n, a, b, c) => {
        if (n === 1) {
            c.push(a.pop())
            return
        }
        // 先把前n-1个通过c走到b
        move(n-1, a, c, b)
        // 走完后a只剩下最大的，放到c
        c.push(a.pop())
        // 把剩下的n-1个从b通过a走到c
        move(n-1, b, a, c)
    }
    move(A.length, A, B, C)
    // console.log(A, B, C)
    return C
};
hanota([1,2,3,4,5], [], [])


