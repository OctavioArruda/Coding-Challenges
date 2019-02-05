function isBalanced(s) {
    let stack = [];

    let output = '';

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return 'NO';
        }
    }

    stack.length === 0 ? output = 'YES' : output = 'NO';

    return output;
}