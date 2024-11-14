import { IsProductNameValid } from './utils';

describe('IsProductNameValid', () => {
    test('should return false for name starting with a number', () => {
        expect(IsProductNameValid('123')).toBe(false);
    });

    test('should return false for name starting with a lowercase letter', () => {
        expect(IsProductNameValid('abc')).toBe(false);
    });

    test('should return true for name starting with an uppercase letter', () => {
        expect(IsProductNameValid('Abc')).toBe(true);
    });

    test('should return true for name with letters and numbers', () => {
        expect(IsProductNameValid('abc123')).toBe(true);
    });

    test('should return false for name with special characters', () => {
        expect(IsProductNameValid('abc@123')).toBe(false);
    });

    test('should return false for name starting with a special character', () => {
        expect(IsProductNameValid('@abc123')).toBe(false);
    });

    test('should return false for empty name', () => {
        expect(IsProductNameValid('')).toBe(false);
    });
});