// 检查产品名称符合要求
// function name: IsProductNameValid
// function input: name: string
// function output: boolean
// requirement: the product name should begin with uppercase letter and contain only letters, numbers
// example: IsProductNameValid("123") => false
// example: IsProductNameValid("abc") => true
// example: IsProductNameValid("abc123") => true
function IsProductNameValid(name) {
    return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}
