function vowels(str)
{
    let count=0;
    for (const char of str)
    {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    return count;
}
let str=prompt("Enter a string:");
console.log(vowels(str));